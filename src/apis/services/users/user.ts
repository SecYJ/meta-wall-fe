import { req } from "@/apis/config";

export const following = async () => {
    const response = await req.get("/users/following");
    return response.data;
};
