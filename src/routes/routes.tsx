import { createBrowserRouter } from "react-router-dom";
import MenuLayout from "../layouts/MenuLayout";
import PublicRoutes from "./PublicRoutes";
import AboutLayout from "../layouts/AboutLayout";
import PaymentLayout from "../layouts/PaymentLayout";
import CartLayout from "../layouts/CartLayout";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";

const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuLayout />,
      },
      {
        path: "/about",
        element: <AboutLayout />,
      },
      {
        path: "/pay",
        element: <PaymentLayout />,
      },
      {
        path: "/cart",
        element: <CartLayout />,
      },
      {
        path: "/signin",
        element: <MenuLayout />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);

export default routes;
