import React from "react";
import "./Projects.css";
import gymproject from "../assets/2.png";
import oppoproject  from "../assets/oppoimage.png";
import movieproject from "../assets/bookmyshow.png"

const projectData = [
   {
    title: "E-commerce project (Oppo clone)",
    description:
      "Oppo Product Store is a e-commerce web application built to showcase and sell Oppo brand products and accessories. It features a sleek UI, category-based product browsing (Smartphones, Tablets, Accessories), dynamic cart functionality , user authentication, and a secure checkout system with order confirmation.",
    tech: ["React", "Redux","Node,js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/dipvijay212/oppoprojectfront",
    demo: "https://oppoproject.netlify.app/",
  image: oppoproject,
  },
  {
    title: "The Fitness Store",
    description:
      "I have built a fully functional e-commerce web app using React.js, Redux Firebase, and CSS.It includes features like multi-page navigation, product iltering, search, authentication, and cart functionality",
    tech: ["React", "Redux", "Firebase", "CSS"],
    github: "https://github.com/dipvijay212/gymproject",
    demo: "https://gymproject-theta.vercel.app/",
    image: gymproject, // add your image path
  },
  {
    title: "Bookmyshow Clone",
    description:
      "Movie Website UI is a front-end-only project developed using HTML, CSS, Bootstrap5 , , JavaScript, and jQuery. It features a responsive and interactive interface for browsing movies, with smooth navigation, search functionality, and a modern layout designed to deliver a clean and user-friendly experience.",
    tech: ["HTML", "CSS", "Bootstrap", "jQuery"],
    github: "https://github.com/yourusername/checkout-page",
    demo: "https://glittery-froyo-cef0d9.netlify.app/",
   image: movieproject,
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projectData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span className="tech" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
