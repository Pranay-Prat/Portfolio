"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const allProjects: Project[] = [
  {
    title: "LineupLab",
    description:
      "Lineup Lab is a web app for football fans and coaches that makes it easy to create and customize team lineups. It features a simple drag-and-drop system to build different formations quickly and share the lineups with others.",
    image: "/projects/LineupLab.png",
    technologies: [
      "Next.js","TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Supabase","Zustand",
      "React Dnd", "Zod", 
    ],
    liveUrl: "https://football-lineup-maker.vercel.app/",
    githubUrl: "https://github.com/Pranay-Prat/Lineup-Lab",
  },
  {
    title: "Blogify",
    description:
      "A high-performance full-stack blogging platform built with a monorepo architecture. It features secure authentication and an intuitive interface for effortless content management, leveraging Hono for rapid API delivery.",
    image: "/projects/Blogify.png",
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "Zod", "Hono","Prisma", "PostgreSQL", 
    ],
    liveUrl: "https://blogify-psi-tan.vercel.app/",
    githubUrl: "https://github.com/Pranay-Prat/Blogify",
  },
  {
    title: "Ch4t",
    description:
      "A real-time messaging application built with React, Node.js, Express, and MongoDB. It supports bi-directional communication, image sharing through Cloudinary. The app features responsive design with TailwindCSS and global state management using Zustand ",
    image: "/projects/Ch4t.png",
    technologies: [
      "React", "ws", "Express", "MongoDB", "JavaScript", "Cloudinary", "Node.js",
    ],
    liveUrl: "https://chat-app-one-wheat-35.vercel.app/",
    githubUrl: "https://github.com/Pranay-Prat/Ch4t",
  },
  {
    title: "UICraft",
    description:
      "UICraft is an AI-powered platform that turns natural language prompts into production-ready React components. It offers real-time preview, a chat-based interface for iterations, and built-in authentication with theme support.",
    image: "/projects/UICraft.png",
    technologies: [
      "Nextjs", "TanStack Query", "Inngest", "E2b", "Docker", "Gemini","Clerk","TypeScript"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Pranay-Prat/UICraft",
  },
  {
    title: "UIDAI Hackathon",
    description:
      "Built for a hackathon, I designed and developed the complete frontend of the Aadhaar Analytics Dashboard. I focused on creating an interactive UI with map-based drilldowns and detailed analytics views, handling the design and user experience while the rest was built by the team.",
    image: "/projects/UIDAI.png",
    technologies: [
      "Nextjs", "TypeScript", "Tailwind CSS", "D3.js",
    ],
    liveUrl: "https://uidai-hackathon-phi.vercel.app/",
    githubUrl: "https://github.com/Pranay-Prat/UIDAIHackathon",
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        border: "1px dashed var(--dotted-border)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(128, 128, 128, 0.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--background)")}
    >
      <div className="flex flex-col md:flex-row md:items-stretch">
        {/* Project image / preview area */}
        <div
          className="w-full md:w-[45%] p-4 md:pr-2 md:pl-5 flex items-center justify-center"
        >
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{
              backgroundColor: "#111",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project details */}
        <div className="flex-1 p-5 sm:p-6 md:pl-4 flex flex-col justify-between overflow-hidden">
          <div>
            {/* Title row with Live | GitHub */}
            <div className="flex items-start justify-between mb-3">
              <h3
                className="text-3xl font-normal flex items-center gap-2"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-instrument-serif), serif" }}
              >
                {project.title}
              </h3>

              <div className="flex items-center gap-1 shrink-0 text-base" style={{ color: "var(--muted)" }}>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-tag project-link"
                    >
                      Live
                    </a>
                    <span className="mx-1" style={{ color: "var(--muted)" }}>|</span>
                  </>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-tag project-link"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base leading-snug tracking-tight mb-4"
              style={{ color: "var(--muted)" }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div>
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Technologies Used:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-sm font-medium"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featured = allProjects.slice(0, 2);

  return (
    <section id="projects" className="pt-16 sm:pt-24 pb-8 sm:pb-8">
      {/* Section heading */}
      <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
        <h2
          className="inline-block text-base sm:text-lg font-semibold px-3 py-1"
          style={{
            border: "1px dashed var(--dotted-border)",
            color: "var(--foreground)",
          }}
        >
          Things I&apos;ve Built
        </h2>
      </motion.div>

      {/* Project cards */}
      <div className="mt-8 flex flex-col gap-6">
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            {...fadeInUp}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* View all projects */}
      <motion.div
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex justify-end"
      >
        <Link href="/projects">
          <motion.span
            className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer relative group pb-1"
            style={{ color: "var(--muted)" }}
            whileHover="hover"
            initial="initial"
            animate="initial"
            transition={{ duration: 0.2 }}
          >
            <span className="relative">
              View all projects
              {/* Hover Underline */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[1px] bg-foreground w-full origin-left"
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ backgroundColor: "var(--foreground)" }}
              />
            </span>
            <motion.svg 
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              variants={{
                initial: { x: 0, color: "var(--muted)" },
                hover: { x: 4, color: "var(--foreground)" }
              }}
              transition={{ duration: 0.2 }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </motion.svg>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

export { ProjectCard };
