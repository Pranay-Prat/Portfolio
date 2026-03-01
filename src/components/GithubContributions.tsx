"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import { useTheme } from "./ThemeProvider";

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function GithubContributions() {
  const { theme } = useTheme();

  return (
    <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.3 }} >
      <h2
        className="inline-block text-base sm:text-lg font-semibold px-3 py-1 mb-6"
        style={{
          border: "1px dashed var(--dotted-border)",
          color: "var(--foreground)",
        }}
      >
        My Contributions
      </h2>

      <div 
        className="p-4 sm:p-6 w-full flex justify-center items-center"
        style={{
          border: "1px dashed var(--dotted-border)",
        }}
      >
        <div className="w-full overflow-x-auto hide-scrollbar flex justify-center py-2">
          <GitHubCalendar 
            username="Pranay-Prat" 
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={{
              light: ['hsl(0, 0%, 92%)', 'rgb(214, 16, 174)'],
              dark: ['#333', 'rgb(214, 16, 174)'],
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
