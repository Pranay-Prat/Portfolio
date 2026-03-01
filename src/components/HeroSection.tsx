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
        className="relative rounded-2xl overflow-hidden w-full h-[200px] sm:h-[300px] md:h-[350px]"
        style={{
          border: "1px dashed var(--dotted-border)",
          backgroundColor: "var(--surface)",
        }}
      >
        {/* Video / Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay muted loop playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-top"
          >
            <source src="/1.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)", opacity: 0.3 }}
          />
        </div>


      </motion.div>

      {/* Intro text below hero card */}
      <div className="mt-10 text-left px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              Hi, I&apos;m{" "}
              <span style={{ color: "var(--foreground)" }}>Pranay</span>{" "}
              <span style={{ color: "var(--muted)" }}>&mdash;</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium shrink-0"
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

          <div
            className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 text-base font-medium"
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
          className="mt-2 text-sm sm:text-base leading-relaxed max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          They call me{" "}
          <span className="inline-highlight">PP</span>.
          {" "}I build full-stack apps keeping the frontends clean and the backends solid. Just building, learning, and shipping.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 text-sm sm:text-lg leading-loose max-w-2xl"
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
          me, I don&apos;t bite.{" "}
          <a href="https://github.com/Pranay-Prat" target="_blank" rel="noopener noreferrer" className="inline-tag ml-1">GitHub</a>
          {" , "}
          <a href="https://www.linkedin.com/in/pranay-pratap15" target="_blank" rel="noopener noreferrer" className="inline-tag">LinkedIn</a>
          {" , "}
          <a href="https://drive.google.com/file/d/13DNTrv1eXAwGfouyVggtAApioSnW7iIK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-tag">Resume</a>
          {" "} all yours, no strings attached.
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
