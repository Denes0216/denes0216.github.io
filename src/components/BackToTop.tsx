import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const handleScroll = () => {
      if (container && container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  const goToTop = () => {
    const container = document.getElementById("scroll-container");
    container?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goToTop}
      className="fixed right-3 bottom-3 z-50 animate-[appearFromBottom_0.5s_ease-out_forwards] rounded-full bg-gray-500 px-3 py-2 text-sm text-white shadow-lg transition-colors hover:cursor-pointer hover:bg-gray-700 sm:right-4 sm:bottom-4 sm:px-4 sm:text-base dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      ↑
    </button>
  );
}
