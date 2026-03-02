"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [contactOpen, setContactOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-50 pt-4"
        style={{
          background: "var(--navbar-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between pb-4">
          {/* Avatar as logo, links to home */}
          <Link href="/" className="hidden sm:block">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="w-9 h-9 rounded-full overflow-hidden"
                style={{
                  border: "1px dashed var(--dotted-border)",
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 text-[13px] sm:text-sm ml-auto">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="btn-dotted nav-btn cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.label} href={link.href}>
                  <span className="btn-dotted nav-btn cursor-pointer inline-block">
                    {link.label}
                  </span>
                </Link>
              )
            )}

            <button
              onClick={() => setContactOpen(true)}
              className="btn-dotted nav-btn cursor-pointer"
            >
              Contact
            </button>

            {/* Theme toggle */}
            <motion.button
              onClick={(e) => toggleTheme(e)}
              className="ml-3 p-2 rounded-md cursor-pointer"
              style={{
                color: "var(--muted)",
                border: "1px dashed var(--dotted-border)",
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.span
                className="block"
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {theme === "dark" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </motion.span>
            </motion.button>
          </div>
        </div>
        <div style={{ height: "1px", borderBottom: "1px dashed var(--dotted-border)" }} />
      </motion.nav>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
