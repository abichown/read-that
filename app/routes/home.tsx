import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Read that!' },
    {
      name: 'description',
      content: 'Welcome to Read that! A reading tracker.',
    },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Welcome to Read that!</h1>
      <p>
        This is a reading tracker application where you can manage your reading
        lists and track your progress.
      </p>
    </>
  );
}
