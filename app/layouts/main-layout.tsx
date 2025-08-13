import { Outlet } from 'react-router';
import Header from '../components/header';
import Footer from '../components/footer';

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
