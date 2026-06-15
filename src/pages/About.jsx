import { ArrowRight, Code, GraduationCap, Briefcase } from "phosphor-react";
import me from "../assets/me.webp"

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <div className="mb-16">
        <p className="text-[30px] tracking-[0.2em] font-bold text-[#00d37e] uppercase mb-4">
          The Story
        </p>
      <img src={me} alt="About Me" className="w-32 h-32 rounded-full mx-0 sm:pe-0" />
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-tight">
          Building Web Solution <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
            What AI Can't Build... Yet.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Bio */}
        <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
          <p>
            I am a <span className="text-white font-bold">Full-Stack Web Developer</span>  based in Bangladesh, specializing in the backend systems, multi-tenant architecture, and AI-powered features that take a SaaS product from prototype to production. Before writing a single line of code, I spent 9 years as a Marketing Officer at Nestlé <br /> managing territory operations, distributor networks, and field sales systems where every breakdown had a real cost. That experience changed how I build. I don't just think like a developer, <br />
             I think like the person whose business depends on this system working correctly every day. I build for reliability. I build for scale.
          </p>
   
          
          <div className="pt-6 border-t border-white/5">
            <h4 className="text-white font-bold mb-4 italic uppercase text-sm">Technical Arsenal</h4>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Nest.js", "Tailwind CSS", "TypeScript", "Supabase", "Recharts","Docker","AI/RAG"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Milestones */}
        <div className="space-y-6">
          <div className="bg-[#080d0d] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
             <div className="flex gap-6 items-start">
                <div className="p-3 bg-[#00d37e]/10 rounded-xl text-[#00d37e]">
                  <Code size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-white font-bold italic uppercase tracking-tighter mb-2 text-xl">The Developer</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
             Building production-ready SaaS systems  multi-tenant architecture, real-time features, and AI-powered automation  under the KleanDash brand.
                  </p>
                </div>
             </div>
          </div>

          <div className="bg-[#080d0d] p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
             <div className="flex gap-6 items-start">
                <div className="p-3 bg-[#00d37e]/10 rounded-xl text-[#00d37e]">
                  <GraduationCap size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-white font-bold italic uppercase tracking-tighter mb-2 text-xl">The Educator</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Evening tutor for secondary students  a discipline that sharpened my ability to break complex systems into simple, understandable visuals.
                  </p>
                </div>
             </div>
          </div>

          <div className="bg-[#080d0d] p-8 rounded-3xl border border-white/10 relative overflow-hidden group text-center py-12">
            <h4 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">Current Focus</h4>
            <p className="text-2xl font-black text-white italic uppercase tracking-tighter">
             Multi-Tenant SaaS Platforms with <br /> AI-Powered Features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
