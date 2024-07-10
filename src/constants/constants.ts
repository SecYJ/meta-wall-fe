export const ROUTES = {
    HOME: "/",
    FOLLOWING: "/following",
    ACCOUNT: {
        EDIT: "/account/edit",
        PASSWORD: "/account/edit/password",
    },
    POST_CREATION: "/post-creation",
    LIKED_POSTS: "/liked-posts",
    USERNAME: "/:username",
    AUTH: "/auth",
} as const;
