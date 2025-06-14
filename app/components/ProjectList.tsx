
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Site",
    description: "A responsive user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/jaded-label.git",
    demoUrl: "https://jaded-label.vercel.app/",
    imageUrls: ["/jadedlabel.png","/jadedlabel2.png","/jadedlabel3.png","/jadedlabel4.png","/jadedlabel5.png","/jadedlabel6.png","/jadedlabel7.png",]
  },
  {
    id: 2,
    title: "Todo App",
    description: "A responsive full stack todo app with light and dark mode as well as filtering.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/todo-list.git",
    demoUrl: "https://todo-list1-virid.vercel.app",
    imageUrls: ["/todo.png","/todo2.png","/todo3.png","/todo4.png","/todo5.png"]
  },
];

const ProjectList = () => {
  return (
    <div className="w-full px-6 sm:px-12 mt-36 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        SOME OF MY LATEST WORKS
      </h2>

      <div className="flex flex-col gap-20 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
