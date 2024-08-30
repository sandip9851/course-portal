//root component
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./storage/store";
import { createBrowserRouter } from "react-router-dom";
import Details from "./component/Details";
import { RouterProvider } from "react-router-dom";
import UserDetails from "./component/UserDetails";

//create routing paths
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/user",
      element: <UserDetails />,
    },
  ],
  {
    basename: "/course-portal",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
