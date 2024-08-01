import React from 'react';

const Modal = ({ contact, onCancel, onConfirm }) => {
  return (
    <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
      <div className="tw-bg-white tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all tw-sm:max-w-lg tw-w-full">
        <div className="tw-px-4 tw-py-5 tw-sm:p-6">
          <h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
            Delete Contact
          </h3>
          <div className="tw-mt-2">
            <p className="tw-text-sm tw-text-gray-500">
              Are you sure you want to delete the contact <strong>{contact.firstName}</strong>?
            </p>
          </div>
        </div>
        <div className="tw-bg-gray-50 tw-px-4 tw-py-3 tw-sm:px-6 tw-flex tw-justify-end">
          <button
            className=" tw-border tw-border-gray-300 tw-rounded tw-shadow-sm tw-px-4 tw-py-2 tw-bg-red-600 tw-text-white tw-mr-2"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="tw-border tw-border-gray-300 tw-rounded tw-shadow-sm tw-px-4 tw-py-2 tw-bg-gray-500 tw-text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
