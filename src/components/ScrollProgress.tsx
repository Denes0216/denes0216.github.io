import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-100 h-1 w-full bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-linear-to-r from-gray-800 to-gray-600 transition-all duration-150 dark:from-gray-300 dark:to-gray-500"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
