import { createBrowserRouter } from "react-router-dom";
import MenuLayout from "../layouts/MenuLayout";
import PublicRoutes from "./PublicRoutes";
import AboutLayout from "../layouts/AboutLayout";
import PaymentLayout from "../layouts/PaymentLayout";
import CartLayout from "../layouts/CartLayout";

const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

export default routes;
