// app/posts/page.tsx
import PostsCard from "../shred/PostsCard";
import { postsItems } from "../types/posts";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // always fresh
  });
  const posts: postsItems[] = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <div 

       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-6">
        {posts.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
