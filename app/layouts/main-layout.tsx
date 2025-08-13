import { Outlet } from 'react-router';
import type { Route } from './+types/main-layout';

import Header from '../components/header';
import Footer from '../components/footer';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Read that!' },
    {
      name: 'description',
      content: 'Welcome to Read that! A reading tracker.',
    },
  ];
}

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
