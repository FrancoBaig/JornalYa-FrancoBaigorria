import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
