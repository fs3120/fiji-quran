import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Layout from "./layout";
import ErrorPage from "./pages/error";
import JuzPage from './pages/juz';
import SurahPage from "./pages/surah";
import SheetPage from './pages/sheet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
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
        element: <SheetPage />,
      },
    ],
  },
]);

export default router;
