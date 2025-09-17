import Link from "next/link";
import { postsItemProps } from "../types/posts";


const PostsCard = ({post}:postsItemProps) => {
    return (
        <Link href={`/posts/${post?.id}`} className="p-5 shadow border">
            <h1 className="text-xl font-bold">{post?.title.substring(0,30)}..</h1>
            <p>{post?.body.substring(0,170)}..</p>
        </Link>
    );
};

export default PostsCard;