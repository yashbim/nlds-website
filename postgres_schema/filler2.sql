-- SQL script to insert 50 dummy orders and associated order items
-- Generated on 2025-08-30

-- Sample items data for reference
DO $$
DECLARE
    items JSONB[] := ARRAY[
        '{"item_id": "ITEM001", "name": "T-Shirt", "sizes": ["S", "M", "L", "XL"], "price": 19.99}',
        '{"item_id": "ITEM002", "name": "Jeans", "sizes": ["S", "M", "L"], "price": 49.99}',
        '{"item_id": "ITEM003", "name": "Sneakers", "sizes": ["7", "8", "9", "10"], "price": 79.99}',
        '{"item_id": "ITEM004", "name": "Jacket", "sizes": ["M", "L", "XL"], "price": 99.99}',
        '{"item_id": "ITEM005", "name": "Hat", "sizes": ["One Size"], "price": 14.99}'
    ]::JSONB[];
    entities TEXT[] := ARRAY['Individual', 'Business', 'Non-Profit'];
    order_id TEXT;
    customer_name TEXT;
    customer_email TEXT;
    contact_number TEXT;
    home_address TEXT;
    entity TEXT;
    attending_event BOOLEAN;
    order_date TIMESTAMP;
    created_at TIMESTAMP;
    updated_at TIMESTAMP;
    num_items INTEGER;
    total_amount NUMERIC;
    total_items INTEGER;
    order_items_summary TEXT;
    order_id_int INTEGER;
    i INTEGER;
    j INTEGER;
    item JSONB;
    quantity INTEGER;
    item_size TEXT;
    total_price NUMERIC;
    order_items JSONB[];
BEGIN
    -- Generate 50 orders
    FOR i IN 1..50 LOOP
        -- Generate order data
        order_id := 'ORD-' || (1000 + FLOOR(RANDOM() * 9000)::INTEGER) || '-' || (100 + FLOOR(RANDOM() * 900)::INTEGER);
        customer_name := (SELECT initcap(string_agg(chr((65 + round(random() * 25))::INTEGER), '') || ' ' || chr((65 + round(random() * 25))::INTEGER) || string_agg(chr((97 + round(random() * 25))::INTEGER), '')) 
                         FROM generate_series(1, 5 + FLOOR(RANDOM() * 5)::INTEGER));
        customer_email := lower(replace(customer_name, ' ', '.')) || '@example.com';
        contact_number := '+' || (100 + FLOOR(RANDOM() * 900)::INTEGER)::TEXT || '-' || (1000000 + FLOOR(RANDOM() * 9000000)::INTEGER)::TEXT;
        home_address := (SELECT string_agg(chr((65 + round(random() * 25))::INTEGER), '') || ' ' || 
                               string_agg(chr((97 + round(random() * 25))::INTEGER), '') || ' St, ' || 
                               (100 + FLOOR(RANDOM() * 900)::INTEGER)::TEXT || ', ' || 
                               string_agg(chr((65 + round(random() * 25))::INTEGER), '') || ', USA' 
                        FROM generate_series(1, 5 + FLOOR(RANDOM() * 5)::INTEGER));
        entity := entities[FLOOR(RANDOM() * array_length(entities, 1)) + 1];
        attending_event := (RANDOM() > 0.5);
        order_date := NOW() - (INTERVAL '1 year' * RANDOM());
        created_at := order_date;
        updated_at := created_at;

        -- Generate 1-5 order items
        num_items := 1 + FLOOR(RANDOM() * 5)::INTEGER;
        total_amount := 0;
        total_items := 0;
        order_items := ARRAY[]::JSONB[];

        FOR j IN 1..num_items LOOP
            item := items[FLOOR(RANDOM() * array_length(items, 1)) + 1];
            quantity := 1 + FLOOR(RANDOM() * 3)::INTEGER;
            item_size := (item->'sizes'->(FLOOR(RANDOM() * jsonb_array_length(item->'sizes'))::INTEGER))::TEXT;
            total_price := (item->>'price')::NUMERIC * quantity;
            total_amount := total_amount + total_price;
            total_items := total_items + quantity;

            order_items := order_items || jsonb_build_object(
                'item_id', item->>'item_id',
                'item_name', item->>'name',
                'item_size', item_size,
                'price', (item->>'price')::NUMERIC,
                'quantity', quantity,
                'total_price', total_price
            );
        END LOOP;

        -- Generate order items summary
        order_items_summary := (
            SELECT string_agg(
                format('%s (Size: %s, Qty: %s, Total: $%s)',
                    (item->>'item_name')::TEXT,
                    (item->>'item_size')::TEXT,
                    (item->>'quantity')::TEXT,
                    to_char((item->>'total_price')::NUMERIC, 'FM999999.99')
                ),
                '; '
            )
            FROM unnest(order_items) AS item
        );

        -- Insert into orders table
        INSERT INTO orders (
            order_id, customer_name, customer_email, contact_number, home_address,
            entity, attending_event, total_items, total_amount, order_date,
            order_items_summary, email_sent, created_at, updated_at
        ) VALUES (
            order_id, customer_name, customer_email, contact_number, home_address,
            entity, attending_event, total_items, total_amount, order_date,
            order_items_summary, FALSE, created_at, updated_at
        ) RETURNING id INTO order_id_int;

        -- Insert into order_items table
        FOR j IN 1..array_length(order_items, 1) LOOP
            item := order_items[j];
            INSERT INTO order_items (
                order_id, item_id, item_name, item_size, price, quantity, total_price, created_at
            ) VALUES (
                order_id_int,
                (item->>'item_id')::TEXT,
                (item->>'item_name')::TEXT,
                (item->>'item_size')::TEXT,
                (item->>'price')::NUMERIC,
                (item->>'quantity')::INTEGER,
                (item->>'total_price')::NUMERIC,
                created_at
            );
        END LOOP;
    END LOOP;
END $$;

-- Commit the transaction
COMMIT;