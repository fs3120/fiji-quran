import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import JuzPage from "./pages/juz";
import SurahPage from "./pages/surah";
import PagePage from "./pages/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/juz",
        element: <JuzPage />,
      },
      {
        path: "/surah",
        element: <SurahPage />,
      },
      {
        path: "/page",
        element: <PagePage />,
      },
    ],
  },
]);

export default router;
