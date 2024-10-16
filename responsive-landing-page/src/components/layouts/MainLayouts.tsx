import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar/Navbar';

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
