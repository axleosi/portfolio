'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrls: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  imageUrls,
}) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageUrls.length);
    }, 3000);
  }, [imageUrls.length]);

  useEffect(() => {
    if (imageUrls.length <= 1) return;

    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [imageUrls, resetInterval]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    resetInterval();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
    >
      {/* Image Section */}
      <div className="md:w-1/2 w-full relative">
        {Array.isArray(imageUrls) && imageUrls.length > 0 ? (
          <>
            <Image
              src={imageUrls[current]}
              alt={`${title} screenshot`}
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
              priority
            />
            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-3">
              {imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
            No image available
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-500 font-mono mb-4">
            Tech Stack: {techStack.join(", ")}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            GitHub
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
