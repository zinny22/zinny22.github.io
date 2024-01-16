/** @format */
"use client";

import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

export default function Home() {
  return (
    <PortfolioProvider value={prefix}>
      <div>
        <div className="w-full h-80 p-10 flex -" style={{ backgroundColor: "#74B38D" }}>
          <div className=" max-w-[1200px]">
            <div className="flex justify-between items-center w-full pb-[100px]">
              <p className="text-white font-bold font text-xl">{"</zinny>"}</p>

              <div className="flex gap-x-[30px] items-center">
                <button className="hover:underline text-gray-900 text-xl">about me!</button>
                <button className="hover:underline text-gray-900 text-xl">경력</button>
                <button className="hover:underline text-gray-900 text-xl">기술</button>
                <button className="hover:underline text-gray-900 text-xl">프로젝트</button>
                <button className="hover:underline text-gray-900 text-xl">교육</button>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-white text-4xl font-extrabold">
                안녕하세요
                <br />
                꾸준히 성장하는 개발자 장혜진입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioProvider>
  );
}
