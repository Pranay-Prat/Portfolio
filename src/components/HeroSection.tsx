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
          minHeight: "300px",
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
          className="relative z-10 flex items-end justify-end p-6 sm:p-8"
          style={{ minHeight: "300px" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
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
          </motion.div>
        </div>
      </motion.div>

      {/* Intro text below hero card */}
      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--foreground)" }}>Pranay</span>
          </h1>

          <div
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 text-sm font-medium"
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
          I craft smooth interfaces, power them with logic, and deploy like a
          reflex. Available for freelance or full-time roles.
        </motion.p>

        {/* Social links — dotted buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mt-6"
        >
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Resume", href: "#" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dotted"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
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
