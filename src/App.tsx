import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { FollowingPage, HomePage, Layout } from "./pages";
import {
    AccountEditPage,
    AccountEditPasswordPage,
    AccountLayout,
} from "./pages/account";
import { ROUTES } from "./constants";
import { ErrorBoundary } from "./components";

const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout />,
            errorElement: <ErrorBoundary />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: ROUTES.FOLLOWING,
                    element: <FollowingPage />,
                    handle: {
                        title: "追蹤名單",
                    },
                },
                {
                    path: ROUTES.ACCOUNT.EDIT,
                    element: <AccountLayout />,
                    handle: {
                        title: "修改個人資料",
                    },
                    children: [
                        {
                            element: <AccountEditPage />,

                            index: true,
                        },
                        {
                            path: ROUTES.ACCOUNT.PASSWORD,
                            element: <AccountEditPasswordPage />,
                        },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
