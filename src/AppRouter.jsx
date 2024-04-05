import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GroupPage, UserPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/user/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

const router = createBrowserRouter(Routes, {basename: "/ug"});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />