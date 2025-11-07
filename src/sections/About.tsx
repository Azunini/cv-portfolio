import React from "react";
import profile from "../assets/images/yo.webp";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    // hook translate
    const { t } = useTranslation();
  return (
    <div
      id="about"
      className="relative bg-fuchsia-50 w-full min-h-screen flex flex-col items-center text-neutral-900 text-center md:pt-15"
    >
      <div className="relative w-full md:w-[80%] min-h-screen py-10 md:pt-30 flex flex-col items-center">
        <h2 className="text-neutral-900 text-5xl font-bold md:mb-4 font-[Epilogue] text-center md:text-left w-full">
                {t("about.title")}
        </h2>
        <div className="flex flex-col md:flex-row  w-full justify-between">
          {/* Text cont*/}
          <div className="font-[Poppins] text-center md:text-left tracking-wide w-full md:w-[60%] text-gray-700 leading-relaxed md:p-0 p-5 ">
            <div className="w-full md:w-[90%] flex flex-col gap-5">
              <h3 className="text-neutral-900 tracking-wide text-center md:text-left font-[Epilogue] font-bold text-2xl w-full md:pt-5">
                {t("about.role")}
              </h3>
              <p>
                {t("about.text1")}
              </p>
              <p>
               {t("about.text2")}
              </p>
              <p>
                {t("about.text3")}
              </p>
            </div>
          </div>
          {/* IMAGE CONT*/}
          <div className="md:w-[45%] md:h-[500px] w-full flex flex-col justify-center items-center md:block">
            {/* background image */}
            <div className="md:h-[350px] md:w-[450px] w-[300px] h-[200px]  bg-rose-900 rounded-2xl md:ml-2 "></div>
            <div className="md:h-[325px] md:w-[425px] w-[300px] h-[200px] rounded-2xl md:-mt-80 -mt-45 mr-8 md:ml-0 overflow-hidden shadow-sm">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
        {/* cards info */}
        <div className="font-[Poppins] text-neutral-700 w-full md:h-50 md:-mt-18 flex flex-col justify-center items-center md:pt-0 pt-10 md:flex-row gap-20">
          <div className="flex flex-col gap-2 justify-center items-center w-[250px] h-[90px] p-5 rounded-2xl border-[1.5px] border-neutral-300 shadow-sm">
            <p className="text-left w-full h-full">
              <span className="block font-semibold">{t("about.card1")}</span>
              23/11/1999
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]  h-[90px] p-5 rounded-2xl  border-[1.5px] border-neutral-300 shadow-sm">
            <p className="text-left w-full h-full">
              <span className="block font-semibold">{t("about.card2")}</span>
              Uruguay
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px] h-[90px] p-5 rounded-2xl border-[1.5px] border-neutral-300 shadow-sm">
            <p className="text-left w-full h-full">
              <span className="block font-semibold">{t("about.card3")}</span>
              azunini.99@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-[250px]  h-[90px] p-5 rounded-2xl border-[1.5px] border-neutral-300 shadow-sm">
            <p className="text-left w-full h-full">
              <span className="block font-semibold">{t("about.card4")}</span>
              +598 629 318
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


// TERMINAR PARTE MOBILE DEL ABOUT, CONCTACT ME