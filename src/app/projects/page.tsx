"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects, ProjectCard } from "@/components/ProjectsSection";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function ProjectsPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 cursor-pointer"
              style={{ color: "var(--muted)" }}
              whileHover={{ x: -4, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Home
            </motion.span>
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold mt-4" style={{ color: "var(--foreground)" }}>
            All Projects
          </h1>
          <p className="text-sm mt-2 max-w-xl" style={{ color: "var(--muted)" }}>
            A collection of things I&apos;ve built — from SaaS platforms to developer tools.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-6">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
