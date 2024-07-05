import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import avatarLg from "../../public/user-lg.png";
import Box from "../components/Box";

const AVATAR_LINK =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT12Jcz6LAkbx0AF5u0XMdYoJTtYu1u5LBtPEh35lnsOoslPoEX";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="container mt-12 grid grid-cols-[7fr_5fr] gap-7">
                <main>
                    <Outlet />
                </main>
                <Box as="aside" className="sticky top-0 self-start px-6 py-8">
                    <Box
                        as="p"
                        className="mb-5 rounded-lg bg-primary py-4 text-center leading-tight text-white drop-shadow"
                    >
                        張貼動態
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
                        <li className="flex items-center gap-4">
                            <img
                                src={AVATAR_LINK}
                                alt="Liao Wei Jie"
                                className="size-12 rounded-full object-cover"
                            />
                            <p>追蹤名單</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <img
                                src={AVATAR_LINK}
                                alt="Liao Wei Jie"
                                className="size-12 rounded-full object-cover"
                            />
                            <p>我按讚的文章</p>
                        </li>
                    </ul>
                </Box>
            </div>
        </>
    );
};

export default Layout;
