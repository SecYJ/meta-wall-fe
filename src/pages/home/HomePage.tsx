import { Box } from "@/components";
import { Post } from "@/components/posts";
import { FiSearch } from "react-icons/fi";
import { useGetPosts } from "./hooks/useGetPosts";

const HomePage = () => {
    const { data: postData } = useGetPosts();

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
            {postData?.data.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default HomePage;
