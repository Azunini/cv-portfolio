import { useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import cvFile from "../assets/docs/cv.pdf";
import React from "react";
const Home: React.FC = React.memo(() => {
  // hook translate
  const { t } = useTranslation();
  // Home reference
  const homeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Siempre visible mientras está montado

  useEffect(() => {
    // Guardamos una copia del nodo actual
    const currentHome = homeRef.current;
    // Usamos IntersectionObserver para evitar que React desmonte o "recalcule" estilos
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (currentHome) observer.observe(currentHome);

    return () => {
      if (currentHome) observer.unobserve(currentHome);
    };
  }, []);

  return (
    <div
      id="home"
      ref={homeRef}
     className={`hero-bg relative flex flex-col h-screen w-screen text-white lg:flex-row transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-100"
      }`}
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

/*
IntersectionObserver es una API nativa de JavaScript (no depende de React) 
que te permite saber cuándo un elemento del DOM entra o sale del área visible de la ventana (viewport).
*/
