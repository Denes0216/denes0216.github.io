import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  interface Project {
    title: string;
    description: string;
    tags: string[];
  }

  const projects: Project[] = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      tags: ["react", "typescript", "tailwindcss"],
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      tags: ["vue", "javascript", "css"],
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      tags: ["angular", "typescript", "scss"],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="m-0 flex min-h-screen snap-start flex-col items-center justify-center gap-6 bg-gray-100 p-4 text-center sm:gap-10 sm:p-6"
    >
      <h2
        className={`mb-2 text-2xl font-bold sm:mb-4 sm:text-3xl ${
          isVisible
            ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        My Projects
      </h2>
      <div
        className={`relative flex w-full max-w-4xl items-center gap-2 sm:gap-4 ${
          isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
        }`}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-2 sm:gap-10 sm:px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full shrink-0 snap-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`mt-2 flex w-full max-w-[860px] items-center justify-around gap-2 sm:mt-4 ${
          isVisible
            ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <button
          onClick={goToPrevious}
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-xl text-black transition-all hover:bg-gray-800 hover:text-white sm:h-12 sm:w-12 sm:text-2xl"
          aria-label="Previous project"
        >
          ←
        </button>
        <div className="flex gap-5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all sm:h-3 sm:w-3 ${
                index === activeIndex
                  ? "w-6 bg-gray-700 sm:w-8"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-xl text-black transition-all hover:bg-gray-800 hover:text-white sm:h-12 sm:w-12 sm:text-2xl"
          aria-label="Next project"
        >
          →
        </button>
      </div>
    </section>
  );
}
