import React from "react";
import profile from "../../assets/images/Yo-header.webp";
import { useTranslation } from "react-i18next";

export default function Header() {
    // Hook de traducción
  const { t, i18n } = useTranslation();
    
  const [active, setActive] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false); // estado del menú móvil
  const toggleMenu = () => setIsOpen(!isOpen);
  // Cambiar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };
  
  return (
    <>
      {/* Botón toggle visible SOLO en mobile */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-white bg-rose-900 p-3 rounded-full focus:outline-none h-14 w-14 flex justify-center items-center text-2xl"
        onClick={toggleMenu}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Menú lateral */}
      <header
        className={`flex flex-col fixed top-0 left-0 h-full w-[255px] z-40 bg-gray-900 shadow-sm px-5 py-0 transform transition-transform duration-300 font-[Jost]
          ${isOpen ? "translate-x-0 flex" : "-translate-x-full"}
          md:translate-x-0 md:flex`}
      >
        <div className="flex flex-col justify-items-start items-center h-full w-full">
          {/* Branding */}
          <div className="text-center w-full flex flex-col justify-center items-center mt-8 mb-5">
            <div className="bg-second shadow-lg h-30 w-30 flex justify-center items-center rounded-full cursor-pointer overflow-hidden mb-5">
              <img src={profile} alt="profile" className="scale-100" loading="lazy" width="300" height="400" />
            </div>
            <p className="text-amber-50 font-bold text-[1.2rem]">
              Alexander Zunini
            </p>
            <p className="text-amber-50 text-sm">Frontend Developer</p>

            {/* Social icons */}
            <div className="flex gap-5 text-amber-50 mt-5">
              <a href="https://uy.linkedin.com/in/alexanderzunini?trk=people-guest_people_search-card" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin text-2xl hover:text-gray-400  active:text-gray-400"></i>
              </a>
              <a href="https://github.com/Azunini" target="_blank" rel="noreferrer">
                <i className="fab fa-github text-2xl hover:text-gray-400  active:text-gray-400"></i>
              </a>
            </div>
          </div>

          {/* Menú */}
          <nav className="flex flex-col w-full px-[15px] pt-2">
            <ul className="style-none text-gray-400 text-[1.2rem] font-bold flex flex-col gap-12">
              {["home", "projects", "about", "contact"].map((item) => (
                <li
                  key={item}
                  className={`menu-item ${active === item ? "active" : ""}`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false); // cierra el menú al hacer click
                  }}
                >
                  {/* Renderizo los items */}
                  <a href={`#${item}`} className="block w-full h-full">
                     {t(`header.${item}`)} {/* Traducción */}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Toggle idioma */}
        <button
          onClick={toggleLanguage}
          className=" flex justify-center items-center gap-2 self-center w-20 h-10 text-center text-white bg-gray-800 px-4 mb-5 rounded-md  hover:bg-rose-700 active:bg-rose-700 hover:cursor-pointer"
        >
          <i className="fa-solid fa-globe"></i>
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </header>
    </>
  );
}
