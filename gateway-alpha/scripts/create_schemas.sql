CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE tests;

-- CREATE TABLE devices
-- (
--     id         UUID PRIMARY KEY         DEFAULT uuid_generate_v4(),
--     name       TEXT,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
--     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );

-- CREATE TABLE vehicles
-- (
--     device_id UUID REFERENCES devices (id),
--     count     INT,
--     time      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
-- );
-- CREATE INDEX ON vehicles (device_id, time DESC);
-- SELECT create_hypertable('vehicles', 'time', chunk_time_interval => INTERVAL '6 months');