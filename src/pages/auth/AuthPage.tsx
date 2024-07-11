import { Box } from "@/components";
import Input from "@/components/ui/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    AuthSchemaType,
    loginSchema,
    registrationSchema,
} from "./schemas/authSchema";
import { useRegistration } from "./hooks/useRegistration";
import { useLogin } from "./hooks/useLogin";

const AuthPage = () => {
    const [authState, setAuthState] = useState<"login" | "register">("login");
    const isLogin = authState === "login";
    const registration = useRegistration();
    const login = useLogin();

    const { handleSubmit, control } = useForm<AuthSchemaType>({
        resolver: zodResolver(isLogin ? loginSchema : registrationSchema),
        resetOptions: { keepDirtyValues: true },
        defaultValues: {
            email: "",
            password: "",
        },
        values: {
            email: "",
            password: "",
            ...(isLogin && { username: "" }),
        },
    });

    const onSubmit: SubmitHandler<AuthSchemaType> = (formData) => {
        if ("username" in formData && !isLogin) {
            registration.mutate({
                ...formData,
                confirmPassword: formData.password,
            });
            return;
        }

        login.mutate(formData);
    };

    return (
        <div className="grid min-h-screen place-items-center">
            <Box className="mx-auto grid w-full max-w-[869px] grid-cols-2 items-center gap-12 px-12 pb-[72px] pt-24">
                <div>
                    <img src="/auth.png" alt="auth banner" />
                </div>
                <div className="space-y-9">
                    <div className="text-center">
                        <h1 className="text-6xl leading-[1.4] text-primary">
                            MetaWall
                        </h1>
                        <p className="text-2xl">
                            {isLogin ? "到元宇宙展開全新社交圈" : "註冊"}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            {!isLogin && (
                                <Input
                                    placeholder="暱稱"
                                    control={control}
                                    name="username"
                                />
                            )}
                            <Input
                                placeholder="Email"
                                control={control}
                                name="email"
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                control={control}
                                name="password"
                            />
                        </div>
                        <div className="mt-8">
                            <p className="mb-4 text-center text-sm text-danger">
                                帳號或密碼錯誤，請重新輸入！
                            </p>
                            <Box className="drop-shadow">
                                <button
                                    type="submit"
                                    className="block w-full bg-primary py-4 text-center leading-tight text-white"
                                >
                                    {isLogin ? "登入" : "註冊"}
                                </button>
                            </Box>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="mt-4"
                                    onClick={() => {
                                        setAuthState((prev) =>
                                            prev === "login"
                                                ? "register"
                                                : "login",
                                        );
                                    }}
                                >
                                    {isLogin ? "註冊帳號" : "登入"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </div>
    );
};

export default AuthPage;
