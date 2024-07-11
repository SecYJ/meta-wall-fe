import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({ required_error: "請輸入 Email" }).email(),
    password: z
        .string({ required_error: "請輸入密碼" })
        .min(8, "密碼需至少 8 碼以上，並中英混合"),
});

export const registrationSchema = loginSchema.extend({
    username: z
        .string({ required_error: "暱稱為必填項" })
        .min(2, "暱稱至少 2 個字元以上"),
});

export type AuthSchemaType = z.infer<
    typeof loginSchema | typeof registrationSchema
>;
