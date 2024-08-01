import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const {admin} = useAuthContext()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts',{
          headers:{
            'Authorization':`Bearer ${admin.token}`
        }
        });
        setContacts(response.data);
      } catch (err) {
        setError('Failed to fetch contacts');
      } finally {
        setLoading(false);
      }
    };
    const fetchCsrfToken = async () => {
        const response = await fetch('/api/csrf-token');
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      };
    fetchContacts();
    fetchCsrfToken();
  }, [admin]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`, {
        headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Authorization':`Bearer ${admin.token}`
        }
      });
      setContacts(contacts.filter(contact => contact._id !== id));
      setShowModal(false);
    } catch (error) {
      console.error('Failed to delete contact', error);
    }
  };

  const handleView = (id) => {
    navigate(`/admin/contacts/${id}`); 
    console.log('View contact with id:', id);
  };

  const openModal = (contact) => {
    setContactToDelete(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setContactToDelete(null);
  };

  if (loading) return <p className="tw-text-center tw-text-gray-500">Loading...</p>;
  if (error) return <p className="tw-text-center tw-text-red-500">{error}</p>;
  if (!contacts.length) return <p className="tw-text-center tw-text-gray-500">No contacts found</p>;

  return (
    <div className="tw-container tw-mx-auto tw-p-4 tw-my-16">
      <h2 className="tw-text-4xl tw-font-semibold tw-text-center tw-mb-16 tw-text-blue-500">Contact List</h2>
      <table className="tw-min-w-full tw-divide-y tw-divide-gray-200">
        <thead className="tw-bg-gray-100">
          <tr>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">First Name</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Last Name</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Phone</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Email</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Organization Name</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Date</th>
            <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="tw-bg-white tw-divide-y tw-divide-gray-200">
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.firstName}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.lastName}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.phone}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.email}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.organizationName}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">{contact.createdAt}</td>
              <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                <button
                  className="tw-bg-blue-500 tw-text-white tw-px-3 tw-py-1 tw-rounded tw-mr-2"
                  onClick={() => handleView(contact._id)}
                >
                  <i className='fal fa-eye'></i>
                </button>
                <button
                  className="tw-bg-red-500 tw-text-white tw-px-3 tw-py-1 tw-rounded"
                  onClick={() => openModal(contact)}
                >
                 <i className='fal fa-trash-can'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal
          contact={contactToDelete}
          onCancel={closeModal}
          onConfirm={() => handleDelete(contactToDelete._id)}
        />
      )}
    </div>
  );
};

export default ContactList;
