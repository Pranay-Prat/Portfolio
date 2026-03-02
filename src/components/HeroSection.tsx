"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-10 pb-8 sm:pt-2">
      {/* Mobile Avatar replacing video playback */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex sm:hidden justify-center mb-2"
      >
        <div
          className="w-28 h-28 rounded-full overflow-hidden"
          style={{
            border: "1px dashed var(--dotted-border)",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={112}
            height={112}
            className="object-cover w-full h-full"
            priority
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
          {" "}
          <a href="https://www.linkedin.com/in/pranay-pratap15" target="_blank" rel="noopener noreferrer" className="inline-tag">LinkedIn</a>
          {" "}
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
