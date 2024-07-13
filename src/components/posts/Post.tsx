import { LuThumbsUp } from "react-icons/lu";
import Box from "../Box";
import avatarLg from "/user-lg.png";
import { AllPostData } from "@/apis/services/posts/types";
import { format } from "date-fns";

const POST_IMG =
    "https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface Props {
    post: AllPostData;
}

const Post = ({ post }: Props) => {
    return (
        <Box as="figure" rounded className="space-y-4 p-6">
            <div className="grid grid-cols-[auto_1fr]">
                <Box className="row-span-2 mr-4 size-11 overflow-hidden rounded-full">
                    <img
                        className=""
                        src={post.user.imageUrl ?? avatarLg}
                        alt={post.user.username}
                    />
                </Box>
                <p>{post.user.username}</p>
                <small className="text-xs text-shadow">
                    {format(new Date(post.createdAt), "yyyy/M/d HH:mm")}
                </small>
            </div>

            <p>{post.content}</p>

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
                <p>{post.likes.length}</p>
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
                {post.comments.slice(0, 2).map((comment) => (
                    <li className="grid grid-cols-[auto_1fr] grid-rows-3 rounded-xl bg-[#EFECE7] p-4">
                        <img
                            src={post.user.imageUrl}
                            className="row-span-3 mr-3 size-10 rounded-full"
                            alt="user"
                        />
                        <p>{comment.user.username}</p>
                        <small className="leading-relaxed">
                            {format(new Date(post.createdAt), "yyyy/M/d HH:mm")}
                        </small>
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Post;
