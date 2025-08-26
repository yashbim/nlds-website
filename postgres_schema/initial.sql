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