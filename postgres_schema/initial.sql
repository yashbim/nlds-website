-- Create orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id VARCHAR(50) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  contact_number VARCHAR(50) NOT NULL,
  home_address TEXT NOT NULL,
  entity VARCHAR(255) NOT NULL,
  attending_event BOOLEAN NOT NULL DEFAULT false,
  total_items INTEGER NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  order_date TIMESTAMP WITH TIME ZONE NOT NULL,
  order_items_summary TEXT NOT NULL,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  item_id VARCHAR(50) NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_size VARCHAR(50),
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_orders_order_id ON orders(order_id);
CREATE INDEX idx_orders_email ON orders(customer_email);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_orders_updated_at 
    BEFORE UPDATE ON orders 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();



-- Create merch_packs table for standalone merch pack tracking
CREATE TABLE merch_packs (
  id SERIAL PRIMARY KEY,
  pack_id VARCHAR(255) UNIQUE NOT NULL,
  pack_name VARCHAR(255) NOT NULL,
  pack_description TEXT,
  pack_price DECIMAL(10, 2) NOT NULL,
  tshirt_size VARCHAR(10),
  wristband_color VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Update order_items table to include merch pack details
ALTER TABLE order_items 
ADD COLUMN tshirt_size VARCHAR(10),
ADD COLUMN wristband_color VARCHAR(50),
ADD COLUMN item_color VARCHAR(50),
ADD COLUMN is_merch_pack BOOLEAN DEFAULT FALSE,
ADD COLUMN merch_pack_id VARCHAR(255);

-- Update orders table to better track merch pack orders
ALTER TABLE orders 
ADD COLUMN has_merch_pack BOOLEAN DEFAULT FALSE;

-- Create indexes for better performance
CREATE INDEX idx_merch_packs_pack_id ON merch_packs(pack_id);
CREATE INDEX idx_order_items_merch_pack ON order_items(merch_pack_id);
CREATE INDEX idx_orders_has_merch_pack ON orders(has_merch_pack);

-- Create function to update merch_packs updated_at timestamp
CREATE OR REPLACE FUNCTION update_merch_packs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating updated_at
CREATE TRIGGER trigger_update_merch_packs_updated_at
  BEFORE UPDATE ON merch_packs
  FOR EACH ROW
  EXECUTE FUNCTION update_merch_packs_updated_at();

-- Drop existing merch_packs table if it has wrong structure
DROP TABLE IF EXISTS merch_packs;

-- Create new merch_packs table with correct structure
CREATE TABLE merch_packs (
  id SERIAL PRIMARY KEY,
  customer VARCHAR(255) NOT NULL,
  customer_entity VARCHAR(255) NOT NULL,
  order_date TIMESTAMP NOT NULL,
  tshirt_size VARCHAR(50),
  wristband_color VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);