import { useTranslation } from "react-i18next";

export default function Footer() {
    // hook translate
      const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gray-900 text-amber-50 h-20 w-full  py-2">
      <div className="flex flex-row justify-center w-full md:flex-1 gap-5">
        <a href="https://uy.linkedin.com/in/alexanderzunini?trk=people-guest_people_search-card" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="https://github.com/Azunini" target="_blank" rel="noreferrer">
        <i className="fab fa-github text-2xl"></i>
        </a>
      </div>

      <p className=" md:flex-1 md:text-center flex gap-2">
        © {new Date().getFullYear()}
        <span> {t("footer.powered")}</span>    
        <strong>Alexander Zunini</strong>
      </p>
    </div>
  );
}
