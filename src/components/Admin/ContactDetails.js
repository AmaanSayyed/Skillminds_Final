import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const ContactDetails = () => {
    const { id } = useParams();
    const {admin} = useAuthContext()
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const response = await axios.get(`/api/contacts/${id}`,{
                    headers:{
                        'Authorization':`Bearer ${admin.token}`
                    }
                });
                setContact(response.data);
            } catch (err) {
                setError('Failed to fetch contact details');
            } finally {
                setLoading(false);
            }
        };

        fetchContactDetails();
    }, [id,admin]);

    if (loading) return <p className="tw-text-center tw-text-gray-500">Loading...</p>;
    if (error) return <p className="tw-text-center tw-text-red-500">{error}</p>;

    if (!contact) return <p className="tw-text-center tw-text-gray-500">No contact found</p>;

    return (
        <div className="tw-container tw-mx-auto tw-my-16 tw-p-6">
            <div className="tw-max-w-4xl tw-mx-auto tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-6">
                <h2 className="tw-text-2xl tw-font-semibold tw-text-center tw-mb-6">Contact Details</h2>
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6">
                    <div className="tw-mb-4">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">First Name:</p>
                        <p className="tw-text-gray-600">{contact.firstName}</p>
                    </div>
                    <div className="tw-mb-4">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">Last Name:</p>
                        <p className="tw-text-gray-600">{contact.lastName}</p>
                    </div>
                    <div className="tw-mb-4">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">Email:</p>
                        <a href={`mailto:${contact.email}`} className="tw-text-blue-500 hover:tw-underline">{contact.email}</a>
                    </div>
                    <div className="tw-mb-4">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">Phone:</p>
                        <a href={`tel:${contact.phone}`} className="tw-text-blue-500 hover:tw-underline">{contact.phone}</a>
                    </div>
                    <div className="tw-mb-4">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">Organization:</p>
                        <p className="tw-text-gray-600">{contact.organizationName}</p>
                    </div>
                    <div className="tw-mb-4 tw-col-span-2">
                        <p className="tw-text-lg tw-font-medium tw-text-gray-700">Message:</p>
                        <p className="tw-text-gray-600">{contact.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
