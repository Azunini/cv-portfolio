import React from "react";

const HeaderSkeleton: React.FC = () => {
  return (
    <header className="flex flex-col fixed top-0 left-0 h-full w-[255px] z-40 bg-gray-900 shadow-sm px-5 py-0 animate-pulse">
      <div className="flex flex-col justify-items-start items-center h-full w-full">
        <div className="text-center w-full flex flex-col justify-center items-center mt-8 mb-5">
          <div className="bg-gray-700 h-30 w-30 rounded-full mb-5"></div>
          <div className="h-5 w-32 bg-gray-700 mb-2 rounded"></div>
          <div className="h-3 w-24 bg-gray-700 rounded"></div>

          <div className="flex gap-5 mt-5">
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
            <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <nav className="flex flex-col w-full px-[15px] pt-2 gap-10">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-5 w-[80%] bg-gray-700 rounded"></div>
            ))}
        </nav>
      </div>

      <div className="w-20 h-10 bg-gray-700 self-center mb-5 rounded-md"></div>
    </header>
  );
};

export default HeaderSkeleton;
