import { useLoaderData } from 'react-router';
import { supabase } from '../utils/supabaseClient';

type TestTableRow = {
  id: number;
  created_at: string;
  title: string;
  contents: string | null;
};

export const loader = async (): Promise<TestTableRow[]> => {
  console.log('Loader function called');
  const { data, error } = await supabase.from('test-table').select('*');

  console.log('Data:', data);
  console.log('Error:', error);

  if (error) {
    console.error('Supabase error:', error);
    throw new Response(error.message, { status: 500 });
  }

  return data ?? [];
};

export default function TestPage() {
  const data = useLoaderData();
  console.log('Loader data:', data);

  return (
    <div>
      <h1>Supabase Test (via Loader)</h1>
      <ul>
        {data.map((row: TestTableRow) => (
          <li key={row.id}>{row.title}</li>
        ))}
      </ul>
    </div>
  );
}
