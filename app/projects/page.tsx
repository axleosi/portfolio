import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A responsive full stack user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/jaded-label.git",
    demoUrl: "https://jaded-label.vercel.app/",
    imageUrls: ["/jadedlabel.png","/jadedlabel2.png","/jadedlabel3.png","/jadedlabel4.png","/jadedlabel5.png","/jadedlabel6.png","/jadedlabel7.png",]
  },
  {
    title: "Todo App",
    description: "A responsive full stack todo app with light and dark mode as well as filtering.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/todo-list.git",
    demoUrl: "https://todo-list1-virid.vercel.app",
    imageUrls: ["/todo.png","/todo2.png","/todo3.png","/todo4.png","/todo5.png"]
  },
  {
    title: "E-Commerce Website",
    description: "A responsive full stack user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/mitimeth-full.git",
    demoUrl: "https://mitimeth-full.vercel.app/",
    imageUrls: ["/mitimeth.png","/mitimeth2.png","/mitimeth3.png","/mitimeth4.png","/mitimeth5.png",]
  },
  {
    title: "Front end website",
    description: "A frontend only website that showcases a footwear seller.",
    techStack: ["Next.js", "CSS", "TypeScript"],
    githubUrl: "https://github.com/axleosi/BFW-website.git",
    demoUrl: "https://bfw-website.vercel.app/",
    imageUrls: ["/bfw.png","/bfw2.png","/bfw3.png","/bfw4.png","/bfw5.png",]
  }
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
        <p className="mt-4 text-gray-600 text-lg">
          A selection of frontend and backend projects.
        </p>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
