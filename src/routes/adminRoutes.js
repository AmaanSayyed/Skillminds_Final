import { lazy, Suspense } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";
import AdminLayout from "../components/Admin/Layout/AdmindLayout";

const ContactList = lazy(() => import('../components/Admin/ContactList'));
const ContactDetails = lazy(() => import('../components/Admin/ContactDetails'));
const DashboardPage = lazy(() => import('../components/Admin/Dashboard'));
const LoginPage = lazy(() => import('../components/Admin/Login'));

// Spinner component
const Spinner = () => {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-h-screen">
            Loading...
            <div className="tw-spinner tw-border-t-4 tw-border-blue-500 tw-border-solid tw-rounded-full tw-w-12 tw-h-12 tw-animate-spin"></div>
        </div>
    );
};

const handleFallback = (Component) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    );
};

const AuthProtected = ({ children }) => {
    const { admin } = useAuthContext();
    return admin ? children : <Navigate to="/login" />;
};

const LoginProtected = ({ children }) => {
    const { admin } = useAuthContext();
    return !admin ? children : <Navigate to="/admin" />;
};

const adminRoutes = [
    {
        path: '/admin',
        element: (
            <AuthProtected>
                <AdminLayout>
                    {handleFallback(DashboardPage)}
                </AdminLayout>
            </AuthProtected>
        ),
    },
    {
        path: '/admin/contacts',
        element: (
            <AuthProtected>
               <AdminLayout>
                    {handleFallback(ContactList)}
               </AdminLayout>
            </AuthProtected>
        ),
    },
    {
        path: '/admin/contacts/:id',
        element: (
            <AuthProtected>
                <AdminLayout>
                    {handleFallback(ContactDetails)}
                </AdminLayout>
            </AuthProtected>
        ),
    },
    {
        path: '/login',
        element: (
            <LoginProtected>
                {handleFallback(LoginPage)}
            </LoginProtected>
        ),
    },
];

export default adminRoutes;
