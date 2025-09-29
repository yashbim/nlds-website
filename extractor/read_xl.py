import pandas as pd
import json

def excel_to_typescript(input_file, output_file):
    """
    Convert Excel room assignment data to TypeScript format.
    
    Args:
        input_file: Path to the Excel file
        output_file: Path to the output TypeScript file
    """
    
    # Read the Excel file
    df = pd.read_excel(input_file)
    
    # Print column names for debugging
    print("Found columns:", df.columns.tolist())
    print("\nFirst few rows:")
    print(df.head())
    print("\n" + "="*50 + "\n")
    
    # Clean column names (remove extra spaces)
    df.columns = df.columns.str.strip()
    
    # Map possible column name variations to standard names
    column_mapping = {}
    
    for col in df.columns:
        col_lower = col.lower()
        if 'room' in col_lower and 'no' in col_lower:
            column_mapping['room_no'] = col
        elif col_lower == 'type':
            column_mapping['type'] = col
        elif 'gender' in col_lower:
            column_mapping['gender'] = col
        elif 'responsible' in col_lower:
            column_mapping['responsible'] = col
        elif 'position' in col_lower:
            column_mapping['position'] = col
        elif col_lower == 'room':
            column_mapping['room_name'] = col
        elif 'entity' in col_lower:
            column_mapping['entity'] = col
    
    print("Column mapping:", column_mapping)
    print("\n" + "="*50 + "\n")
    
    # Verify we have all required columns
    required = ['room_no', 'type', 'gender', 'responsible', 'position', 'room_name', 'entity']
    missing = [r for r in required if r not in column_mapping]
    if missing:
        print(f"Error: Could not find columns for: {missing}")
        print(f"Available columns: {df.columns.tolist()}")
        return
    
    rooms = []
    current_room = None
    
    for _, row in df.iterrows():
        room_no = str(row[column_mapping['room_no']]).strip() if pd.notna(row[column_mapping['room_no']]) else None
        
        # If we have a room number, start a new room
        if room_no and room_no != 'nan':
            # Save previous room if it exists
            if current_room:
                rooms.append(current_room)
            
            # Start new room
            current_room = {
                'roomNo': room_no,
                'type': str(row[column_mapping['type']]).strip(),
                'gender': str(row[column_mapping['gender']]).strip(),
                'responsiblePerson': str(row[column_mapping['responsible']]).strip(),
                'responsiblePosition': str(row[column_mapping['position']]).strip() if pd.notna(row[column_mapping['position']]) else '',
                'occupants': []
            }
        
        # Add occupant to current room
        if current_room and pd.notna(row[column_mapping['room_name']]):
            room_name = str(row[column_mapping['room_name']]).strip()
            if room_name and room_name != 'nan':
                occupant = {
                    'name': room_name,
                    'position': str(row[column_mapping['position']]).strip() if pd.notna(row[column_mapping['position']]) else '',
                    'entity': str(row[column_mapping['entity']]).strip() if pd.notna(row[column_mapping['entity']]) else ''
                }
                current_room['occupants'].append(occupant)
    
    # Don't forget the last room
    if current_room:
        rooms.append(current_room)
    
    print(f"Processed {len(rooms)} rooms")
    
    # Generate TypeScript code
    ts_code = generate_typescript_code(rooms)
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_code)
    
    print(f"Successfully converted {len(rooms)} rooms to {output_file}")


def generate_typescript_code(rooms):
    """Generate TypeScript code from room data."""
    
    ts_code = """// Room assignment types
export interface RoomOccupant {
  name: string;
  position: string;
  entity: string;
}

export interface RoomAssignment {
  roomNo: string;
  type: string;
  gender: 'M' | 'F';
  responsiblePerson: string;
  responsiblePosition: string;
  occupants: RoomOccupant[];
}

// Room assignments data
export const roomAssignments: RoomAssignment[] = [
"""
    
    # Add each room
    for i, room in enumerate(rooms):
        ts_code += "  {\n"
        ts_code += f"    roomNo: '{room['roomNo']}',\n"
        ts_code += f"    type: '{room['type']}',\n"
        ts_code += f"    gender: '{room['gender']}',\n"
        ts_code += f"    responsiblePerson: '{escape_string(room['responsiblePerson'])}',\n"
        ts_code += f"    responsiblePosition: '{escape_string(room['responsiblePosition'])}',\n"
        ts_code += "    occupants: [\n"
        
        # Add occupants
        for occupant in room['occupants']:
            ts_code += "      {\n"
            ts_code += f"        name: '{escape_string(occupant['name'])}',\n"
            ts_code += f"        position: '{escape_string(occupant['position'])}',\n"
            ts_code += f"        entity: '{escape_string(occupant['entity'])}',\n"
            ts_code += "      },\n"
        
        ts_code += "    ],\n"
        ts_code += "  }"
        
        # Add comma if not the last room
        if i < len(rooms) - 1:
            ts_code += ","
        ts_code += "\n"
    
    ts_code += """];

// Helper functions for querying the data
export const getRoomByNumber = (roomNo: string): RoomAssignment | undefined => {
  return roomAssignments.find(room => room.roomNo === roomNo);
};

export const getRoomsByGender = (gender: 'M' | 'F'): RoomAssignment[] => {
  return roomAssignments.filter(room => room.gender === gender);
};

export const getRoomsByEntity = (entity: string): RoomAssignment[] => {
  return roomAssignments.filter(room =>
    room.occupants.some(occupant => occupant.entity === entity)
  );
};

export const getPersonRoom = (personName: string): RoomAssignment | undefined => {
  return roomAssignments.find(room =>
    room.occupants.some(occupant => occupant.name === personName)
  );
};
"""
    
    return ts_code


def escape_string(s):
    """Escape single quotes in strings for TypeScript."""
    return s.replace("'", "\\'")


if __name__ == "__main__":
    # Example usage
    input_file = "C:\\Users\\Bimsara\\Desktop\\room.xlsx"  # Change this to your Excel file path
    output_file = "C:\\Users\\Bimsara\\Desktop\\room.ts"     # Output TypeScript fi
    
    try:
        excel_to_typescript(input_file, output_file)
    except FileNotFoundError:
        print(f"Error: Could not find file '{input_file}'")
        print("Please update the input_file variable with the correct path to your Excel file.")
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()