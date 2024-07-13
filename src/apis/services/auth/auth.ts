import { req } from "../../config";
import { SignIn, SignUp } from "./types";

export const signUp = async (userData: SignUp) => {
    const response = await req.post("/users/sign_up", userData);
    return response.data;
};

export const signIn = async (userData: SignIn) => {
    const response = await req.post<{
        id: string;
        token: string;
        status: string;
    }>("users/sign_in", userData);
    return response.data;
};

export const updatePassword = async ({
    password,
    confirmPassword,
}: {
    password: string;
    confirmPassword: string;
}) => {
    const response = await req.post("/users/updatePassword", {
        password,
        confirmPassword,
    });
    console.log("response", response.data);

    return response.data;
};
