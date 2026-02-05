import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/site/SiteLayout';
import HomePage from './pages/HomePage';
import TradingPage from './pages/TradingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminInquiriesPage from './pages/admin/AdminInquiriesPage';
import AdminInquiryDetailsPage from './pages/admin/AdminInquiryDetailsPage';
import AdminGuard from './components/admin/AdminGuard';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const tradingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/trading',
  component: TradingPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inquiries',
  component: () => (
    <AdminGuard>
      <AdminInquiriesPage />
    </AdminGuard>
  ),
});

const adminInquiryDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inquiries/$id',
  component: () => (
    <AdminGuard>
      <AdminInquiryDetailsPage />
    </AdminGuard>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  tradingRoute,
  aboutRoute,
  contactRoute,
  adminInquiriesRoute,
  adminInquiryDetailsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
