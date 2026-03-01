"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-12 pb-8">
      {/* Hero Card with video background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: "1px dashed var(--dotted-border)",
          backgroundColor: "var(--surface)",
        }}
      >
        {/* Video / Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)",
              backgroundSize: "400% 400%",
              animation: "heroGradient 12s ease infinite",
            }}
          />
          {/* Uncomment below when you have hero-video.mp4 in public/ */}
          {/* <video autoPlay muted loop playsInline preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video> */}
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)", opacity: 0.3 }}
          />
        </div>

        {/* Available badge only */}
        <div
          className="relative z-10 flex items-end justify-end p-6 sm:p-8 min-h-[180px] sm:min-h-[300px]"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
            Available for freelance
          </motion.div>
        </div>
      </motion.div>

      {/* Intro text below hero card */}
      <div className="mt-10 text-left px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-instrument-serif), serif" }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--foreground)" }}>Pranay</span>{" "}
            <span style={{ color: "var(--muted)" }}>&mdash;</span>
          </h1>

          <div
            className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mt-3 text-sm font-medium"
            style={{ color: "var(--muted)" }}
          >
            <span>frontend</span>
            <span style={{ color: "var(--accent)" }}>•</span>
            <span>backend</span>
            <span style={{ color: "var(--accent)" }}>•</span>
            <span>devops</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-sm sm:text-base leading-relaxed max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          They call me{" "}
          <span className="inline-highlight">Pranay</span>.
          {" "}I enjoy building clean interfaces and making them work with solid logic. I focus on learning, improving, and shipping projects step by step.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 text-sm sm:text-base leading-loose max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          Open to freelance gigs or full-time roles. Slide into my{" "}
          <a
            href="https://x.com/PranayPrat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-tag"
          >
            DMs
          </a>{" "}
          or{" "}
          <a
            href="mailto:pranay.pratap15@gmail.com"
            className="inline-tag"
          >
            Email
          </a>{" "}
          me — I don&apos;t bite.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-3 text-sm sm:text-base leading-loose max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          <a href="https://github.com/Pranay-Prat" target="_blank" rel="noopener noreferrer" className="inline-tag">GitHub</a>
          {" , "}
          <a href="https://www.linkedin.com/in/pranay-pratap15" target="_blank" rel="noopener noreferrer" className="inline-tag">LinkedIn</a>
          {" , "}
          <a href="https://drive.google.com/file/d/13DNTrv1eXAwGfouyVggtAApioSnW7iIK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-tag">Resume</a>
          {" "}&mdash; all yours, no strings attached.
        </motion.p>

        {/* Available badge — mobile only, below intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex sm:hidden items-center justify-center mt-6"
        >
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
            Available for freelance
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
