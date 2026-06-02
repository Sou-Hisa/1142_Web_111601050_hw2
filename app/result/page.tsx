"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore( (state)=> state.psyData );
  const setPsyScore = usePsyStore( (state) => state.setScore );
  const [psyResult, setPsyResult] = useState(<></>);
  const resultRef = useRef<HTMLDivElement>(null);

  async function saveResult() {
    if (!resultRef.current) return;
  
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
      });
  
      const image = canvas.toDataURL("image/png");
  
      const link = document.createElement("a");
      link.href = image;
      link.download = "心理測驗結果.png";
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log("保存失敗：", error);
      alert("保存失敗，請看 Console 錯誤訊息");
    }
  }

  useEffect( ()=>{
    getResult();
  }, [psyData.score]);


  function getResult() {
    if (psyData.score <= 5) {
      setPsyResult(
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-700">冷靜觀察型</h1>
          <p>你習慣先觀察再行動，個性理性、穩定，不容易被情緒帶著走。</p>
        </div>
      );
    } else if (psyData.score <= 7) {
      setPsyResult(
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-700">自由探索型</h1>
          <p>你喜歡新鮮感，也願意嘗試不同可能，是很有彈性的人。</p>
        </div>
      );
    } else if (psyData.score <= 9) {
      setPsyResult(
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-700">溫暖陪伴型</h1>
          <p>你重視人際關係，擅長照顧別人的感受，給人安心的感覺。</p>
        </div>
      );
    } else {
      setPsyResult(
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-700">熱情太陽型</h1>
          <p>你充滿能量，喜歡互動，也常常是帶動氣氛的人。</p>
        </div>
      );
    }
  }

  function playAgain(){
    setPsyScore(0);
    router.push("/");
  }

  
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <div
        ref={resultRef}
        className="max-w-xl rounded-3xl bg-white p-10 text-center shadow"
      >
        <p className="mb-4 text-gray-500">
          你的分數：{psyData.score}
        </p>
  
        <div className="mb-8 text-gray-700 leading-8">
          {psyResult}
        </div>
  
        <div className="flex justify-center gap-4">
          <button
            className="rounded-full bg-pink-600 px-8 py-3 text-white font-bold hover:bg-pink-700"
            onClick={playAgain}
          >
            再玩一次
          </button>
  
          <button
            className="rounded-full border border-pink-600 px-8 py-3 text-pink-600 font-bold hover:bg-pink-50"
            onClick={saveResult}
          >
            保存結果
          </button>
        </div>
      </div>
    </main>
  );
}