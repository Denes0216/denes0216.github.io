interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: { title, description, tags },
}: ProjectCardProps) {
  return (
    <div className="max-w-full overflow-hidden rounded bg-white shadow-lg">
      <div className="px-4 py-4 sm:px-6">
        <div className="mb-6 text-lg font-bold sm:mb-10 sm:text-xl">
          {title}
        </div>
        {/* placeholder image */}
        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:gap-10 lg:flex-row">
          <div className="mb-2 h-48 w-full min-w-[250px] bg-gray-200 sm:mb-4 sm:h-64 sm:min-w-[300px] md:h-80 md:w-1/2"></div>
          <p className="px-2 text-sm text-gray-700 sm:px-0 sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="px-4 pt-2 pb-2 sm:px-6 sm:pt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-700 sm:px-3 sm:text-sm"
          >
            #{tag}
          </span>
        ))}
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-700 sm:px-3 sm:text-sm">
          #tailwindcss
        </span>
      </div>
    </div>
  );
}
