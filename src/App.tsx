import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components";
import { ROUTES } from "./constants";
import {
    Layout,
    LikedPostsPage,
    PostCreationPage,
    ProfilePage,
} from "./pages";
import {
    AccountEditPage,
    AccountEditPasswordPage,
    AccountLayout,
} from "./pages/account";
import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/home";
import { FollowingPage } from "./pages/following";

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
                {
                    path: ROUTES.POST_CREATION,
                    element: <PostCreationPage />,
                    handle: {
                        title: "張貼動態",
                    },
                },
                {
                    path: ROUTES.LIKED_POSTS,
                    element: <LikedPostsPage />,
                    handle: {
                        title: "我按讚的貼文",
                    },
                },
                {
                    path: ROUTES.USERNAME,
                    element: <ProfilePage />,
                },
            ],
        },
        {
            path: ROUTES.AUTH,
            element: <AuthPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
