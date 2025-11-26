import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute top-6 right-6 z-100 flex items-center gap-3 rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-800/80">
      <FaSun className="text-base text-yellow-500 dark:text-gray-500" />
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full bg-gray-300 transition-colors duration-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:bg-gray-600"
        aria-label="Toggle theme"
        role="switch"
        aria-checked={theme === "dark"}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
      <FaMoon className="text-base text-gray-500 dark:text-blue-400" />
    </div>
  );
}
