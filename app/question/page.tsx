"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { usePsyStore } from "../../store/store"


export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const psyData = usePsyStore( (state) => state.psyData );
  const setPsyScore = usePsyStore( (state) => state.setScore );
  
  console.log(psyData);
  console.log(psyData.quizData);



  useEffect( () => {
    console.log("目前分數：" + psyData.score);
  }, [psyData.score] );

  

  function nextQuestion(optionIndex: any){
    console.log("使用者選擇：" + optionIndex);

    setPsyScore( psyData.score + psyData.quizData[questionIndex].options[optionIndex].value );
    console.log( psyData.score );
    
    
    if( questionIndex != psyData.quizData.length-1 ){  
      console.log("下一題～");
      setQuestionIndex( questionIndex + 1 );
    }else{
      console.log("進入準備看結果頁面");
      router.push("/prepare");
    }
    
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 px-6">
  
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow">
  
          {/* 題號 */}
          <p className="mb-2 text-gray-400">
            第 {questionIndex + 1} 題 / {psyData.quizData.length}
          </p>
  
          {/* 題目 */}
          <h1 className="mb-3 text-2xl font-bold text-pink-700">
            {psyData.quizData[questionIndex].title}
          </h1>
  
          {/* ← 就是這裡 */}
          <p className="mb-6 text-sm text-gray-400">
            {questionIndex === psyData.quizData.length - 1
              ? "這是最後一題，選完後查看結果"
              : "請選擇最接近你的答案"}
          </p>
  
          {/* 選項 */}
          <div className="flex flex-col gap-4">
            {psyData.quizData[questionIndex].options.map(
              (option: any, index: number) => (
                <button
                  key={index}
                  onClick={() => nextQuestion(index)}
                  className="rounded-2xl border border-pink-200 px-6 py-4 text-left hover:bg-pink-100"
                >
                  {option.text}
                </button>
              )
            )}
          </div>
  
          {/* 底部 */}
          <div className="mt-8 flex justify-between">
  
            {questionIndex > 0 ? (
              <button
                onClick={() => setQuestionIndex(questionIndex - 1)}
                className="rounded-full border px-6 py-2"
              >
                ← 上一題
              </button>
            ) : (
              <div></div>
            )}
  
            <div className="text-gray-400">
              {questionIndex + 1}/{psyData.quizData.length}
            </div>
  
          </div>
  
        </div>
  
      </div>
    </>
  );

}
