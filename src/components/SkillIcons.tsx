import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCss3,
  FaJira,
} from "react-icons/fa";
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
}

const bgColor = "bg-gray-600 text-white";

const skills: Skill[] = [
  { icon: <FaReact />, name: "React", color: bgColor },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: bgColor,
  },
  { icon: <FaNodeJs />, name: "Node.js", color: bgColor },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: bgColor,
  },
  { icon: <FaPython />, name: "Python", color: bgColor },
  { icon: <FaDatabase />, name: "Databases", color: bgColor },
  { icon: <SiJavascript />, name: "JavaScript", color: bgColor },
  { icon: <FaDatabase />, name: "MySQL", color: bgColor },
  { icon: <SiBun />, name: "Bun", color: bgColor },
  { icon: <FaCss3 />, name: "CSS3", color: bgColor },
  {
    icon: <FaReact />,
    name: "AI Integration",
    color: bgColor,
  },
  { icon: <FaJira />, name: "Jira", color: bgColor },
  { icon: <DiDotnet />, name: ".NET", color: bgColor },
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
                  className={`flex items-center justify-center rounded-full ${skill.color} h-14 w-14 text-2xl transition-transform duration-300 hover:z-10 hover:scale-125 hover:rotate-6`}
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
