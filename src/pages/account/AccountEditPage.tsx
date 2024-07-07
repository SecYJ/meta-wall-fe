import { Box } from "@/components";
import userAvatar from "/user-lg.png";

const AccountEditPage = () => {
    return (
        <div className="grid justify-items-center gap-3">
            <div>
                <Box className="mb-4 size-[107px] overflow-hidden rounded-full">
                    <img
                        src={userAvatar}
                        alt="user avatar"
                        className="size-full"
                    />
                </Box>
                <button type="button" className="bg-dark px-6 py-1 text-white">
                    上傳大頭照
                </button>
            </div>

            <form className="font-normal">
                <fieldset>
                    <label htmlFor="暱稱" className="mb-1">
                        暱稱
                    </label>
                    <Box>
                        <input
                            type="text"
                            className="w-full px-6 py-3.5"
                            placeholder="請輸入暱稱"
                            autoFocus
                        />
                    </Box>
                </fieldset>
                <fieldset className="mb-8 mt-4">
                    <label className="mb-2">性別</label>
                    <div className="flex gap-6">
                        <div className="flex gap-3">
                            <input type="radio" name="gender" id="男性" />
                            <label htmlFor="男性">男性</label>
                        </div>
                        <div className="flex gap-3">
                            <input type="radio" name="gender" id="女性" />
                            <label htmlFor="女性">女性</label>
                        </div>
                    </div>
                </fieldset>
                <div className="text-danger mb-4 text-sm">
                    <p>1. 圖片寬高比必需為 1:1，請重新輸入</p>
                    <p>2. 解析度寬度至少 300像素以上，請重新輸入</p>
                </div>
                <Box
                    as="button"
                    className="bg-warning mb-5 w-full rounded-lg py-4 text-center font-bold leading-tight drop-shadow"
                >
                    張貼動態
                </Box>
            </form>
        </div>
    );
};

export default AccountEditPage;
