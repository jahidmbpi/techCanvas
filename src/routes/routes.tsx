import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import ProjectThreePage from "../shared/Projects/ProjectDetails/ProjectThreePage";
import Portfolio from "../pages/Portfolio/Portfolio";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import PercelDelivery from "../shared/Projects/ProjectDetails/PercelDelivery";
import LocalGuaid from "../shared/Projects/ProjectDetails/LocalGuaid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: MainLayout(),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "techcanvas",
        element: <ProjectThreePage />,
      },
      {
        path: "local-guaid",
        element: <LocalGuaid />,
      },
      {
        path: "percel-delivery",
        element: <PercelDelivery />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
