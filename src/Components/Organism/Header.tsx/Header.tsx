import HeaderLinkFlexList from "@/Components/Molecules/HeaderLinkFlexList";
import HeaderLinkList from "@/Components/Molecules/HeaderLinkList/HeaderLinkList";
import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(true);
    }, 1000);
  }, []);

  return (
    <header className="overflow-hidden">
      <section className="flex justify-between items-center w-full ">
        <div className="relative">
          <div
            className={cx(
              "absolute bg-point h-10 top-5 left-0 -z-10 transition-all duration-500",
              isAnimation ? "w-full" : "w-0"
            )}
            style={{ transform: "skew(-20deg)" }}
          />

          <p className="text-3xl text-gray-700 font-light">{`<zinny/>`}</p>
        </div>

        <HeaderLinkFlexList />

        <ul
          className="w-6 h-7 hidden max-tablet:grid max-tablet:transition-all content-start gap-y-1 py-1"
          onClick={() => setIsOpenMenu((p) => !p)}
        >
          {new Array(1, 2, 3).map((_, index) => (
            <li key={index} className="h-0.5 rounded-lg bg-slate-700 w-full" />
          ))}
        </ul>
      </section>

      <HeaderLinkList isOpenMenu={isOpenMenu} />
    </header>
  );
}

export default Header;
