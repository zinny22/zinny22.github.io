import AboutMe from "@/Components/Organism/AboutMe";
import Header from "@/Components/Organism/Header.tsx";

function Introduce() {
  return (
    <div
      className="w-full min-h-80 p-10 flex items-center justify-center relative"
      style={{
        backgroundImage: "url(/paper2.jpeg)",
      }}
    >
      <div className="w-[90%] grid gap-y-12 z-50">
        <Header />
        <AboutMe />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-white opacity-70" />
    </div>
  );
}

export default Introduce;
