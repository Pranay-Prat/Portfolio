"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => nameInputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      onClose();
    }, 2500);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "var(--overlay-bg)", backdropFilter: "blur(8px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-lg relative overflow-hidden"
            style={{
              backgroundColor: "var(--background)",
              border: "1px dashed var(--dotted-border)",
            }}
          >
            {/* Terminal-style header bar */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px dashed var(--dotted-border)" }}
            >
              <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer"
                    aria-label="Close"
                  />
                <span
                  className="text-xs ml-3 font-mono"
                  style={{ color: "var(--muted)" }}
                >
                  ~/contact
                </span>
              </div>
              <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                {getCurrentTime()}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="mb-4"
                  >
                    <span className="text-4xl">✓</span>
                  </motion.div>
                  <p
                    className="text-base font-mono"
                    style={{ color: "var(--foreground)" }}
                  >
                    Message delivered.
                  </p>
                  <p
                    className="text-sm mt-2 font-mono"
                    style={{ color: "var(--muted)" }}
                  >
                    I&apos;ll respond within 24h.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h2
                      className="text-2xl font-normal mb-1"
                      style={{
                        color: "var(--foreground)",
                        fontFamily: "var(--font-instrument-serif), serif",
                      }}
                    >
                      Let&apos;s talk.
                    </h2>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      Drop a message — I read every one.
                    </p>
                  </div>

                  {/* Quick contact links */}
                  <div
                    className="flex items-center gap-3 mb-6 pb-6"
                    style={{ borderBottom: "1px dashed var(--dotted-border)" }}
                  >
                    <a
                      href="mailto:pranay.pratap15@gmail.com"
                      className="inline-tag text-xs"
                      style={{ textDecoration: "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Email
                    </a>
                    <a
                      href="https://x.com/PranayPrat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-tag text-xs"
                      style={{ textDecoration: "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      DM
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pranay-pratap15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-tag text-xs"
                      style={{ textDecoration: "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name & Email side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-medium mb-2 font-mono"
                          style={{
                            color: activeField === "name" ? "var(--foreground)" : "var(--muted)",
                            transition: "color 0.2s",
                          }}
                        >
                          <span style={{ color: "var(--accent)" }}>→</span> name
                        </label>
                        <input
                          ref={nameInputRef}
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Pranay"
                          value={formData.name}
                          onFocus={() => setActiveField("name")}
                          onBlur={() => setActiveField(null)}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm outline-none transition-all duration-200"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px dashed var(--dotted-border)",
                            borderColor: activeField === "name" ? "var(--muted)" : undefined,
                            color: "var(--foreground)",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-medium mb-2 font-mono"
                          style={{
                            color: activeField === "email" ? "var(--foreground)" : "var(--muted)",
                            transition: "color 0.2s",
                          }}
                        >
                          <span style={{ color: "var(--accent)" }}>→</span> email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onFocus={() => setActiveField("email")}
                          onBlur={() => setActiveField(null)}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-3 py-2.5 text-sm outline-none transition-all duration-200"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px dashed var(--dotted-border)",
                            borderColor: activeField === "email" ? "var(--muted)" : undefined,
                            color: "var(--foreground)",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium mb-2 font-mono"
                        style={{
                          color: activeField === "message" ? "var(--foreground)" : "var(--muted)",
                          transition: "color 0.2s",
                        }}
                      >
                        <span style={{ color: "var(--accent)" }}>→</span> message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tell me what you're building..."
                        value={formData.message}
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3 py-2.5 text-sm outline-none transition-all duration-200 resize-none"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px dashed var(--dotted-border)",
                          borderColor: activeField === "message" ? "var(--muted)" : undefined,
                          color: "var(--foreground)",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                        esc to close
                      </span>
                      <motion.button
                        type="submit"
                        className="px-6 py-2.5 text-sm font-medium cursor-pointer"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px dashed var(--dotted-border)",
                          color: "var(--foreground)",
                          transition: "all 0.2s ease",
                        }}
                        whileHover={{
                          borderColor: "var(--foreground)",
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Send →
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
