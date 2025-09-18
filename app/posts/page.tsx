import { useFetch } from "../lib/useFetch";
import PostsCard from "../shred/PostsCard";
import { postsItems } from "../types/posts";


const PostPage = async () => {
  const posts: postsItems[] = await useFetch();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 py-12 px-6">
        {posts.map((post: postsItems) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;


