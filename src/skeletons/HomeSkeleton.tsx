import React from "react";

const HomeSkeleton: React.FC = () => {
  return (
    <section className="relative flex flex-col h-screen w-screen text-white md:flex-row bg-gray-900 animate-pulse">
      <div className="absolute inset-0 bg-gray-800"></div>

      <div className="relative z-10 flex justify-center items-center h-full w-full md:w-[55%]">
        <div className="w-[80%]">
          <div className="h-5 w-40 bg-gray-700 mb-4 rounded"></div>
          <div className="h-10 w-64 bg-gray-700 mb-6 rounded"></div>
          <div className="h-4 w-full bg-gray-700 mb-2 rounded"></div>
          <div className="h-4 w-[70%] bg-gray-700 mb-8 rounded"></div>
          <div className="h-12 w-40 bg-gray-700 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;
