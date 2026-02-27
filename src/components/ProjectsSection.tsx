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
      className="group rounded-xl overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-color)",
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Project image / preview area */}
        <div
          className="relative w-full md:w-[42%] overflow-hidden"
          style={{
            minHeight: "260px",
            backgroundColor: "#111",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            {/* Mock screenshot area */}
            <div
              className="w-full max-w-[280px] rounded-lg p-4 mb-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <div className="text-3xl mb-2">{project.emoji}</div>
              <p className="text-white text-base font-bold">{project.title}</p>
              <p className="text-gray-500 text-[10px] mt-1">Add screenshot to public/projects/</p>
            </div>
          </div>
          {/* When you have screenshots, use Next/Image:
          <Image src={project.image} alt={project.title} fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 42vw" loading="lazy"
          /> */}
        </div>

        {/* Project details */}
        <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            {/* Title row with Live | GitHub */}
            <div className="flex items-start justify-between mb-4">
              <h3
                className="text-xl font-bold flex items-center gap-2"
                style={{ color: "var(--foreground)" }}
              >
                {project.title} <span>{project.emoji}</span>
              </h3>

              <div className="flex items-center gap-0 shrink-0">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dotted text-xs py-1 px-2.5"
                >
                  Live
                </a>
                <span className="mx-1.5 text-xs" style={{ color: "var(--muted)" }}>|</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dotted text-xs py-1 px-2.5"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-5"
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
