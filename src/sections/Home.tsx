import React from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/images/HeroImg.jpg";

const Home: React.FC = () => {
  // hook translate
  const { t } = useTranslation();
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
      className="bg-top bg-cover flex flex-col h-screen w-screen text-white md:flex-row"
    >
      <div id="info" className="flex justify-center items-center h-screen w-screen md:w-[55%]">
        <div className="w-[70%]">
          <h5 className="font-[Poppins] text-rose-700 font-medium tracking-normal text-1xl mb-4">
            {t("home.welcome")}
          </h5>
          <h1 className="font-[Epilogue] font-bold mb-6 text-6xl">
            {t("home.hello")}
            <span className="text-rose-700 block text-6xl pt-4 font-bold">
              {t("home.role")}
            </span>
          </h1>
          <p className="text-lg tracking-wide w-full text-gray-400 font-[Poppins] md:w-[65%]">
            {t("home.description")}
          </p>
          <button className="w-42 h-12 bg-rose-700 mt-8 font-[Poppins] font-semibold shadow-sm hover:cursor-pointer hover:bg-rose-800 transition">
            {t("home.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
