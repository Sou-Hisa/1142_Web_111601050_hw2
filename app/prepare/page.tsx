"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Prepare() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/result");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-10 shadow">

        <div className="text-3xl">
          🔍
        </div>

        <h1 className="text-3xl font-bold text-pink-700">
          正在分析你的人格…
        </h1>

        <p className="text-gray-500">
          蒐集中…<br />
          計算中…<br />
          即將揭曉…
        </p>

        <div className="animate-pulse text-pink-500">
          請稍候
        </div>

      </div>
    </main>
  );
}