import React from "react";

const FooterSkeleton: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around items-center bg-gray-900 text-amber-50 min-h-20 w-full py-2 h-auto animate-pulse">
      <div className="flex flex-row justify-center w-full md:flex-1 gap-5 pt-2">
        <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
        <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
      </div>
      <div className="md:flex-1 md:text-center flex gap-2 flex-col justify-center items-center md:flex-row w-full pt-2">
        <div className="h-4 w-40 bg-gray-700 rounded"></div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;
