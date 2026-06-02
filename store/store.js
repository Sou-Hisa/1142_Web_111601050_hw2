// src/store.js
import { create } from 'zustand'

const questionData = [
  {
    title: "假日突然空下來，你最想做什麼？",
    options: [
      { text: "在家安靜休息，補回自己的能量", value: 1 },
      { text: "出門走走，看看有沒有新鮮事", value: 2 },
      { text: "找朋友聊天或聚會", value: 3 },
    ],
  },
  {
    title: "朋友遇到煩惱時，你通常會？",
    options: [
      { text: "先冷靜聽完，再幫他分析", value: 1 },
      { text: "直接陪他去做點什麼轉換心情", value: 2 },
      { text: "給他很多安慰和情緒支持", value: 3 },
    ],
  },
  {
    title: "面對新環境時，你比較像？",
    options: [
      { text: "先觀察，確認安全再行動", value: 1 },
      { text: "邊做邊熟悉，反正先試試看", value: 2 },
      { text: "先找人互動，有人陪就安心", value: 3 },
    ],
  },
  {
    title: "你最希望別人怎麼形容你？",
    options: [
      { text: "可靠、理性、有想法", value: 1 },
      { text: "自由、有趣、行動力強", value: 2 },
      { text: "溫暖、好相處、很有感染力", value: 3 },
    ],
  },
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }



