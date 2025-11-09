import React from "react";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

const ProjectsSkeleton: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-30 bg-linear-to-tl from-rose-900 via-rose-950 to-pink-950 animate-pulse">
      <div className="h-8 w-64 bg-gray-700 mx-auto mt-10 mb-8 rounded"></div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-16 mt-20 mb-20">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
