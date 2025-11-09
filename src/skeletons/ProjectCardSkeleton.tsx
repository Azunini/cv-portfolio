import React from "react";

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="relative w-[90%] sm:w-[400px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-64 bg-gray-800"></div>
      <div className="p-6 flex flex-col justify-between h-[250px]">
        <div className="h-6 bg-gray-700 rounded w-[60%] mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-[90%] mb-6"></div>
        <div className="flex justify-center gap-4">
          <div className="h-8 w-24 bg-gray-700 rounded"></div>
          <div className="h-8 w-24 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
