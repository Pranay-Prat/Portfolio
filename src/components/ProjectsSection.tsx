"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  emoji: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const allProjects: Project[] = [
  {
    title: "EchoForms",
    emoji: "📝",
    description:
      "EchoForms is an AI-powered SaaS for effortless form creation via prompts. It offers real-time analytics, email notifications, and seamless data export, making form management efficient and user-friendly.",
    image: "/projects/echoforms.png",
    technologies: [
      "Next.js", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "NeonDB",
      "Gemini LLM", "Clerk", "Zod", "Docker", "Razorpay", "Resend",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ReportNow",
    emoji: "🚨",
    description:
      "A secure platform for anonymous incident reporting, leveraging AI and real-time location tracking to enhance accuracy and efficiency.",
    image: "/projects/reportnow.png",
    technologies: [
      "Next.js", "Tailwind CSS", "React Hook Form", "Zod", "NextAuth",
      "Prisma", "PostgreSQL", "NeonDB", "Gemini LLM", "Here API", "Docker",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevSync",
    emoji: "🔄",
    description:
      "A real-time collaborative coding platform with live cursors, chat, and shared terminals for seamless remote pair programming.",
    image: "/projects/devsync.png",
    technologies: [
      "Next.js", "Socket.io", "Monaco Editor", "TypeScript", "Redis", "Docker",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CloudDash",
    emoji: "☁️",
    description:
      "An infrastructure monitoring dashboard with real-time metrics, alerts, and multi-cloud support for DevOps teams.",
    image: "/projects/clouddash.png",
    technologies: [
      "React", "D3.js", "Node.js", "GraphQL", "AWS SDK", "Terraform",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
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
      <div className="flex flex-col md:flex-row">
        {/* Project image / preview area */}
        <div
          className="w-full md:w-[45%] p-4 md:pr-2 flex items-center justify-center"
        >
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{
              backgroundColor: "#111",
              aspectRatio: "16 / 9",
            }}
          >
            {/* Placeholder — replace with <Image> when screenshots are ready */}
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="text-3xl mb-2">{project.emoji}</div>
              <p className="text-white text-sm font-bold">{project.title}</p>
              <p className="text-gray-500 text-[10px] mt-1">Add screenshot to public/projects/</p>
            </div>
          </div>
        </div>

        {/* Project details */}
        <div className="flex-1 p-5 sm:p-6 md:pl-4 flex flex-col justify-between">
          <div>
            {/* Title row with Live | GitHub */}
            <div className="flex items-start justify-between mb-3">
              <h3
                className="text-2xl font-normal flex items-center gap-2"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-instrument-serif), serif" }}
              >
                {project.title} <span>{project.emoji}</span>
              </h3>

              <div className="flex items-center gap-1 shrink-0 text-sm" style={{ color: "var(--muted)" }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-tag project-link"
                >
                  Live
                </a>
                <span className="mx-1" style={{ color: "var(--muted)" }}>|</span>
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
              className="text-sm leading-relaxed mb-4"
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
    <section id="projects" className="py-16 sm:py-24">
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
            className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer"
            style={{ color: "var(--muted)" }}
            whileHover={{ x: 4, color: "var(--foreground)" }}
            transition={{ duration: 0.2 }}
          >
            View all projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

export { ProjectCard };
