// components/Admin/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useAuthContext';
import {useLogout} from '../../../hooks/useLogout'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {admin} = useAuthContext()
  const {logout} = useLogout()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //logout
  const handleClick=()=>{
    logout()
  }
  return (
    <nav className="tw-bg-gray-800 tw-p-4">
      <div className="tw-container tw-mx-auto tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-items-center">
          <Link to="/admin" className="tw-text-white tw-font-bold tw-text-xl">
            Dashboard
          </Link>
        </div>
        <div className="tw-hidden md:tw-flex tw-items-center">
          <Link to="/admin" className="tw-text-white tw-mx-4">
            Dashboard
          </Link>
          <Link to="/admin/contacts" className="tw-text-white tw-mx-4">
            Contacts
          </Link>
          <span className='tw-ml-4 tw-text-purple-500 tw-font-semibold'><i className='fas fa-user-cog tw-mx-2'></i>Welcome {admin.username}</span>
          <span className='tw-ml-4 tw-text-white tw-font-semibold hover:tw-text-purple-600 tw-cursor-pointer' onClick={handleClick}><i className='fal fa-sign-out tw-mx-2'></i>Logout</span>
        </div>
        <div className="md:tw-hidden">
          <button
            onClick={toggleMenu}
            className="tw-text-white tw-outline-none tw-focus:outline-none"
          >
            <svg
              className="tw-w-6 tw-h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="tw-md:hidden tw-bg-gray-700 tw-py-2">
          <Link to="/admin" className="tw-block tw-text-white tw-px-4 tw-py-2">
            Dashboard
          </Link>
          <Link to="/admin/contacts" className="tw-block tw-text-white tw-px-4 tw-py-2">
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
