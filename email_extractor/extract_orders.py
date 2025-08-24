import mailbox
import re
import pandas as pd
import os
import sys

def extract_orders(mbox_path):
    # Regex patterns to extract fields
    patterns = {
        "Name": r"Name:\s*(.*)",
        "Email": r"Email:\s*(.*)",
        "Contact Number": r"Contact Number:\s*(.*)",
        "Home Address": r"Home Address:\s*(.*)",
        "Entity": r"Entity:\s*(.*)",
        "Attending Event": r"Attending Event:\s*(.*)",
        "Order Date": r"Order Date:\s*(.*)",
        "Total Items": r"Total Items:\s*(.*)",
        "Total Amount": r"Total Amount:\s*(.*)"
    }

    # Regex to extract individual order lines
    order_line_pattern = re.compile(r"([A-Za-z ]+.*?Qty: \d+.*?LKR)", re.MULTILINE)

    rows = []
    max_items = 0

    # Open and parse mbox
    mbox = mailbox.mbox(mbox_path)

    for msg in mbox:
        payload = msg.get_payload(decode=True)
        if not payload:
            continue
        text = payload.decode(errors="ignore")

        row = {}
        # Always initialize all fields (avoid KeyError)
        for field in patterns.keys():
            row[field] = ""

        # Fill values if found
        for field, pat in patterns.items():
            match = re.search(pat, text)
            if match:
                row[field] = match.group(1).strip()

        # Extract order lines
        items = order_line_pattern.findall(text)
        for i, item in enumerate(items, start=1):
            row[f"Item {i}"] = item.strip()
        max_items = max(max_items, len(items))

        rows.append(row)

    if not rows:
        print("⚠️ No valid orders found in the mbox file.")
        return

    # Ensure consistent columns (add empty item cols if missing)
    for row in rows:
        for i in range(1, max_items + 1):
            row.setdefault(f"Item {i}", "")

    # Create DataFrame
    df = pd.DataFrame(rows)

    # Ensure all base + end columns exist
    base_cols = ["Name", "Email", "Contact Number", "Home Address", "Entity", 
                 "Attending Event", "Order Date"]
    item_cols = [f"Item {i}" for i in range(1, max_items + 1)]
    end_cols = ["Total Items", "Total Amount"]

    for col in base_cols + end_cols:
        if col not in df.columns:
            df[col] = ""

    # Reorder columns safely
    df = df[base_cols + item_cols + end_cols]

    # Prepare output directory
    output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "exports")
    os.makedirs(output_dir, exist_ok=True)

    # File name matches input mbox
    base_name = os.path.splitext(os.path.basename(mbox_path))[0]
    output_file = os.path.join(output_dir, f"{base_name}.xlsx")

    # Save to Excel
    df.to_excel(output_file, index=False)

    print(f"✅ Export complete! File saved as {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_orders.py <path_to_mbox>")
        sys.exit(1)

    mbox_path = sys.argv[1]
    extract_orders(mbox_path)
