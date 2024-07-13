import { updatePassword } from "@/apis/services/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: updatePassword,
    });
};
