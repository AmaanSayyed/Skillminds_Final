// components/Admin/AdminLayout.jsx
import React from 'react';
import Navbar from './Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="tw-container tw-mx-auto tw-p-4">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
