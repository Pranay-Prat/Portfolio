"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Research Commons",
    role: "Frontend Developer Intern",
    type: "Remote",
    period: "April - June 2025",
    points: [
      "Built a drag-and-drop library panel with search and resizable layout that made file management way easier.",
      "Revamped and refactored a disorganized UI into modular, reusable components following Atomic Design architecture.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Tanstack Query"],
    link: "#",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express", "PostgreSQL", "MongoDB",
  "Docker", "AWS", "Git", "Figma",
];

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      {/* Section heading — dotted border style */}
      <motion.div {...fadeInUp}>
        <SectionHeading>Places I&apos;ve Made an Impact</SectionHeading>
      </motion.div>

      {/* Experience cards */}
      <div className="mt-8 flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            {...fadeInUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: "var(--foreground)" }}>
                  {exp.company}
                  <motion.a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="inline-block"
                    style={{ color: "var(--muted)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.a>
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    {exp.role}
                  </span>
                  <span
                    className="px-2 py-0.5 text-xs font-medium"
                    style={{
                      border: "1px dashed var(--dotted-border)",
                      color: "var(--accent)",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
              <span
                className="text-sm flex items-center gap-1.5 shrink-0"
                style={{ color: "var(--muted)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {exp.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2 ml-1">
              {exp.points.map((point, j) => (
                <li
                  key={j}
                  className="text-sm leading-relaxed flex items-start gap-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                Tech Stack:
              </span>
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--tag-bg)",
                    color: "var(--tag-text)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-16">
        <h2
          className="inline-block text-base sm:text-lg font-semibold px-3 py-1 mb-6"
          style={{
            border: "1px dashed var(--dotted-border)",
            color: "var(--foreground)",
          }}
        >
          Tech I Work With
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className="px-3 py-1.5 text-xs font-medium cursor-default"
              style={{
                backgroundColor: "var(--tag-bg)",
                color: "var(--tag-text)",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
