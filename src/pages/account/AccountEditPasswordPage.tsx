import { Box } from "@/components";
import Input from "@/components/ui/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdatePassword } from "./hooks/useUpdatePassword";
import {
    updatePasswordSchema,
    UpdatePasswordSchemaType,
} from "./schemas/schema";
import { ROUTES } from "@/constants";

const AccountEditPasswordPage = () => {
    const navigate = useNavigate();
    const { mutate: updatePassword, isPending } = useUpdatePassword();
    const { handleSubmit, control } = useForm<UpdatePasswordSchemaType>({
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(updatePasswordSchema),
    });

    const onSubmit: SubmitHandler<UpdatePasswordSchemaType> = (data) => {
        updatePassword(data, {
            onSuccess: () => navigate(ROUTES.HOME, { replace: true }),
        });
    };

    return (
        <>
            <form
                id="form"
                className="space-y-4 font-normal"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    type="password"
                    control={control}
                    name="password"
                    label="輸入新密碼"
                    className="py-3.5"
                    placeholder="請輸入新密碼"
                />
                <Input
                    type="password"
                    control={control}
                    name="confirmPassword"
                    label="再次輸入"
                    className="py-3.5"
                    placeholder="請輸入新密碼"
                />
            </form>
            <Box className="mt-8 rounded-lg border-[#808080] bg-silver text-white">
                <button
                    type="submit"
                    form="form"
                    className="w-full py-4"
                    disabled={isPending}
                >
                    重設密碼
                </button>
            </Box>
        </>
    );
};

export default AccountEditPasswordPage;
