import { signIn } from "@/apis/services/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation({
        mutationFn: signIn,
    });
};
