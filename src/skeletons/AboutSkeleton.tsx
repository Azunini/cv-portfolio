import React from "react";

const AboutSkeleton: React.FC = () => {
  return (
    <div className="relative bg-fuchsia-50 w-full min-h-screen flex flex-col items-center text-neutral-900 text-center md:pt-15 animate-pulse">
      <div className="relative w-full md:w-[80%] min-h-screen py-10 md:pt-30 flex flex-col items-center">
        <div className="h-10 w-48 bg-gray-300 mb-6 rounded"></div>

        <div className="flex flex-col md:flex-row w-full justify-between gap-10">
          <div className="flex flex-col gap-4 w-full md:w-[60%] p-5">
            <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>

          <div className="md:w-[45%] flex flex-col justify-center items-center">
            <div className="md:h-[350px] md:w-[450px] w-[300px] h-[200px] bg-gray-300 rounded-2xl"></div>
            <div className="md:h-[325px] md:w-[425px] w-[300px] h-[200px] bg-gray-400 rounded-2xl md:-mt-80 -mt-45 mr-8 md:ml-0 shadow-sm"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-16 justify-center items-center w-full">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-[250px] h-[90px] bg-gray-200 rounded-2xl border border-gray-300"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
