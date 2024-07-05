import Box from "../components/Box";
import { FiSearch } from "react-icons/fi";
import avatarLg from "../../public/user-lg.png";

const POST_IMG =
    "https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Home = () => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-[auto_1fr] gap-3">
                <Box className="grid place-items-center px-4">
                    <select className="bg-transparent">
                        <option value="latest">最新貼文</option>
                    </select>
                </Box>
                <Box className="grid grid-cols-[1fr_auto]">
                    <input
                        type="text"
                        placeholder="搜尋貼文"
                        className="placeholder:text-shadow border-0 px-4 py-3 outline-none"
                    />
                    <button
                        type="submit"
                        className="border-dark border-l-2 bg-primary px-3"
                    >
                        <FiSearch className="size-5 text-white" />
                    </button>
                </Box>
            </div>

            {/* NOTE: post start here */}
            <Box as="figure" rounded className="p-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-[auto_1fr]">
                        <img
                            className="row-span-2 mr-4 size-11"
                            src={avatarLg}
                            alt="user"
                        />
                        <p>邊緣小杰</p>
                        <small className="text-shadow text-xs">
                            2022/1/10 12:00
                        </small>
                    </div>

                    <p>
                        外面看起來就超冷....
                        <br />
                        我決定回被窩繼續睡....
                    </p>

                    <Box rounded>
                        <img
                            src={POST_IMG}
                            className="h-[157px] w-full object-cover object-center"
                        />
                    </Box>
                </div>
            </Box>
        </div>
    );
};

export default Home;
