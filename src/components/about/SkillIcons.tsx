import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCss3,
  FaJira,
  FaGithub,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import {
  SiBun,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

export interface Skill {
  icon: React.ReactNode;
  name: string;
  color: string;
  hoverColor: string;
}

const bgColor = "bg-gray-600 text-white";

const skills: Skill[] = [
  {
    icon: <FaReact />,
    name: "React",
    color: bgColor,
    hoverColor: "hover:bg-[#61DAFB] hover:text-black",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: bgColor,
    hoverColor: "hover:bg-[#3178C6] hover:text-white",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    color: bgColor,
    hoverColor: "hover:bg-[#339933] hover:text-white",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: bgColor,
    hoverColor: "hover:bg-[#06B6D4] hover:text-white",
  },
  {
    icon: <FaPython />,
    name: "Python",
    color: bgColor,
    hoverColor: "hover:bg-[#3776AB] hover:text-[#FFD43B]",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    color: bgColor,
    hoverColor: "hover:bg-[#181717] hover:text-white",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: bgColor,
    hoverColor: "hover:bg-[#F7DF1E] hover:text-black",
  },
  {
    icon: <FaDatabase />,
    name: "MySQL",
    color: bgColor,
    hoverColor: "hover:bg-[#4479A1] hover:text-white",
  },
  {
    icon: <SiBun />,
    name: "Bun",
    color: bgColor,
    hoverColor: "hover:bg-[#FBF0DF] hover:text-[#F472B6]",
  },
  {
    icon: <FaCss3 />,
    name: "CSS3",
    color: bgColor,
    hoverColor: "hover:bg-[#1572B6] hover:text-white",
  },
  {
    icon: <GiBrain />,
    name: "AI Integration",
    color: bgColor,
    hoverColor: "hover:bg-purple-500 hover:text-white",
  },
  {
    icon: <FaJira />,
    name: "Jira",
    color: bgColor,
    hoverColor: "hover:bg-[#0052CC] hover:text-white",
  },
  {
    icon: <DiDotnet />,
    name: ".NET",
    color: bgColor,
    hoverColor: "hover:bg-[#512BD4] hover:text-white",
  },
];

export default function SkillIcons() {
  const honeycomb = [
    [0, 1, 2, 3],
    [4, 5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  return (
    <div
      className="relative mx-auto my-8 flex flex-col items-center justify-center gap-2"
      style={{ minHeight: 220 }}
    >
      {honeycomb.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={"flex flex-row items-center justify-center gap-2"}
        >
          {row.map((skillIdx) => {
            const skill = skills[skillIdx];
            return (
              <div key={skillIdx} className="group relative">
                <span
                  className={`flex items-center justify-center rounded-full ${skill.color} ${skill.hoverColor} h-14 w-14 text-2xl transition-all duration-300 hover:z-10 hover:scale-125 hover:rotate-6`}
                  style={{
                    boxShadow: undefined,
                  }}
                >
                  {skill.icon}
                </span>
                <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded bg-black/80 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 group-hover:z-50 group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
