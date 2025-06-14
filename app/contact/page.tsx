"use client"; // only needed in Next.js App Router

import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-24 flex flex-col items-center text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Whether you have a question, a project idea, or just want to say hi — my inbox is always open. Let’s build something awesome together!
      </motion.p>

      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl grid gap-6 sm:grid-cols-2 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Email</h3>
          <p className="flex items-center gap-2 text-gray-600">
            <FaEnvelope className="text-blue-600" />
            <span className="hover:underline">
              axleositech@gmail.com
            </span>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
          <p className="flex items-center gap-2 text-gray-600">
            <FaPhone className="text-blue-600" />
            <span className="hover:underline">
              +234 901 891 2705
            </span>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Location</h3>
          <p className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-blue-600" />
            Lagos, Nigeria
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-700">Availability</h3>
          <p className="text-gray-600">Currently open for freelance and full-time opportunities</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-gray-800 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-2">Let’s Work Together</h2>
        <p className="text-gray-600">
          I love collaborating on creative projects and bringing ideas to life. Feel free to reach out if you’re looking for a reliable developer to help you build something exceptional.
        </p>
      </motion.div>

      <div className="flex gap-6 mt-12 text-gray-600">
        <a href="https://github.com/axleosi" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} className="hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} className="hover:text-blue-500 transition" />
        </a>
      </div>

      <p className="mt-16 text-sm text-gray-400">© {new Date().getFullYear()} Osi. All rights reserved.</p>
    </section>
  );
}
