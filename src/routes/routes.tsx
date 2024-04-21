import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const MenuLayout = lazy(() => import("../layouts/MenuLayout"));
const PublicRoutes = lazy(() => import("./PublicRoutes"));
const AboutLayout = lazy(() => import("../layouts/AboutLayout"));
const CartLayout = lazy(() => import("../layouts/CartLayout"));
const Home = lazy(() => import("../components/Home"));
const LoginForm = lazy(() => import("../components/LoginForm"));
const SignUpForm = lazy(() => import("../components/SignUpForm"));
const OrdersLayout = lazy(() => import("../layouts/OrdersLayout"));
const DealsLayout = lazy(() => import("../layouts/DealsLayout"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const CheckOutLayout = lazy(() => import("../layouts/CheckOutLayout"));
const OrderConfirmation = lazy(() => import("../components/OrderConfirmation"));
const OrderDetailsLayout = lazy(() => import("../layouts/OrderDetailsLayout"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const CommonLayout = lazy(() => import("../layouts/CommonLayout"));

import SuspenseLoader from "../layouts/SuspenseLoader";
const routes = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <PublicRoutes />
      </Suspense>
    ),
    children: [
      {
        path: "/signup",
        element: <SignUpForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <PrivateRoutes />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <CommonLayout>
          <PrivateRoutes />
        </CommonLayout>
      </Suspense>
    ),
    children: [
      {
        path: "/menu",
        element: <MenuLayout />,
      },
      {
        path: "/about",
        element: <AboutLayout />,
      },
      {
        path: "/cart",
        element: <CartLayout />,
      },
      {
        path: "/orders",
        element: <OrdersLayout />,
      },
      {
        path: "/deals",
        element: <DealsLayout />,
      },
      {
        path: "/checkout",
        element: <CheckOutLayout />,
      },
      {
        path: "/confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/orderdetails/:orderId",
        element: <OrderDetailsLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
