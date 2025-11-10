import { useTranslation } from "react-i18next";

export default function Footer() {
  // hook translate
  const { t } = useTranslation();
  return (
    <div className="nesthub-footer flex flex-col lg:flex-row justify-around items-center bg-gray-900 text-amber-50 min-h-20 w-full py-2 h-auto">
      {/* ELEMENTO 1 */}
      <div className="nesthub-align flex flex-row justify-center w-full lg:flex-1 gap-5 pt-2">
        <a
          href="https://uy.linkedin.com/in/alexanderzunini?trk=people-guest_people_search-card"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a href="https://github.com/Azunini" target="_blank" rel="noreferrer">
          <i className="fab fa-github text-2xl"></i>
        </a>
      </div>
      {/* ELEMENTO 2 */}
      <p className="nesthub-align lg:flex-1 lg:text-center flex gap-2 flex-col items-center lg:justify-start justify-center lg:flex-row w-full pt-2">
        <span className="">
          {" "}
          © {new Date().getFullYear()} {t("footer.powered")}
        </span>
        <strong className="block">Alexander Zunini</strong>
      </p>
    </div>
  );
}
