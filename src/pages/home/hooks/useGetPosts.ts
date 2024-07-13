import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/apis/services/posts/posts";
import { POST_KEYS } from "@/utils/queryKeys";

export const useGetPosts = () => {
    return useQuery({
        queryKey: [POST_KEYS.all],
        queryFn: getPosts,
    });
};
