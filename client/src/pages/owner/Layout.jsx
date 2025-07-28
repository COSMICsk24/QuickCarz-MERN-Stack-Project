import React from 'react';
import Sidebar from '../../components/owner/Sidebar';
import NavbarOwner from '../../components/owner/NavbarOwner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarOwner />

      <div className='flex flex-1'>
          <Sidebar />
          <Outlet />
      </div>
    </div>
  );
};

export default Layout
