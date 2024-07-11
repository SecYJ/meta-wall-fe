import { signUp } from "@/apis/services/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useRegistration = () => {
    const registration = useMutation({
        mutationFn: signUp,
    });

    return registration;
};
