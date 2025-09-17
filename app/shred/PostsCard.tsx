import Link from "next/link";
import { postsItemProps } from "../types/posts";

const PostsCard = ({ post }: postsItemProps) => {
  if (!post) {
    return (
      <div className="p-5 shadow border flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Link href={`/posts/${post?.id}`} className="p-5 shadow border">
      <h1 className="text-xl font-bold">{post?.title.substring(0, 30)}..</h1>
      <p>{post?.body.substring(0, 170)}..</p>
    </Link>
  );
};

export default PostsCard;

