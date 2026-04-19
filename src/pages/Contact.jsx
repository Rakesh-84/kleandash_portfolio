import { EnvelopeSimple, WhatsappLogo, MapPin, Globe } from "phosphor-react";
import Ready from "../components/Ready";

export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.2em] font-bold text-[#b8895a] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-tight">
          Let's Build Something <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
            Remarkable Together
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Info (4 Columns) */}
        <div className="lg:col-span-4 space-y-10">
          <div>
            <h4 className="text-white font-bold mb-6 italic uppercase text-sm tracking-widest">Contact Details</h4>
            <div className="space-y-6">
              <a 
                href="mailto:rex@kleandash.com" 
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#b8895a] group-hover:scale-110 transition-transform">
                  <EnvelopeSimple size={20} weight="duotone" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Email Me</p>
                  <p className="text-white font-medium text-sm">rex@kleandash.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#b8895a]">
                  <MapPin size={20} weight="duotone" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Location</p>
                  <p className="text-white font-medium text-sm">Chittagong, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#b8895a]">
                  <Globe size={20} weight="duotone" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Availability</p>
                  <p className="text-white font-medium text-sm">Open for Freelance & SaaS Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social / Quick Links */}
          <div className="pt-10 border-t border-white/5">
            <h4 className="text-white font-bold mb-4 italic uppercase text-sm">Working Hours</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              I typically respond within <span className="text-white">24 hours</span>. <br />
              Monday — Friday: 9am - 6pm (GMT+6) <br /> "Async-friendly — I work around your <br /> timezone for reviews and feedback."
            </p>
            
          </div>
        </div>

        {/* Right Side: The Form (8 Columns) */}
        <div className="lg:col-span-8 bg-[#080d0d] rounded-3xl border border-white/10 overflow-hidden">
          {/* We reuse the Ready component here to keep logic DRY */}
          <div className="p-2 md:p-6">
             <Ready />
          </div>
        </div>
      </div>
    </section>
  );
}
