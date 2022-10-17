import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function MainLayout() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/login' && <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
