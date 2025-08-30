import psycopg2
from faker import Faker
import random
from datetime import datetime, timedelta
import uuid

# Initialize Faker for generating dummy data
fake = Faker()
# Database connection parameters
db_params = {
    'dbname': 'nlds-merch',
    'user': 'neondb_owner',
    'password': 'npg_GdJcMwe9ta3C',
    'host': 'ep-misty-math-a1ii68q1-pooler.ap-southeast-1.aws.neon.tech',
    'port': '5432'
}

# Sample items for order_items
items = [
    {'item_id': 'ITEM001', 'name': 'T-Shirt', 'sizes': ['S', 'M', 'L', 'XL'], 'price': 19.99},
    {'item_id': 'ITEM002', 'name': 'Jeans', 'sizes': ['S', 'M', 'L'], 'price': 49.99},
    {'item_id': 'ITEM003', 'name': 'Sneakers', 'sizes': ['7', '8', '9', '10'], 'price': 79.99},
    {'item_id': 'ITEM004', 'name': 'Jacket', 'sizes': ['M', 'L', 'XL'], 'price': 99.99},
    {'item_id': 'ITEM005', 'name': 'Hat', 'sizes': ['One Size'], 'price': 14.99}
]

# Function to generate a random order ID
def generate_order_id():
    return f"ORD-{random.randint(1000, 9999)}-{random.randint(100, 999)}"

# Function to generate order items summary
def generate_order_items_summary(order_items):
    summary = []
    for item in order_items:
        summary.append(f"{item['item_name']} (Size: {item['item_size']}, Qty: {item['quantity']}, Total: ${item['total_price']:.2f})")
    return "; ".join(summary)

try:
    # Connect to the database
    conn = psycopg2.connect(**db_params)
    cur = conn.cursor()

    # Generate and insert 50 orders
    for _ in range(50):
        # Generate order data
        order_id_str = generate_order_id()
        customer_name = fake.name()
        customer_email = fake.email()
        contact_number = fake.phone_number()
        home_address = fake.address().replace('\n', ', ')
        entity = random.choice(['Individual', 'Business', 'Non-Profit'])
        attending_event = random.choice([True, False])
        order_date = fake.date_time_between(start_date='-1y', end_date='now', tzinfo=None)
        created_at = order_date
        # updated_at is set to NOW() by default in the schema; trigger handles updates
        updated_at = created_at

        # Generate 1-5 order items for this order
        num_items = random.randint(1, 5)
        order_items = []
        total_amount = 0
        total_items = 0

        for _ in range(num_items):
            item = random.choice(items)
            quantity = random.randint(1, 3)
            item_size = random.choice(item['sizes'])
            total_price = item['price'] * quantity
            total_amount += total_price
            total_items += quantity

            order_items.append({
                'item_id': item['item_id'],
                'item_name': item['name'],
                'item_size': item_size,
                'price': item['price'],
                'quantity': quantity,
                'total_price': total_price
            })

        # Generate order items summary
        order_items_summary = generate_order_items_summary(order_items)

        # Insert into orders table
        order_query = """
            INSERT INTO orders (
                order_id, customer_name, customer_email, contact_number, home_address,
                entity, attending_event, total_items, total_amount, order_date,
                order_items_summary, email_sent, created_at, updated_at
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            RETURNING id
        """
        order_values = (
            order_id_str, customer_name, customer_email, contact_number, home_address,
            entity, attending_event, total_items, total_amount, order_date,
            order_items_summary, False, created_at, updated_at
        )
        cur.execute(order_query, order_values)
        order_id = cur.fetchone()[0]

        # Insert into order_items table
        order_item_query = """
            INSERT INTO order_items (
                order_id, item_id, item_name, item_size, price, quantity, total_price, created_at
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """
        for item in order_items:
            cur.execute(order_item_query, (
                order_id,
                item['item_id'],
                item['item_name'],
                item['item_size'],
                item['price'],
                item['quantity'],
                item['total_price'],
                created_at
            ))

    # Commit the transaction
    conn.commit()
    print("Successfully inserted 50 orders with associated order items.")

except Exception as e:
    print(f"An error occurred: {e}")
    conn.rollback()

finally:
    # Close the cursor and connection
    cur.close()
    conn.close()