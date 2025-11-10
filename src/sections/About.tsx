import React from "react";
import profile from "../assets/images/yo.webp";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    // hook translate
    const { t } = useTranslation();
  return (
    <div
      id="about"
      className="relative bg-fuchsia-50 w-full min-h-screen flex flex-col items-center text-neutral-900 text-center lg:pt-15"
    >
      <div className="relative w-full lg:w-[80%] min-h-screen py-10 lg:pt-30 flex flex-col items-center">
        <h2 className="text-neutral-900 text-5xl lg:mb-4 font-epilogue font-bold regular text-center lg:text-left w-full">
                {t("about.title")}
        </h2>
        <div className="flex flex-col lg:flex-row  w-full justify-between">
          {/* Text cont*/}
          <div className="font-poppins text-center lg:text-left tracking-wide w-full lg:w-[60%] text-gray-700 leading-relaxed lg:p-0 p-5 ">
            <div className="w-full lg:w-[90%] flex flex-col gap-5">
              <h3 className="text-neutral-900 tracking-wide text-center lg:text-left font-[Epilogue] font-bold text-2xl w-full lg:pt-5">
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
          <div className="lg:w-[45%] lg:h-[500px] w-full flex flex-col justify-center items-center lg:block">
            {/* background image */}
            <div className="lg:h-[350px] lg:w-[450px] w-[300px] h-[200px]  bg-rose-900 rounded-2xl lg:ml-2 "></div>
            <div className="lg:h-[325px] lg:w-[425px] w-[300px] h-[200px] rounded-2xl lg:-mt-80 -mt-45 mr-8 lg:ml-0 overflow-hidden shadow-sm">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
        {/* cards info */}
        <div className="font-poppins text-neutral-700 w-full lg:h-50 lg:-mt-18 flex flex-col justify-center items-center lg:pt-0 pt-10 lg:flex-row gap-20">
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

