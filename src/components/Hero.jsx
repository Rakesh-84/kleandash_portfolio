import hero from "../assets/hero.png";

function Hero() {
  return (
    <>
      <div className=" pt-15 text-white lg:flex  gap-4 justify-between items-center  lg:ps-20 lg:pe-20 h-96">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 ">
            Your Data <br /> Deserves a <br />
            <strong className="text-gradient-emerald">
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
        <div className="hidden lg:block bg-emerald-300 mt-12 ">
          {" "}
          <img src={hero} alt="Hero" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 px-6 mt-14 lg:px-20 lg:py-20">
        <button className="bg-emerald-400 text-black px-6 py-2 lg:py-4 rounded-md font-bold">
          View My Work
        </button>
        <button className="border border-emerald-400 text-emerald-400 px-6 py-2 lg:py-4 rounded-md font-bold">
          Contact Me
        </button>
      </div>
    </>
  );
}

export default Hero;
