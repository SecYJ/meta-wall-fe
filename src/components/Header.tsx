import { ROUTES } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import Box from "./Box";
import { useState } from "react";

const AVATAR_LINK =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT12Jcz6LAkbx0AF5u0XMdYoJTtYu1u5LBtPEh35lnsOoslPoEX";

const NAV_LINKS = [
    {
        label: "我的貼文牆",
        value: "home",
    },
    {
        label: "修改個人資料",
        value: ROUTES.ACCOUNT.EDIT,
    },
    {
        label: "登出",
        value: "logout",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 border-b-4 border-dark bg-white">
            <div className="container grid grid-cols-[1fr_auto] items-center gap-2 py-3">
                <Link to={ROUTES.HOME} className="text-2xl">
                    MetaWall
                </Link>
                <div
                    className="relative flex items-center gap-2.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        src={AVATAR_LINK}
                        className="size-[30px] rounded-full border-2 border-dark object-cover"
                    />
                    <p className="border-b-2 border-dark pb-1 font-bold leading-tight">
                        Member
                    </p>
                    {isOpen && (
                        <div className="absolute left-0 top-[calc(100%+8px)] min-w-[182px]">
                            <Box
                                as="ul"
                                className="divide-y-2 divide-dark text-center [&_a]:block"
                            >
                                {NAV_LINKS.map((link) => (
                                    <li key={link.value}>
                                        <NavLink
                                            to={link.value}
                                            className="py-2 hover:bg-[#EFECE7]"
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </Box>
                            <Box className="absolute left-0 top-0 -z-[1] size-full translate-x-1.5 translate-y-1.5" />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
