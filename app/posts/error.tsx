"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-300 text-black text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Failed to load posts</h1>    
    </div>
  );
}
