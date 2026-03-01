"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techCategories = [
  {
    category: "Languages",
    items: "Java, JavaScript, TypeScript"
  },
  {
    category: "Frameworks & Libraries",
    items: "React.js, Next.js, Express.js, Node.js, Tailwind CSS, TanStack Query, Motion , Zustand"
  },
  {
    category: "Databases",
    items: "PostgreSQL, MongoDB"
  },
  {
    category: "DevOps & Backend",
    items: "Docker, Supabase, Hono, Cloudinary"
  },
  {
    category: "Tools",
    items: "VS Code, Postman, GitHub, Canva"
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "DIT University, Dehradun",
    period: "2023 - 2027",
    grade: "8.94",
    details: [
      "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks."
    ]
  },{
    degree: "High School",
    institution: "Delhi Public School, Haridwar",
    period: "2021-2023",
    grade: "91.2%",
    details: [
      ""
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="pt-8 pb-16 px-2 sm:px-4 md:px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium mb-3 cursor-pointer"
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

          <h1 className="text-2xl sm:text-4xl font-normal mt-2" style={{ color: "var(--foreground)", fontFamily: "var(--font-instrument-serif), serif" }}>
            About Me
          </h1>
        </motion.div>

        {/* Bio */}
        <motion.div {...fadeInUp} className="mt-4 max-w-2xl">
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Hey! I&apos;m Pranay — a developer from Haridwar who loves building things for the web.
            I focus on crafting smooth, performant interfaces and solid backends. When I&apos;m not 
            writing code, you&apos;ll find me exploring new tech, analysing football matches, or 
            just vibing with some good music.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
            Right now, I&apos;m diving deep into advanced backend concepts and DevOps, particularly working with Docker and exploring scalable architectures.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mt-4" style={{ color: "var(--muted)" }}>
            I&apos;m currently available for freelance work and full-time roles. If you have an idea 
            or project in mind, feel free to reach out!
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...fadeInUp} className="mt-8">
          <SectionHeading className="mb-6">Tech Stack I Work With</SectionHeading>

          <ul className="flex flex-col gap-4 pl-2 sm:pl-6">
            {techCategories.map((tech, i) => (
              <motion.li 
                key={i} 
                className="text-sm sm:text-base leading-relaxed flex items-start gap-2" 
                style={{ color: "var(--muted)" }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                <div>
                  <span className="font-semibold" style={{ color: "var(--foreground)" }}>{tech.category} :</span> {tech.items}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div {...fadeInUp} className="mt-16">
          <SectionHeading className="mb-6">Education</SectionHeading>

          <div className="flex flex-col gap-4 pl-2 sm:pl-6">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>{edu.degree}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end shrink-0 mt-2 sm:mt-0">
                    <span className="text-sm flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-sm font-medium mt-1" style={{ color: "var(--accent)" }}>
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>

                {edu.details && edu.details.length > 0 && edu.details.some(point => point.trim() !== "") && (
                  <ul className="flex flex-col gap-2 ml-1 mt-3">
                    {edu.details.filter(point => point.trim() !== "").map((point, j) => (
                      <li key={j} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: "var(--muted)" }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
