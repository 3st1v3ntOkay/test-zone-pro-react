import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../../App";
import { About, Contact, Home } from "..";
import { Error } from '../../components';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  }
]);

export const Root = () => {
  return <RouterProvider router={router} />
}
