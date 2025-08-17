import { useEffect, useState } from "react";
import myPic from "../assets/m.jpg"; // ✅ Your image path

function Home() {
  const [text, setText] = useState("");
  const words = [
    "Hi! Here is Meqdad Ali",
    "I'm a Frontend Developer",
    "I love building things with code",
    "Welcome to my portfolio"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter logic
  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🌌 Moving Stars Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* ✅ Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-70 backdrop-blur p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-400">Meqdad's Portfolio</h1>
          <ul className="flex gap-6 text-sm text-gray-300">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-400">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 🔤 Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Left Side: Text */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-500 mb-4 h-24">
            {text}
            <span className="border-r-2 border-indigo-500 animate-pulse ml-1" />
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Passionate about creating interactive UIs with clean code.
            <br /> Experienced in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript & React JS.
            <br/> Back-End in Node JS And Database in MongoDB.
            <br /> I turn ideas into beautiful and functional web experiences.
          </p>
        </div>
 
        {/* Right Side: Image with frame and hover effect */}
        <div className="relative group w-fit mx-auto">
          <div className="p-2 rounded-full border-4 border-indigo-600 transition-transform duration-500 group-hover:scale-105 shadow-lg shadow-indigo-700">
            <img
              src={myPic}
              alt="Meqdad Ali"
              className="w-60 h-60 object-cover rounded-full"
            />
          </div>
          <div className="mt-4 text-center space-y-1 text-gray-300">
            <p className="text-sm">Frontend & Backend Developer</p>
            <p className="text-sm">Creative Thinker</p>
            <p className="text-sm">Problem Solver</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
