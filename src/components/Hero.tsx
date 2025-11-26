import heroBackground from "../assets/hero_background.png";

export default function Hero() {
  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero-background relative m-0 flex min-h-screen animate-[bgPan_15s_ease-in-out_infinite] flex-col items-center justify-center gap-6 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 text-center sm:gap-10 sm:p-6"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="relative z-10 mb-4 animate-[appearFromLeft_1.5s_ease-out_forwards] px-4 text-3xl font-bold text-white sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">
        Welcome to My Portfolio
      </h1>
      <p className="relative z-10 max-w-xl animate-[appearFromBottom_1.5s_ease-out_forwards] px-6 text-base text-white sm:text-lg">
        Hi! I'm Denes Orban, a passionate developer specializing in building
        amazing web applications.
      </p>
      <div className="relative z-10 mt-4 flex w-full max-w-xs flex-col items-center justify-center gap-3 px-4 sm:mt-6 sm:max-w-none sm:flex-row sm:gap-0 sm:space-x-4 md:space-x-24">
        <button className="mt-2 w-full rounded-3xl border border-gray-700 bg-gray-500 px-6 py-2 text-white transition-colors hover:bg-gray-700 sm:mt-6 sm:w-auto">
          Get in Touch
        </button>
        <button
          className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-200 sm:mt-6 sm:w-auto"
          onClick={goToSection.bind(null, "projects")}
        >
          View My Work
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
