import portfolioImg from "../assets/portfolio-img.PNG";
import  toDo from "../assets/to-do-app.PNG";
import CCDA from "../assets/CCDA-img.PNG";
import Client from "../assets/client-manager.PNG";
import Weather from "../assets/weather.PNG";
import form from "../assets/form.PNG";
function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
             {
              title: "Client Manager",
              desc: "This is React based website that help to manage data of clients",
              link: "https://github.com/",
              image: Client,
            }
           ,

            {
              title: "CCDA",
              desc: "This website is based on MERN Stack Technology. And It handle both clients and admin",
              link: "https://github.com/",
              image: CCDA,
            },
            {
              title: "Portfolio Website",
              desc: "This is my portfolio website",
              link: "https://github.com/",
              image: portfolioImg, // ✅ use the imported image
            }
            ,
              {
              title: "Weather App",
              desc: "This website is help full to check weather all over the world and based on react js",
              link: "https://github.com/",
              image: Weather,
            },
             {
              title: "To-Do App",
              desc: "A simple React-based to-do list with local storage support.",
              link: "https://github.com/",
              image: toDo,
            },
              {
              title: "Customer Registration Form",
              desc: "React Js based Client form which take all details  and give some fucntionalities like Show Details,Print,Download Pdf,Edit and Delete.",
              link: "https://github.com/",
              image: form,
            },

          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image} // ✅ dynamically uses correct image
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <a
                  href={project.link} // ✅ link to GitHub instead
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
