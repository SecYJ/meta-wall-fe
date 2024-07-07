import { FiSearch } from "react-icons/fi";
import { LuThumbsUp } from "react-icons/lu";
import avatarLg from "/user-lg.png";
import { Box } from "@/components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";

const POST_IMG =
    "https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomePage = () => {
    return (
        <div className="space-y-4">
            <Link to={ROUTES.ACCOUNT.EDIT}>go to account page</Link>
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
                        className="border-0 px-4 py-3 outline-none placeholder:text-shadow"
                    />
                    <button
                        type="submit"
                        className="border-l-2 border-dark bg-primary px-3"
                    >
                        <FiSearch className="size-5 text-white" />
                    </button>
                </Box>
            </div>

            {/* NOTE: post start here */}
            <Box as="figure" rounded className="space-y-4 p-6">
                <div className="grid grid-cols-[auto_1fr]">
                    <img
                        className="row-span-2 mr-4 size-11"
                        src={avatarLg}
                        alt="user"
                    />
                    <p>邊緣小杰</p>
                    <small className="text-xs text-shadow">
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

                <div className="flex gap-2">
                    <button type="button">
                        <LuThumbsUp className="size-5 text-primary" />
                    </button>
                    <p>12</p>
                </div>

                <div className="grid grid-cols-[auto_1fr] gap-2">
                    <img src={avatarLg} alt="" className="size-10" />
                    <Box className="grid grid-cols-[1fr_auto]">
                        <input
                            type="text"
                            placeholder="留言"
                            className="border-0 px-4 py-2 outline-none placeholder:text-shadow"
                        />
                        <button
                            type="submit"
                            className="border-l-2 border-dark bg-primary px-12 text-white"
                        >
                            留言
                        </button>
                    </Box>
                </div>

                <ul className="space-y-4">
                    <li className="grid grid-cols-[auto_1fr] grid-rows-3 rounded-xl bg-[#EFECE7] p-4">
                        <img
                            src={avatarLg}
                            className="row-span-3 mr-3 size-10"
                            alt="user"
                        />
                        <p>希琳</p>
                        <small className="leading-relaxed">
                            2022/1/11 10:00
                        </small>
                        <p className="mt-1">真的～我已經準備冬眠了</p>
                    </li>
                    <li className="grid grid-cols-[auto_1fr] grid-rows-3 rounded-xl bg-[#EFECE7] p-4">
                        <img
                            src={avatarLg}
                            className="row-span-3 mr-3 size-10"
                            alt="user"
                        />
                        <p>希琳</p>
                        <small className="leading-relaxed">
                            2022/1/11 10:00
                        </small>
                        <p className="mt-1">真的～我已經準備冬眠了</p>
                    </li>
                </ul>
            </Box>
        </div>
    );
};

export default HomePage;
