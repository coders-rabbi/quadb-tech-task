import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Page/Home/Home";
import Root from "../Root/Root";


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
                path: "/",
            }
        ],
    },
]);