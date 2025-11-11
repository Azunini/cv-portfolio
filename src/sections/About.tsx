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
      <div className="relative w-full lg:w-[80%] min-h-screen py-10 lg:pt-30 flex flex-col flex-wrap items-center">
        <h2 className="text-neutral-900 text-5xl lg:mb-4 font-epilogue font-bold regular text-center lg:text-left w-full">
          {t("about.title")}
        </h2>
        {/* contenedor de texto e imagen   */}
        <div className="flex flex-col lg:flex-row nesthub-col w-full">
          {/* Text cont*/}
          <div className="nexthub-content font-poppins text-center lg:text-left tracking-wide w-full flex-1 text-gray-700 leading-relaxed lg:p-0 p-5">
            <div className="w-full lg:w-[90%] flex flex-col gap-5">
              <h3 className="text-neutral-900 tracking-wide text-center lg:text-left font-[Epilogue] font-bold text-2xl w-full lg:pt-5">
                {t("about.role")}
              </h3>
              <p>{t("about.text1")}</p>
              <p>{t("about.text2")}</p>
              <p>{t("about.text3")}</p>
            </div>
          </div>
          {/* IMAGE CONT*/}
          <div className=" flex-1 lg:w-[45%] lg:h-[500px] w-full flex justify-center items-center lg:items-start">
            {/* background image */}
            <div className="h-auto lg:w-[460px]">
              <div className="lg:h-[350px] lg:w-[450px] w-[300px] h-[200px] bg-rose-900 rounded-2xl lg:ml-2 "></div>
              <div className="lg:h-[325px] lg:w-[425px] w-[300px] h-[200px] rounded-2xl lg:-mt-80 -mt-45 mr-8 lg:ml-0 overflow-hidden shadow-sm">
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards info */}
        <div className="w-full flex flex-wrap justify-center gap-6 py-8 bg-transparent lg:justify-between">
          {/* creo un array de objetos y lo recorro con map */}
          {[
            { label: t("about.card1"), value: "23/11/1999" },
            { label: t("about.card2"), value: "Uruguay" },
            { label: t("about.card3"), value: "azunini.99@gmail.com" },
            { label: t("about.card4"), value: "+598 629 318" },
          ].map((c, i) => (
            <div
              key={i}
              className="w-[250px] h-[90px] p-5 rounded-2xl border border-neutral-300 bg-white/5 flex flex-col justify-center shadow-sm gap-2"
            >
              <span className="block font-semibold text-sm">{c.label}</span>
              <span className="text-sm mt-1">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
/*

.map() recorre el array y devuelve un nuevo array de elementos JSX.

c → representa el objeto actual del array (por ejemplo {label: "País", value: "Uruguay"}).

i → es el índice del elemento (0, 1, 2, 3...).

key={i} → es una clave única que React usa para identificar cada elemento del renderizado (importante para performance y actualizaciones eficientes).

Cada vuelta del .map() crea una card.
*/
