import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from '@supabase/ssr';

/** Returns a Supabase client + headers for authentication handling */
export function getSupabaseServerClient(request: Request, headers: Headers) {
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const allCookies = parseCookieHeader(
            request.headers.get('cookie') ?? ''
          );
          return allCookies.filter((cookie) => cookie.value !== undefined) as {
            name: string;
            value: string;
          }[];
        },
        setAll(cookies) {
          for (const { name, value, options } of cookies) {
            headers.append(
              'Set-Cookie',
              serializeCookieHeader(name, value, options)
            );
          }
        },
      },
    }
  );
  return { supabase, headers };
}
