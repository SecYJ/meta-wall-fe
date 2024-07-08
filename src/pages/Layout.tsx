import { Box, Header, PageTitle } from "@/components";
import { ROUTES } from "@/constants";
import { FaRegBell } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { Link, NavLink, Outlet, useMatches } from "react-router-dom";
import avatarLg from "/user-lg.png";

const Layout = () => {
    const matches = useMatches();
    const hasTitle = matches.filter(
        (match) => match.handle && "title" in match.handle,
    );

    return (
        <>
            <Header />
            {/* <PageTitle>test</PageTitle> */}
            <div className="container mt-12 grid grid-cols-[7fr_5fr] gap-7">
                <main>
                    {/* NOTE: fix type error later */}
                    {hasTitle.length > 0 && (
                        <PageTitle>{hasTitle.at(-1).handle.title}</PageTitle>
                    )}
                    <Outlet />
                </main>
                <Box as="aside" className="sticky top-0 self-start px-6 py-8">
                    <Box rounded className="mb-5 drop-shadow">
                        <Link
                            to={ROUTES.POST_CREATION}
                            className="block bg-primary py-4 text-center leading-tight text-white"
                        >
                            張貼動態
                        </Link>
                    </Box>
                    <ul className="space-y-5">
                        <li className="flex items-center gap-4">
                            <img
                                src={avatarLg}
                                alt="Liao Wei Jie"
                                className="size-12 rounded-full object-cover"
                            />
                            <p>邊緣小杰</p>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.FOLLOWING}
                                className="flex items-center gap-4"
                            >
                                <Box className="grid size-12 place-items-center overflow-hidden rounded-full bg-[#E2EDFA]">
                                    <FaRegBell className="size-5 text-dark" />
                                </Box>

                                <p>追蹤名單</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={ROUTES.LIKED_POSTS}
                                className="flex items-center gap-4"
                            >
                                <Box className="grid size-12 place-items-center overflow-hidden rounded-full bg-[#E2EDFA]">
                                    <LuThumbsUp className="size-5 text-dark" />
                                </Box>
                                <p>我按讚的文章</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user001"
                                className="flex items-center gap-4"
                            >
                                <Box className="grid size-12 place-items-center overflow-hidden rounded-full bg-[#E2EDFA]">
                                    <LuThumbsUp className="size-5 text-dark" />
                                </Box>
                                <p>Profile Page</p>
                            </NavLink>
                        </li>
                    </ul>
                </Box>
            </div>
        </>
    );
};

export default Layout;
