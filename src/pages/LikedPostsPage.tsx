import { Box } from "@/components";
import avatarLg from "/user-lg.png";
import { LuThumbsUp } from "react-icons/lu";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useEffect } from "react";
import { req } from "@/apis/config";

const LikedPostsPage = () => {
    useEffect(() => {
        const t = async () => {
            const res = await req.get("/users/getLikeList");
            console.log("res", res.data);
        };

        t();
    }, []);

    return (
        <div className="mt-4">
            <Box
                rounded
                withDropShadow
                as="article"
                className="grid grid-cols-[auto_1fr_auto] gap-4 p-4"
            >
                <img src={avatarLg} className="size-10" />
                <div>
                    <p>愛爾敏</p>
                    <div>
                        <p className="text-sm text-shadow">
                            發文時間：2022/1/10 12:00
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_auto] gap-9">
                    <button
                        type="button"
                        className="grid justify-items-center gap-0.5"
                    >
                        <LuThumbsUp className="size-5 text-primary" />
                        <span className="font-sm">取消</span>
                    </button>
                    <button
                        type="button"
                        className="grid justify-items-center gap-0.5"
                    >
                        <IoArrowForwardCircleOutline className="size-5 text-dark" />
                        <span className="font-sm">查看</span>
                    </button>
                </div>
            </Box>
        </div>
    );
};

export default LikedPostsPage;
