import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from "../Root/Root";
import Moviedetails from "../Page/MovieDetails/Moviedetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "movie/:details",
                element: <Moviedetails></Moviedetails>,
                loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
            }
        ],
    },
]);