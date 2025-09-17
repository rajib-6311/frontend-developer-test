import { useFetch } from "../lib/useFetch";
import PostsCard from "../shred/PostsCard";
import { postsItems } from "../types/posts";


const PostPage = async () => {
  const posts: postsItems[] = await useFetch();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="uppercase py-8">All Posts</h1>

      <div className="grid grid-cols-3 items-center justify-center gap-5 py-12">
        {posts.map((post: postsItems) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
