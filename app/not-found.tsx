"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-300 text-black text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6 ">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
