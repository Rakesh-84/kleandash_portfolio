import Screenshot from "../assets/Screenshot 2026-03-30 113327.png";

const SaaSPreview = () => {
  return (
    <div className="relative w-full h-full min-h-64 overflow-hidden rounded-lg border border-white/10 group">
      {/* The Dashboard Screenshot */}
      <img
        src={Screenshot} // Ensure your screenshot is in the public or assets folder
        alt="BIZDash Preview"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* Optional Overlay to make it look "Techy" */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default SaaSPreview;
