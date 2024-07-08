import { Box } from "@/components";

const POST_IMG =
    "https://plus.unsplash.com/premium_photo-1686054306703-fe68a1b0a7aa?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PostCreationPage = () => {
    return (
        <Box rounded withDropShadow className="mt-4 p-8">
            <form className="space-y-4 font-normal">
                <fieldset>
                    <label htmlFor="貼文內容">貼文內容</label>
                    <Box className="mt-1">
                        <textarea
                            className="min-h-[169px] w-full resize-none px-4 py-3"
                            placeholder="輸入您的貼文內容"
                        />
                    </Box>
                </fieldset>

                <button
                    type="submit"
                    className="rounded bg-dark px-8 py-1 text-white"
                >
                    上傳圖片
                </button>

                <Box rounded>
                    <img
                        src={POST_IMG}
                        alt="post image"
                        className="max-h-[157px] w-full object-cover"
                    />
                </Box>
            </form>

            <div className="mt-8 grid justify-items-center gap-4">
                <div>
                    <p className="text-danger">
                        1. 圖片檔案過大，僅限 1mb 以下檔案
                    </p>
                    <p className="text-danger">
                        2. 圖片格式錯誤，僅限 JPG、PNG 圖片
                    </p>
                </div>
                <button
                    type="submit"
                    className="mx-auto rounded-lg border border-dark bg-silver px-32 py-4"
                >
                    送出貼文
                </button>
            </div>
        </Box>
    );
};

export default PostCreationPage;
