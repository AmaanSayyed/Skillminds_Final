import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import adminRoutes from './adminRoutes';
import { AuthContextProvider } from '../context/AuthContext';

// Lazy loading components
const HomePage = lazy(() => import('../pages/Index'));
const AboutPage = lazy(() => import('../pages/About'));
const TeamPage = lazy(()=>import('../pages/OurTeam'));
const ContactPage = lazy(()=>import('../pages/Contact'));
const ErrorPage = lazy(()=>import('../pages/Error'));
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
const mainRoutes = [
  {
    path: '/',
    element: handleFallback(HomePage),
  },
  {
    path: '/about',
    element: handleFallback(AboutPage),
  },
  {
    path: '/ourteam',
    element: handleFallback(TeamPage),
  },
  {
    path: '/contact-us',
    element: handleFallback(ContactPage),
  },
  {
    path: '*',
    element : handleFallback(ErrorPage)
  }
]

const routes = createBrowserRouter([
  ...mainRoutes,  
  ...adminRoutes,
]);

export default function Routes() {
  return (
    <AuthContextProvider>
       <RouterProvider router={routes} />
    </AuthContextProvider>
  )
}
