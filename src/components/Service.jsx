import { ArrowRight } from "lucide-react";
import { Projects } from "../data/ProjectsData.jsx";

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden border border-white/10 bg-[#050a0a]">
      {/* Left Side: Content (Flex Basis 45%) */}
      <div className="flex-1 md:flex-[0_0_45%] p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
        <div>
          <p className="text-[#34d399] text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">
            Project {project.id} · {project.category}
          </p>
          <h3 className="text-3xl md:text-4xl font-black italic uppercase leading-tight mb-6 tracking-tighter">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
            {project.description}
          </p>

          <div className="flex gap-12 mb-10">
            <div>
              <p className="text-[10px] text-gray-500 font-bold mb-2 tracking-widest">
                STACK
              </p>
              <p className="text-xs font-bold text-white/90">{project.stack}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold mb-2 tracking-widest">
                DELIVERY
              </p>
              <p className="text-xs font-bold text-white/90">
                {project.delivery}
              </p>
            </div>
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#34d399] text-sm font-bold group"
        >
          View Live Demo
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* Right Side: Preview UI (Flex Basis 55%) */}
      <div className="flex-1 md:flex-[0_0_55%] bg-[#080d0d] p-6 md:p-10 flex items-center justify-center">
        <div className="w-full h-full">{project.preview}</div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section
      className="bg-[#020617] text-white px-6 lg:px-20 py-20"
      id="services"
    >
      {/* Section Label */}
      <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase block mb-6">
        Selected Work
      </span>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-16">
        Projects that solve real problems
      </h2>

      {/* Projects List */}
      <div className="space-y-16">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Service;
