
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Roommate Food Helper",
    description: "A Flutter + Firebase app that helps roommates coordinate food purchases. When one roommate goes out to buy food, they can notify others instantly. Roommates can then add their food requests in real-time, making group orders simple and organized.",
    techStack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Cloud Messaging"],
    githubUrl: "https://github.com/axleosi/food-helper.git",
    demoUrl: "https://food-helper-32267.web.app/",
    imageUrls: ["/foodhelper1.png", "/foodhelper2.png", "/foodhelper5.png", "/foodhelper6.png", "/foodhelper7.png"]
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "A React + TypeScript weather application that provides real-time weather updates, hourly forecasts, and 7-day predictions for any location. Users can search for locations, toggle between metric and imperial units, and view interactive weather details including temperature, wind speed, humidity, and precipitation.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Open-Meteo API", "Axios", "Context API"],
    githubUrl: "https://github.com/axleosi/weather-app.git",
    demoUrl: "https://weather-app-tawny-two-m3zog82m1e.vercel.app/",
    imageUrls: ["/weather1.jpg", "/weather2.jpg", "/weather3.jpg", "/weather4.jpg", "/weather5.jpg"]
  },
  {
    id: 3,
    title: "Real-Time Chat App",
    description: "A real-time chat application with instant messaging, friend management, and online presence tracking.",
    techStack: ["Flutter", "Express JS", "MongoDB", "Socket.IO", "JWT Auth"],
    githubUrl: "https://github.com/axleosi/chatroom-app",
    demoUrl: "https://chatroom-app1.web.app/",
    imageUrls: ["/chatapp1.png", "/chatapp2.png", "/chatapp3.png", "/chatapp4.png"]
  },
  {
    id: 4,
    title: "E-Commerce Site",
    description: "A responsive user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/jaded-label.git",
    demoUrl: "https://jaded-label.vercel.app/",
    imageUrls: ["/jadedlabel.png", "/jadedlabel2.png", "/jadedlabel3.png", "/jadedlabel4.png", "/jadedlabel5.png", "/jadedlabel6.png", "/jadedlabel7.png",]
  },
  {
    id: 5,
    title: "Sneakers E-Commerce Store",
    description: "A modern React e-commerce app for sneaker collections. Users can browse categories like Men, Women, and Collections, add products to cart, and view their cart in a responsive dropdown. The layout is fully responsive with dynamic routing and clean UI interactions.",
    techStack: ["React", "React Router", "CSS Modules", "Vercel"],
    githubUrl: "https://github.com/axleosi/e-commerce.git",
    demoUrl: "https://e-commerce-blond-seven-31.vercel.app/",
    imageUrls: ["/sneakers1.jpg", "/sneakers2.jpg", "/sneakers3.jpg", "/sneakers4.jpg"]
  },

  {
    id: 6,
    title: "Todo App",
    description: "A responsive full stack todo app with light and dark mode as well as filtering.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/todo-list.git",
    demoUrl: "https://todo-list1-virid.vercel.app",
    imageUrls: ["/todo.png", "/todo2.png", "/todo3.png", "/todo4.png", "/todo5.png"]
  },
  {
    id: 7,
    title: "Decisio App",
    description: "A fun decision-making app with a spinning wheel, customizable options, and visual highlights for the selected choice. Built with Flutter and deployed on Firebase Hosting.",
    techStack: ["Flutter", "Dart", "Firebase Hosting"],
    githubUrl: "https://github.com/axleosi/decisio.git",
    demoUrl: "https://decisio1.web.app",
    imageUrls: ["/decisio1.png", "/decisio2.png"]
  },
  {
    id: 8,
    title: "Color Picker App",
    description: "A Flutter app that generates random colors, shows HEX codes, lets users copy them, save favorites, and share. It includes color history, favorites, and a lock feature to preserve the current color.",
    techStack: ["Flutter", "Dart"],
    githubUrl: "https://github.com/axleosi/color-picker.git",
    demoUrl: "https://colorpickerapp1.web.app/",
    imageUrls: ["/color1.png", "/color2.png",]
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
