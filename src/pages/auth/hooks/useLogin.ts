import { signIn } from "@/apis/services/auth/auth";
import { ROUTES } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            navigate(ROUTES.HOME, { replace: true });
        },
    });
};
