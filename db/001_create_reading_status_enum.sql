-- Create the enum type for reading_status values
CREATE TYPE reading_status_enum AS ENUM (
  'to_read',
  'in_progress',
  'read',
  'did_not_finish'
);