import { useState } from "react";

export default function Ready() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");

    const formData = new FormData(event.target);

    // Safely pull the key from your .env file
    const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! I'll get back to you within 24 hours.");
        event.target.reset(); // Clear form after success
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Error connecting to server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
      // Automatically hide the status message after 6 seconds
      setTimeout(() => setResult(""), 6000);
    }
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="contact">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[10px] tracking-[0.2em] font-bold text-[#00d37e] uppercase mb-4">
          LET'S WORK TOGETHER
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white italic leading-tight uppercase">
          READY FOR A <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d8dddb] to-white">
            CLEANER DASHBOARD?
          </span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm leading-relaxed">
          Tell me about your project. I’ll get back to you within 24 hours with
          a clear plan and honest timeline.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#080d0d] p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="James Mitchell"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00d37e]/50 transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="james@company.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00d37e]/50 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
              Company / Website
            </label>
            <input
              name="website"
              type="text"
              placeholder="acme.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00d37e]/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
              Tell me about your project
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="What data do you have? Who will use the dashboard? Any specific features you need?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00d37e]/50 transition-all resize-none placeholder:text-gray-600"
            />
          </div>

          {/* Status Message Display */}
          {result && (
            <div
              className={`text-center p-3 rounded-xl text-xs font-bold transition-all ${
                result.includes("Success")
                  ? "bg-[#00d37e]/10 text-[#00d37e]"
                  : "bg-white/5 text-gray-400"
              }`}
            >
              {result}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00d37e] hover:bg-[#00b36b] disabled:bg-gray-800 disabled:text-gray-500 text-black font-black py-5 rounded-2xl transition-all flex justify-center items-center gap-2 uppercase tracking-tighter"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message →"
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-[11px] text-gray-500">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:rex@kleandash.com"
              className="text-[#34d399] hover:underline transition-all"
            >
              rex@kleandash.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
