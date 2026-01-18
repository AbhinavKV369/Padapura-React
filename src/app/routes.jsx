import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Movies from "../features/movies/pages/Movies";
import Favourites from "../pages/Favorites";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "search", element: <Search /> },
      { path: "favorites", element: <Favourites /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
