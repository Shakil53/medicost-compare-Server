import App from "@/App";
import CreateLinkPage from "@/pages/createLinkPage/createLinkPage";
import {createBrowserRouter,} from "react-router-dom";

export const router = createBrowserRouter([


    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <CreateLinkPage></CreateLinkPage>
            }
        ]
    }
]);


