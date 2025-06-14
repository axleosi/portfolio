import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200 py-6 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Name or message */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Osi. All rights reserved.
        </p>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
          <a
            href="https://github.com/axleosi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        {/* Right - Social media (optional) */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48..." />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
