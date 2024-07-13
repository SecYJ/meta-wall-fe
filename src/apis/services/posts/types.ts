export interface CreatePostData {
    user: string;
    post?: string;
    content: string;
    imageUrl?: string;
}

interface Comment {
    id: string;
    comment: string;
    // NOTE: this post currently is ID, and might be remove in the future
    post: string;
    user: {
        _id: string;
        username: string;
    };
}

export interface AllPostData {
    id: string;
    content: string;
    comments: Comment[];
    likes: string[];
    createdAt: string;
    user: {
        _id: string;
        username: string;
        imageUrl: string;
    };
}
