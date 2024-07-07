import { ROUTES } from "@/constants";
import { Link } from "react-router-dom";

const AVATAR_LINK =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT12Jcz6LAkbx0AF5u0XMdYoJTtYu1u5LBtPEh35lnsOoslPoEX";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 border-b-4 border-dark bg-white">
            <div className="container grid grid-cols-[1fr_auto_auto] items-center gap-2 py-3">
                <Link to={ROUTES.HOME} className="text-2xl">
                    MetaWall
                </Link>
                <img
                    src={AVATAR_LINK}
                    className="size-[30px] rounded-full border-2 border-dark object-cover"
                />
                <p className="border-b-2 border-dark pb-1 font-bold leading-tight">
                    Member
                </p>
            </div>
        </header>
    );
};

export default Header;
