import Link from "next/link";
import { postsItemProps } from "../types/posts";

const PostsCard = ({ post }: postsItemProps) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-delay={`${post.id * 100}`}
      href={`/posts/${post?.id}`}
      className="group p-6 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl hover:border-red-400 transition-all duration-300"
    >
      <h1 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors">
        {post?.title.substring(0, 40)}...
      </h1>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {post?.body.substring(0, 120)}...
      </p>
    </Link>
  );
};

export default PostsCard;
