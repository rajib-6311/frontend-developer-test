"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Failed to load posts</h1> 
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}

