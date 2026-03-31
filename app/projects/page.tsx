import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Tramango",
    description: "A web platform that allows users to plan and book trips seamlessly. Tramango integrates real-time travel information, personalized itineraries, and collaborative trip planning to make travel management easy and fun.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    url: "https://tramango.com",
    imageUrls: ["/tramango1.png", "/tramango2.png", "/tramango3.png", "/tramango4.png", "/tramango5.png", "/tramango6.png"]
  },

  {
    title: "CamberFarms Africa",
    description: "A modern agricultural platform designed to showcase farm products, services, and sustainable farming practices. Built with a scalable full-stack architecture, the platform delivers a fast, responsive, and SEO-optimized user experience. Implemented advanced internationalization using i18n routing and dynamic content rendering, enabling seamless access in 10 languages. Optimized performance with server-side rendering and efficient API handling, while ensuring clean UI/UX across devices.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "next-intl (i18n)",
      "REST APIs"
    ],
    url: "https://camberfarms.org",
    imageUrls: [
      "/camber1.png",
      "/camber2.png",
      "/camber3.png",
      "/camber4.png"
    ]
  },
  {
    title: "CamberFarm Exports",
    description: "A B2B export marketplace platform designed to connect suppliers, manufacturers, and international buyers. The platform enables businesses to list products, discover trade partners, and manage export operations seamlessly. Built with a scalable architecture, it supports secure transactions, global accessibility, and streamlined trade workflows including product listings, partner discovery, and communication between buyers and sellers. Implemented responsive UI, optimized API performance, and structured data handling for efficient large-scale trade interactions.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Authentication & Authorization"
    ],
    url: "https://camberexports.com",
    imageUrls: [
      "/export.png",
      "/export2.png",
      "/export3.png",
      "/export4.png"
    ]
  },
  {
    title: "E-Commerce Website",
    description: "A responsive full stack user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/jaded-label.git",
    demoUrl: "https://jaded-label.vercel.app/",
    imageUrls: ["/jadedlabel.png", "/jadedlabel2.png", "/jadedlabel3.png", "/jadedlabel4.png", "/jadedlabel5.png", "/jadedlabel6.png", "/jadedlabel7.png",]
  },
  {
    title: "Weather Forecast App",
    description: "A React + TypeScript weather application that provides real-time weather updates, hourly forecasts, and 7-day predictions for any location. Users can search for locations, toggle between metric and imperial units, and view interactive weather details including temperature, wind speed, humidity, and precipitation.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Open-Meteo API", "Axios", "Context API"],
    githubUrl: "https://github.com/axleosi/weather-app.git",
    demoUrl: "https://weather-app-tawny-two-m3zog82m1e.vercel.app/",
    imageUrls: ["/weather1.jpg", "/weather2.jpg", "/weather3.jpg", "/weather4.jpg", "/weather5.jpg"]
  },
  {
    title: "Roommate Food Helper",
    description: "A Flutter + Firebase app that helps roommates coordinate food purchases. When one roommate goes out to buy food, they can notify others instantly. Roommates can then add their food requests in real-time, making group orders simple and organized.",
    techStack: ["Flutter", "Firebase Auth", "Cloud Firestore", "Firebase Cloud Messaging"],
    githubUrl: "https://github.com/axleosi/food-helper.git",
    demoUrl: "https://food-helper-32267.web.app/",
    imageUrls: ["/foodhelper1.png", "/foodhelper2.png", "/foodhelper5.png", "/foodhelper6.png", "/foodhelper7.png"]
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time chat application with instant messaging, friend management, and online presence tracking.",
    techStack: ["Flutter", "Express JS", "MongoDB", "Socket.IO", "JWT Auth"],
    githubUrl: "https://github.com/axleosi/chatroom-app",
    demoUrl: "https://chatroom-app1.web.app/",
    imageUrls: ["/chatapp1.png", "/chatapp2.png", "/chatapp3.png", "/chatapp4.png"]
  },
  {
    title: "Sneakers E-Commerce Store",
    description: "A modern React e-commerce app for sneaker collections. Users can browse categories like Men, Women, and Collections, add products to cart, and view their cart in a responsive dropdown. The layout is fully responsive with dynamic routing and clean UI interactions.",
    techStack: ["React", "React Router", "CSS Modules", "Vercel"],
    githubUrl: "https://github.com/axleosi/e-commerce.git",
    demoUrl: "https://e-commerce-blond-seven-31.vercel.app/",
    imageUrls: ["/sneakers1.jpg", "/sneakers2.jpg", "/sneakers3.jpg", "/sneakers4.jpg"]
  },
  {
    title: "Todo App",
    description: "A responsive full stack todo app with light and dark mode as well as filtering.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/todo-list.git",
    demoUrl: "https://todo-list1-virid.vercel.app",
    imageUrls: ["/todo.png", "/todo2.png", "/todo3.png", "/todo4.png", "/todo5.png"]
  },
  {
    title: "E-Commerce Website",
    description: "A responsive full stack user-friendly E-commerce site with an admin panel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express JS", "Mongo DB"],
    githubUrl: "https://github.com/axleosi/mitimeth-full.git",
    demoUrl: "https://mitimeth-full.vercel.app/",
    imageUrls: ["/mitimeth.png", "/mitimeth2.png", "/mitimeth3.png", "/mitimeth4.png", "/mitimeth5.png",]
  },
  {
    title: "Decisio App",
    description: "A fun decision-making app with a spinning wheel, customizable options, and visual highlights for the selected choice. Built with Flutter and deployed on Firebase Hosting.",
    techStack: ["Flutter", "Dart", "Firebase Hosting"],
    githubUrl: "https://github.com/axleosi/decisio.git",
    demoUrl: "https://decisio1.web.app",
    imageUrls: ["/decisio1.png", "/decisio2.png"]
  },
  {
    title: "Color Picker App",
    description: "A Flutter app that generates random colors, shows HEX codes, lets users copy them, save favorites, and share. It includes color history, favorites, and a lock feature to preserve the current color.",
    techStack: ["Flutter", "Dart"],
    githubUrl: "https://github.com/axleosi/color-picker.git",
    demoUrl: "https://colorpickerapp1.web.app/",
    imageUrls: ["/color1.png", "/color2.png",]
  },

  {
    title: "Front end website",
    description: "A frontend only website that showcases a footwear seller.",
    techStack: ["Next.js", "CSS", "TypeScript"],
    githubUrl: "https://github.com/axleosi/BFW-website.git",
    demoUrl: "https://bfw-website.vercel.app/",
    imageUrls: ["/bfw.png", "/bfw2.png", "/bfw3.png", "/bfw4.png", "/bfw5.png",]
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
