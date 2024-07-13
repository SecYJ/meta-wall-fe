import { following } from "@/apis/services/users/user";
import { FOLLOWING_KEYS } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useFollowing = () => {
    return useQuery({
        queryKey: [FOLLOWING_KEYS.all],
        queryFn: following,
    });
};
