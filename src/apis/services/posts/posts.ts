import { req } from "@/apis/config";
import { AllPostData, CreatePostData } from "./types";

export const getPosts = async () => {
    const response = await req.get<{
        data: AllPostData[];
        status: boolean;
    }>("/posts");
    return response.data;
};

export const getPost = async (postId: string) => {
    const response = await req.get("/posts", { params: { postId } });
    return response.data;
};

export const createPost = async (postData: CreatePostData) => {
    const response = await req.post("/posts", postData);
    return response.data;
};
