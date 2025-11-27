import heroBackground from "../assets/hero_background.png";
import heroBackgroundDark from "../assets/hero_background_dark.png";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  const { theme } = useTheme();
  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-background relative m-0 flex min-h-screen animate-[bgPan_15s_ease-in-out_infinite] flex-col items-center justify-center gap-6 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 text-center transition-colors duration-300 sm:gap-10 sm:p-6 dark:from-gray-900 dark:to-gray-800"
      style={{
        backgroundImage: `url(${theme === "dark" ? heroBackgroundDark : heroBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <ThemeToggle />
      <h1 className="relative z-10 mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards] px-4 text-3xl font-bold text-gray-50 sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm Denes
      </h1>
      <div className="mx-auto h-1 w-24 animate-[fadeIn_1.5s_ease-out_forwards] rounded-full bg-linear-to-r from-gray-600 to-gray-400"></div>
      <h2>
        <span className="relative z-10 mb-2 animate-[appearFromBottom_1.5s_ease-out_forwards] px-4 text-xl font-medium text-gray-300 sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
          Junior Frontend Developer
        </span>
      </h2>
      <p className="relative z-10 max-w-xl animate-[appearFromBottom_1.5s_ease-out_forwards] px-6 text-base text-white sm:text-lg">
        My passion lies in crafting beautiful and functional and responsive web
        applications that provide exceptional user experiences.
      </p>
      <div className="relative z-10 mt-4 flex w-full max-w-xs flex-col items-center justify-center gap-4 px-4 sm:mt-6 sm:max-w-none sm:flex-row sm:gap-6 md:gap-8">
        <button
          className="group relative mt-2 w-full overflow-hidden rounded-full bg-linear-to-r from-gray-800 to-gray-600 px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:mt-6 sm:w-auto"
          onClick={goToSection.bind(null, "contact")}
        >
          <span className="absolute inset-0 bg-linear-to-r from-gray-600 to-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative flex items-center justify-center gap-2 font-semibold">
            <FaEnvelope className="transition-transform duration-300 group-hover:rotate-12" />
            Get in Touch
          </span>
        </button>
        <button
          className="group relative mt-2 w-full overflow-hidden rounded-full border-2 border-white/80 bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl sm:mt-6 sm:w-auto"
          onClick={goToSection.bind(null, "projects")}
        >
          <span className="relative flex items-center justify-center gap-2 font-semibold">
            View My Work
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
      <i
        className="absolute bottom-6 animate-bounce cursor-pointer text-3xl text-white sm:bottom-10 sm:text-4xl"
        onClick={goToSection.bind(null, "about")}
      >
        ↓
      </i>
    </section>
  );
}
