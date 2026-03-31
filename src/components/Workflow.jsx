const steps = [
  {
    id: "01",
    title: "Discovery Call",
    description:
      "30 minutes. I understand your data, your users, and what success looks like for you.",
  },
  {
    id: "02",
    title: "Wireframe",
    description:
      "Within 48 hours I share a layout wireframe. You approve before I write a single line of code.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "I build in React with your real data connected. You can see it working from day 2.",
  },
  {
    id: "04",
    title: "Revisions",
    description:
      "Two revision rounds included. I don't stop until it looks and works exactly right.",
  },
  {
    id: "05",
    title: "Handover",
    description:
      "Live on Vercel with a Loom walkthrough video. You own the code completely.",
  },
];

const Workflow = () => {
  return (
    <section className="bg-[#020606] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-[#34d399] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
          How I Work
        </p>
        <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-[1.1] tracking-tighter mb-6">
          From first email <br /> to live <br /> dashboard in 5 steps
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-20 leading-relaxed">
          A clear, repeatable process so you always know what's happening and
          what comes next.
        </p>

        {/* Steps Timeline */}
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-4.5 left-0 w-full h-px bg-white/10 z-0" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 group"
            >
              {/* Number Circle */}
              <div className="w-10 h-10 rounded-full bg-[#020606] border border-white/20 flex items-center justify-center mb-6 transition-colors group-hover:border-[#34d399]">
                <span className="text-[#34d399] text-[10px] font-bold tracking-tighter">
                  {step.id}
                </span>
              </div>

              {/* Text Content */}
              <h4 className="text-lg font-bold mb-3 tracking-tight">
                {step.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
