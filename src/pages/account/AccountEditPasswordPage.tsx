import { Box } from "@/components";

const AccountEditPasswordPage = () => {
    return (
        <>
            <form className="space-y-4 font-normal">
                <fieldset>
                    <label htmlFor="輸入新密碼">輸入新密碼</label>
                    <Box className="mt-1">
                        <input
                            type="text"
                            id="輸入新密碼"
                            placeholder="請輸入新密碼"
                            className="w-full px-6 py-4 placeholder:text-shadow"
                        />
                    </Box>
                </fieldset>
                <fieldset>
                    <label htmlFor="再次輸入">再次輸入</label>
                    <Box className="mt-1">
                        <input
                            type="text"
                            id="再次輸入"
                            placeholder="請輸入新密碼"
                            className="w-full px-6 py-4 placeholder:text-shadow"
                        />
                    </Box>
                </fieldset>
            </form>
            <Box
                as="button"
                className="bg-silver mt-8 w-full rounded-lg border-[#808080] py-4 text-white"
            >
                重設密碼
            </Box>
        </>
    );
};

export default AccountEditPasswordPage;
