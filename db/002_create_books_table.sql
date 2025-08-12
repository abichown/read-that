-- Create the books table
CREATE TABLE books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  cover_url TEXT,
  total_pages SMALLINT,
  publisher TEXT,
  genres JSONB,
  published_year SMALLINT,
  reading_status reading_status_enum NOT NULL,
  current_page SMALLINT,
  star_rating NUMERIC CHECK (star_rating >= 0 AND star_rating <= 5),
  comment_note TEXT,
  date_added TIMESTAMPTZ NOT NULL DEFAULT now(),
  date_started_reading TIMESTAMPTZ,
  date_finished_reading TIMESTAMPTZ
);
