import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";

function AboutMe() {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(true);
    }, 1000);
  }, []);

  return (
    <section className="flex justify-between items-start">
      <main
        className={cx(
          "transition-all duration-500",
          isAnimation ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <h1 className="text-point text-4xl font-extrabold">
          안녕하세요
          <br />
          2년차 프론트엔드 개발자 장혜진입니다
        </h1>

        <h3 className="text-lg text-gray-700 font-light">
          작은 규모의 스타트업에서 기획부터 배포까지 전 단계에 참여하며
          성장했습니다.
        </h3>

        <h3 className="text-lg text-gray-700 font-light">
          더 좋은 사용자 경험을 제공하기 위해 고민합니다.
        </h3>

        <h3 className="text-lg text-gray-700 font-light">
          한줄의 코드를 작성하더라도 의미 있는 코드를 작성하는 것을 중요하게
          생각합니다.
        </h3>
      </main>

      <div className="relative hover:opacity-50 hover:bg-slate-500 rounded-full transition-all cursor-pointer shadow-md shadow-slate-300">
        <p className="text-8xl bg-white p-3 rounded-full">🐰</p>

        <p className="hidden hover:block absolute ">
          장혜진
          <br /> 1996
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
