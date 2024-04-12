import { createBrowserRouter } from "react-router-dom";
import MenuLayout from "../layouts/MenuLayout";
import PublicRoutes from "./PublicRoutes";
import AboutLayout from "../layouts/AboutLayout";

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
        element: <MenuLayout />,
      },
      {
        path: "/cart",
        element: <MenuLayout />,
      },
      {
        path: "/signin",
        element: <MenuLayout />,
      },
    ],
  },
]);

export default routes;
