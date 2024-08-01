import React, { useEffect, useState } from 'react';
import useMask from '../../hooks/useMask';
import Form from '../Form/Form';
import SubmitMessage from '../Form/SubmitMessage';

const ContactForm = () => {
    // Custom hook for applying masks (e.g., input masks)
    useMask();

    // State for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organizationName: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    // State for CSRF token
    const [csrfToken, setCsrfToken] = useState('');

    // State for controlling the display of the success message
    const [showMessage, setShowMessage] = useState(false);

    // Fetch the CSRF token when the component mounts
    useEffect(() => {
        const fetchCsrfToken = async () => {
            const response = await fetch('/api/csrf-token');
            const data = await response.json();
            setCsrfToken(data.csrfToken);
        };
        fetchCsrfToken();
    }, []);

    // Handle input changes and update the form data state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = 'First name must contain only letters and spaces';
        }else if (formData.firstName.trim().length < 3) {
            newErrors.firstName = 'First name must be at least 3 characters long';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = 'Last name must contain only letters and spaces';
        }else if (formData.lastName.trim().length < 3) {
        newErrors.lastName = 'Last name must be at least 3 characters long';
    }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if(!/^(\+\d{1,2}\s?)?(\d{10}|\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formData.organizationName.trim()) {
            newErrors.organizationName = 'Organization name is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': csrfToken,
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Contact saved successfully: ', data);

                // Reset the form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    organizationName: '',
                    message: ''
                });

                // Show the success message
                setShowMessage(true);
            } else {
                const errorData = await response.json();
                console.error('Failed to save contact: ', errorData.message);
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    // Close the success message
    const handleClose = () => {
        setShowMessage(false);
    };

    return (
        <div className="bg-smoke space" data-bg-src="./assets/img/bg/contact_bg_1.png" id="contact-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="title-area mb-35 text-xl-start text-center">
                            <span className="sub-title">
                                <div className="icon-masking me-2">
                                    <span className="mask-icon" data-mask-src="./assets/img/theme-img/title_shape_2.svg"></span>
                                    <img src="./assets/img/theme-img/title_shape_2.svg" alt="shape" />
                                </div>contact us!
                            </span>
                            <h2 className="sec-title">Get in Touch with SkillMinds!</h2>
                            <p className="sec-text">Reach out to us for tailored Salesforce solutions and expert consulting services. We're here to help you achieve your business goals.</p>
                        </div>
                        <div className="tw-container tw-relative tw-w-full tw-h-full">
                            {!showMessage ? (
                                // Show the contact form if the message is not shown
                                <Form handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} errors={errors} />
                            ) : (
                                // Show the success message if the form is successfully submitted
                                <SubmitMessage onClose={handleClose} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
