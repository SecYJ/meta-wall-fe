import { Box } from "@/components";
import avatarLg from "/user-lg.png";
import { useFollowing } from "./hooks/useFollowing";

const FollowingPage = () => {
    // NOTE: todo later since following is not implemented yet
    const f = useFollowing();
    console.log("fData", f.data);
    return (
        <div className="mt-4 space-y-4">
            {/* NOTE: post start here */}
            {Array.from({ length: 10 }, (_, index) => (
                <Box
                    key={index}
                    rounded
                    withDropShadow
                    as="article"
                    className="grid grid-cols-[auto_1fr] gap-4 p-4"
                >
                    <img src={avatarLg} className="size-10" />
                    <div>
                        <p>愛爾敏</p>
                        <div className="flex justify-between">
                            <p className="text-sm text-shadow">
                                追蹤時間：2022/1/10 12:00
                            </p>
                            <p>您已追蹤 90 天！</p>
                        </div>
                    </div>
                </Box>
            ))}
        </div>
    );
};

export default FollowingPage;
