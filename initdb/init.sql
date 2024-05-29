-- Create the pg_trgm extension if it doesn't exist
DO $$ BEGIN
    PERFORM * FROM pg_extension WHERE extname = 'pg_trgm';
    IF NOT FOUND THEN
        CREATE EXTENSION pg_trgm;
    END IF;
END $$;