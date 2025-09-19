import { postsItems } from "@/app/types/posts";

export default async function PostDetailPage({

params,}: {params: { id: string };

}) {
  const post: postsItems = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <div
     data-aos="fade-up"
     className="max-w-3xl mx-auto py-12 px-4">
      <div className="group p-8 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl hover:border-red-400 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 group-hover:text-red-500 transition-colors mb-6">
          {post.title}
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
      </div>
    </div>
  );
}
