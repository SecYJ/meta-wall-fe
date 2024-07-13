import { z } from "zod";

export const updatePasswordSchema = z
    .object({
        password: z.string().min(8, "密碼長度至少 8 個字元"),
        confirmPassword: z.string().min(8, "密碼長度至少 8 個字元"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "密碼不一致",
        path: ["confirmPassword"],
    });

export type UpdatePasswordSchemaType = z.infer<typeof updatePasswordSchema>;
