const AVATAR_LINK =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT12Jcz6LAkbx0AF5u0XMdYoJTtYu1u5LBtPEh35lnsOoslPoEX";

const Header = () => {
    return (
        <header className="border-dark border-b-4">
            <div className="container grid grid-cols-[1fr_auto_auto] items-center gap-2 py-3">
                <h1 className="text-[26px]">MetaWall</h1>
                <img
                    src={AVATAR_LINK}
                    className="border-dark size-[30px] rounded-full border-2 object-cover"
                />
                <p className="border-dark border-b-2 pb-1 font-bold leading-tight">
                    Member
                </p>
            </div>
        </header>
    );
};

export default Header;
