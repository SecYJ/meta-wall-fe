import { req } from "../../config";
import { SignIn, SignUp } from "./types";

export const signUp = async (userData: SignUp) => {
    const response = await req.post("/users/sign_up", userData);
    console.log("response", response);
    return response.data;
};

export const signIn = async (userData: SignIn) => {
    const response = await req.post("users/sign_in", userData);
    console.log("response", response);
    return response.data;
};
