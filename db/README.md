# Database Migrations

This folder contains the raw SQL schema for the Reading Tracker application.

## Files

- **001_create_reading_status_enum.sql**  
  Defines the `reading_status_enum` enum type for book status values.

- **002_create_books_table.sql**  
  Creates the `books` table using the enum and includes all fields as defined in the application spec.

## How to apply these migrations manually in Supabase:

1. Go to your [Supabase project](https://app.supabase.com/).
2. Open the SQL editor.
3. Run the contents of `001_create_reading_status_enum.sql`.
4. Then run the contents of `002_create_books_table.sql`.

## Optional: Automate with Supabase CLI

You can also manage these migrations via the Supabase CLI:

```bash
supabase db push
```
