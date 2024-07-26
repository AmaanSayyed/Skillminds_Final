import React from 'react';
import { Link } from 'react-router-dom';

const SubmitMessage = ({ onClose }) => {
    return (
        <div className="tw-bg-blue-500 tw-shadow-md tw-relative tw-flex tw-flex-col tw-items-center tw-rounded-md tw-justify-center tw-text-white tw-top-0 tw-left-0 tw-w-full tw-h-96">
            <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
                <i className="fal fa-paper-plane tw-text-4xl tw-mb-4"></i>
                <h2 className="tw-text-3xl tw-mb-2">Thank you!</h2>
                <p className="tw-mb-4 tw-text-white tw-w-1/2">We'll be in touch soon.In the meantime, why not take a look at some of our recent works.</p>
                <Link to="/#service-sec" className="tw-ring-1 tw-ring-slate-200 tw-bg-white tw-text-blue-600 tw-text-sm tw-font-medium tw-px-2 tw-py-1 tw-rounded-md">SEE OUR WORK</Link>
                <button onClick={onClose} className="tw-absolute tw-top-4 tw-right-4 tw-p-0 tw-border-none tw-bg-transparent tw-cursor-pointer tw-outline-none tw-text-white">
                    <i className='fal fa-window-close tw-text-2xl tw-text-black tw-font-bold'></i>
                    </button>
            </div>
        </div>
    );
};

export default SubmitMessage;
