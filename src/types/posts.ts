export interface Post {
    id: string;
    content: string;
    // comment: []
    // likes: []
    user: {
        _id: string;
        username: string;
    };
}
