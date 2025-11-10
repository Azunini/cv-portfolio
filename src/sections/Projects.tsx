import { projects } from "../data/ProjectsData";
import ProjectCard from "../components/layout/ProjectCard";
import { useTranslation } from "react-i18next";
// import bgImage from "../assets/images/render.jpg";

// Here combine the data and the base design to render all the projects saved in ProjectData
const Projects = () => {
    // hook translate
    const { t } = useTranslation();
  return (
    <div className="relative w-full min-h-screen flex flex-col pt-30 bg-transparent bg-linear-to-tl from-rose-900 via-rose-950 to-pink-950">
      {/* title */}
      <h2 className="text-1xl font-bold mb-8 font-poppins text-cyan-50 w-full text-center tracking-wide">
        {t("project.title")}
        <span className="text-4xl block font-normal">{t("project.sub-title")}</span>
      </h2>
    {/* cards render */}
      <div
        id="Projects"
        className="flex flex-col lg:flex-row lg:flex-wrap lg:items-start items-center gap-16 justify-center w-full h-auto mt-20 mb-20 lg:mb-0"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};


export default Projects;
