import React from "react";
import { useTranslation } from "react-i18next";
import cvFile from "../assets/docs/cv.pdf";

const Home: React.FC = React.memo(() => {
  // hook translate
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className=" hero-bg
        relative flex flex-col h-screen w-screen text-white lg:flex-row
        bg-[#0f0f1a]"
    >
      <div
        id="info"
        className="flex justify-center items-center h-screen w-screen lg:w-[55%]"
      >
        <div className="w-[80%]">
          <h5 className="font-epilogue regular text-rose-700 font-medium tracking-normal text-1xl mb-4">
            {t("home.welcome")}
          </h5>
          <h1 className="font-epilogue regular tracking-normal font-bold  mb-6 text-6xl">
            {t("home.hello")}
            <span className="text-rose-700 flex text-6x1 pt-4 font-bold">
              {t("home.role")}
            </span>
          </h1>
          <p className="text-lg tracking-wide w-full text-gray-400 font-poppins lg:w-[65%]">
            {t("home.description")}
          </p>
          <a
            href={cvFile}
            download="Alexander_Zunini_CV.pdf"
            className="inline-block w-42 h-12 bg-rose-700 mt-8 font-poppins font-semibold shadow-sm hover:bg-rose-800  active:bg-rose-800 transition text-white text-center leading-12 "
          >
            {t("home.button")}
          </a>
        </div>
      </div>
    </div>
  );
});

export default Home;


