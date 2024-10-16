import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className='bg-light-gray p-5 h-screen sticky top-0 left-0 overflow-auto col-span-2'>
      <nav className='flex flex-col '>
        <NavLink
          to='/admin'
          className='p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all truncate'
        >
          Dashboard
        </NavLink>
        <NavLink to='/admin/add-service'>Add Service</NavLink>
        <NavLink to='/admin/service-list'>Service List</NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
