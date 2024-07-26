import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading components
const HomePage = lazy(() => import('../pages/Index'));
const AboutPage = lazy(() => import('../pages/About'));
const TeamPage = lazy(()=>import('../pages/OurTeam'));
const ContactPage = lazy(()=>import('../pages/Contact'));
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

const routes = createBrowserRouter([
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
  
]);

export default function Routes() {
  return <RouterProvider router={routes} />;
}
