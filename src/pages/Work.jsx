import { Projects } from "../data/ProjectsData";
import { ArrowRight } from "phosphor-react";

export default function Work() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.2em] font-bold text-[#00d37e] uppercase mb-4">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase">Selected Work</h2>
      </div>

      <div className="flex flex-col gap-20">
        {Projects.map((project) => (
          <div key={project.id} className="flex flex-col lg:flex-row bg-[#080d0d] rounded-3xl border border-white/10 overflow-hidden min-h-112.5">
            
            {/* Left Side: Info */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold text-[#00d37e] mb-4 tracking-widest">{project.category}</p>
                <h3 className="text-3xl font-black text-white mb-6 uppercase italic leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
                  {project.description}
                </p>
                
                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Stack</p>
                    <p className="text-xs text-white/90 font-bold">{project.stack}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Delivery</p>
                    <p className="text-xs text-white/90 font-bold">{project.delivery}</p>
                  </div>
                </div>
              </div>

              <a href="#" className="flex items-center gap-2 text-[#00d37e] text-sm font-bold group">
                View Live Demo 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Side: Preview UI (Flex Basis 55%) */}
            <div className="flex-1 md:flex-[0_0_55%] bg-black/40 p-6 md:p-10 flex items-center justify-center border-l border-white/5">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                {project.preview} {/* This renders your SaaSPreview component */}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
