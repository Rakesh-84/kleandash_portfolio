import hero from "../assets/Screenshot 2026-04-18 230609.png";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
  return (
    <>
      <div className=" pt-15 text-white lg:flex  gap-4 justify-between items-center  lg:ps-20 lg:pe-20 h-96">
        <div className="text-center lg:text-left">
            <div className="badge">
    <span className="badge-dot"></span>
   <h2> Available for new projects</h2>
  </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 ">
            Your Data <br /> Deserves a <br />
            <strong className="text-[#b8895a]">
              Cleaner <br /> Dashboard
            </strong>
          </h1>

          <p className="text-center lg:text-left py-2 ">
            I build React dashboard UIs for SaaS startups and marketing agencies{" "}
            <br /> connected to your real data, without the need for a full-time
            developer.
          </p>
          <p> — Ex-Nestlé Marketing Officer · 9 years in business data.</p>
        </div>
        <div className="hidden lg:block bg-[#0f0c08] mt-12 ">
          {" "}
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 px-6 mt-36 lg:px-20 lg:py-20">
        <button
          className="bg-[#b8895a] text-black font-bold px-6 py-3 rounded hover:bg-black hover:text-white border border-[#b8895a] transition-colors"
          onClick={() => navigate('/work')}
        >
          View My Work
        </button>
        <button 
          className="border border-[#b8895a] text-[#b8895a] font-bold px-6 py-3 rounded hover:bg-[#b8895a] hover:text-black transition-colors"
          onClick={() => navigate('/contact')}
        >
          Contact Me
        </button>
      </div>
    </>
  );
}

export default Hero;
