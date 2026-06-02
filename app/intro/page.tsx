"use client";

import Link from "next/link";

export default function Intro() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow">
        <h1 className="mb-4 text-3xl font-bold text-pink-700">
          測試你的性別刻板印象指數
        </h1>

        <p className="mb-8 text-gray-700 leading-8">
          這個測驗會透過幾個日常情境，
          看看你對性別角色的想法有多開放或保守。
          <br />
          本測驗僅供課堂作業與娛樂參考。
        </p>

        <Link
          href="/question"
          className="rounded-full bg-pink-600 px-8 py-3 text-white font-bold hover:bg-pink-700"
        >
          開始測驗
        </Link>
      </div>
    </main>
  );
}