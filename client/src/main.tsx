import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Resume from "./components/Header/Header.tsx";
import About from "./Pages/About/About.tsx";
import Contact from "./Pages/Contact/Contact.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import Portfolio from "./Pages/Portfolio/Portfolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
