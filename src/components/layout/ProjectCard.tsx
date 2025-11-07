import React from "react";
import { type Project } from "../../types/ProjectTypes";
import { useTranslation } from "react-i18next";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  github,
  demo,
}) => {
  // hook translate
    const { t } = useTranslation();
  return (
    <div className="relative group w-[90%] sm:w-[400px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Imagen del proyecto */}
      <div className="relative h-64 overflow-hidden flex justify-center py-5 hover:cursor-pointer">
        {/* div img cont */}
        <div className="flex justify-center w-[90%] p-0 h-full overflow-hidden rounded-2xl">
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800 transition-transform duration-700 hover:scale-110">
              Sin imagen
            </div>
          )}
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6 text-center flex flex-col justify-between h-[250px]">
        <h3 className="text-2xl font-bold text-white mb-3">
          {t(`project.${title}`)}
        </h3>
        <p className="text-gray-300 text-sm mb-6">
           {t(`project.${description}`)}
        </p>

        {/* Botones */}
        <footer className="flex flex-wrap gap-4 justify-center">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-rose-700 hover:bg-rose-800 active:bg-rose-800 text-white rounded-lg font-semibold transition"
            >
              <i className="fas fa-eye mr-2"></i> 
              {t("project.btn-demo")}
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white rounded-lg text-white hover:bg-white  active:bg-white  active:text-gray-900 hover:text-gray-900 transition"
            >
              <i className="fab fa-github mr-2"></i> 
              {t("project.btn-code")}
            </a>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
