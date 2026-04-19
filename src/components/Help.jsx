import { HiCheckCircle } from "react-icons/hi"; // Great for those green dots

function Help() {
  const stack = [
    "React",
    "Tailwind CSS",
    "Recharts",
    "Supabase",
    "Google Sheets API",
    "Vercel",
  ];
  const points = [
    {
      title: "No backend team required",
      desc: "I connect to Google Sheets, your existing API, or Supabase directly.",
    },
    {
      title: "You own the code",
      desc: "Delivered clean, documented, and deployable on Vercel in minutes.",
    },
    {
      title: "Fast turnaround",
      desc: "Most projects go from wireframe to live demo in under 5 days.",
    },
    {
      title: "One point of contact",
      desc: "No middlemen, no miscommunication. You talk to the developer building it.",
    },
  ];

  return (
    <section className="bg-[#020617] text-white px-6 lg:px-30 py-8 lg:py-7 border-t border-gray-900">
      {/* THE RIBBON PORTION */}
      <div className="border-y border-gray-900 bg-[#030712] py-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 px-6">
          <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
            Built With
          </span>
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-gray-400 text-sm font-medium hover:text-var(--kraft)-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Small Label */}
      <span className="text-[#b8895a] font-bold tracking-widest text-xs uppercase block mb-6">
        About
      </span>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Side: Large Heading & Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 ">
            Real skills. Clean <br />
            code. Clear <br />
            communication.
          </h2>
          <div className="text-gray-400 text-lg space-y-6 max-w-xl">
            <p>
              I’m Rex — 9 years reading business dashboards at Nestlé. Now I
              build them.As a React developer specializing in dashboard UIs, I
              help SaaS founders and marketing agencies turn raw data into
              interfaces their teams actually use every day.
            </p>
            <p>
              Based in Bangladesh, I deliver US-quality work at a fraction of
              agency cost — with full async availability to match your timezone.
              Your data never waits.
            </p>
          </div>
        </div>

        {/* Right Side: List of Points */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
          {points.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <HiCheckCircle className="text-[#b8895a] text-2xl mt-1 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-white text-lg">
                  {item.title}
                </span>
                <span className="text-gray-500 ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Help;
