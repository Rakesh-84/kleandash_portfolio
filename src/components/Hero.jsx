import hero from "../assets/Admin.png";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
  return (
    <>
      <div className=" lg:pt-25 text-white lg:flex  gap-120  items-center  lg:ps-20 lg:pe-20 h-96">
        <div className="text-center lg:text-left lg:w-3xl">
            <div className="badge">
   
  </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 ">
           AI Can Build  <br />The Demo. <br />
            <strong className="text-[#b8895a]">
              I Build  <br /> What Works.
            </strong>
          </h1>

          <p className="text-center lg:text-left py-2 lg:w-xl ">
           I take over where AI tools and no-code builders stop  multi-tenant architecture, real-time systems, secure auth, and the custom logic that turns a prototype into a product. I also build AI-powered features directly into your stack — RAG, automation, smart workflows. Clean code. Sharp judgment. No guesswork.
          
          </p>
          <p className="lg:ps-33"> — Ex-Nestlé Marketing Officer · 9 years in business operations.</p>
        </div>
        <div className="hidden lg:block lg:w-4xl bg-[#0f0c08] mt-12 ">
         
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 px-6 mt-36 lg:px-20 lg:pt-10 ">
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
