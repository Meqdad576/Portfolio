import React from "react";
import { FaDownload } from "react-icons/fa";

function About() {
  const handleDownload = () => {
    // Opens CV in a new tab, and user can download from there
    window.open("/meqdad-cv.pdf", "_blank");
  };

  const skills = [
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "REACT JS",
    "NODE JS",
    "MONGODB",
  ];

  const skillColors = [
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // amber
    "#EC4899", // pink
    "#6366F1", // indigo
    "#EF4444", // red
    "#8B5CF6", // violet
    "#06B6D4", // cyan
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 md:px-20"
      style={{ backgroundColor: "#1F2937" }}
    >
      <h2 className="mt-4 text-3xl font-bold mb-12 text-center text-white">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Rotating Skills Circle */}
        <div
          className="relative w-[350px] h-[350px] md:w-[480px] md:h-[480px]"
          style={{ animation: "rotateSkills 20s linear infinite" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white font-bold rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            Skills
          </div>

          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const radius = 160;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const baseColor = skillColors[index % skillColors.length];
            const hoverColor = shadeColor(baseColor, -20);

            return (
              <div
                key={index}
                className="absolute flex items-center justify-center w-20 h-20 text-xs font-semibold text-white rounded-full shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: baseColor,
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.backgroundColor = hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = baseColor;
                }}
              >
                {skill}
              </div>
            );
          })}
        </div>

        {/* Right: Description */}
        <div className="md:w-1/3 space-y-6 text-white">
          <p className="leading-relaxed">
            I am a passionate full-stack developer who enjoys building clean and interactive web applications. With a strong command of frontend technologies and backend logic, I bring design and functionality together.
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
          >
            <FaDownload /> Download My CV
          </button>
        </div>
      </div>
    </section>
  );
}

// Helper function to darken colors
function shadeColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

export default About;
