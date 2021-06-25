    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS "timescaledb";

    CREATE TABLE IF NOT EXISTS devices
    (
        id         UUID PRIMARY KEY         DEFAULT uuid_generate_v4(),
        name       TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
