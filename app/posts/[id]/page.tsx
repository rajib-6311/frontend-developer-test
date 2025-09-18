import { postsItems } from "@/app/types/posts";

export default async function PostDetailPage({
    params,}: {params: { id: string };
}) {
    const post: postsItems = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        { cache: "no-store" } 
    ).then((res) => res.json());

    return (
        <div className="max-w-2xl mx-auto py-12">
            <div className="border shadow-lg p-8 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700 leading-relaxed">{post.body}</p>
            </div>
        </div>
    );
}
