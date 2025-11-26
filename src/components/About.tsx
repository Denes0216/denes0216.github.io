import { useEffect, useRef, useState } from "react";
import AboutTabs from "./AboutTabs";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="m-0 flex min-h-screen flex-col items-center justify-center gap-6 bg-white text-center lg:flex-row lg:gap-10"
    >
      <div className="hidden lg:block">
        <div
          className={`relative m-0 h-screen w-96 flex-1 bg-gray-300 ${
            isVisible
              ? "animate-[floatFromLeft_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        ></div>
      </div>
      <div className="flex w-full flex-2 flex-col items-center justify-center lg:w-auto">
        <h2
          className={`mb-4 p-4 text-2xl font-bold sm:p-6 sm:text-3xl ${
            isVisible
              ? "animate-[appearFromLeft_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          About Me
        </h2>
        <div
          className={`w-full text-base sm:text-lg ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          <AboutTabs />
        </div>
      </div>
    </section>
  );
}
