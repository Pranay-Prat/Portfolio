"use client";

import { useState, useEffect, useRef } from "react";
import GithubIcon from "./ui/github-icon";
import LinkedinIcon from "./ui/linkedin-icon";
import TwitterXIcon from "./ui/twitter-x-icon";
import MailFilledIcon from "./ui/mail-filled-icon";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Pranay-Prat",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pranay-pratap15",
    Icon: LinkedinIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/PranayPrat",
    Icon: TwitterXIcon,
  },
  {
    label: "Email",
    href: "mailto:pranay.pratap15@gmail.com",
    Icon: MailFilledIcon,
  },
];

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState("");
  const hasFired = useRef(false);

  useEffect(() => {
    // Guard against React Strict Mode double-firing in dev
    if (hasFired.current) return;
    hasFired.current = true;

    // Check if already counted this session
    const counted = sessionStorage.getItem("visitor-counted");

    if (!counted) {
      // First visit this session — increment
      fetch("/api/visitors", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setVisitorCount(data.count);
          sessionStorage.setItem("visitor-counted", "true");
        })
        .catch(() => setVisitorCount(0));
    } else {
      // Already counted — just get current
      fetch("/api/visitors")
        .then((res) => res.json())
        .then((data) => setVisitorCount(data.count))
        .catch(() => setVisitorCount(0));
    }

    // Live clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-10 sm:py-14">
      <div
        style={{
          height: "1px",
          borderBottom: "1px dashed var(--dotted-border)",
          marginBottom: "2rem",
        }}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 icon-btn"
              style={{
                color: "var(--muted)",
                border: "1px dashed var(--dotted-border)",
                transition: "all 0.2s ease",
              }}
              aria-label={link.label}
            >
              <link.Icon size={18} color="currentColor" strokeWidth={2} />
            </a>
          ))}
        </div>

        {/* Visitors + Location */}
        <div className="flex flex-col items-end gap-1">
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            Visitors{" "}
            <span style={{ color: "var(--foreground)", fontWeight: 600 }}>
              #{visitorCount !== null ? visitorCount.toLocaleString() : "..."}
            </span>
          </span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            Haridwar, {currentTime || "..."}
          </span>
        </div>
      </div>
    </footer>
  );
}
