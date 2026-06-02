"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-pink-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-pink-700">
        你是哪一種戀愛人格？
      </h1>

      <p className="text-lg text-gray-700 max-w-md">
        回答 4 題簡單問題，看看你在感情中最像哪一種類型。
      </p>

      <Link
        href="/intro"
        className="rounded-full bg-pink-600 px-8 py-3 text-white font-bold hover:bg-pink-700"
      >
        開始
      </Link>
    </main>
  );
}