import React from "react";

export default function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* 4 Corner Dots */}
      <span
        className="absolute -top-[2px] -left-[2px] w-[4px] h-[4px] rounded-sm z-10"
        style={{ backgroundColor: "var(--muted)" }}
      />
      <span
        className="absolute -top-[2px] -right-[2px] w-[4px] h-[4px] rounded-sm z-10"
        style={{ backgroundColor: "var(--muted)" }}
      />
      <span
        className="absolute -bottom-[2px] -left-[2px] w-[4px] h-[4px] rounded-sm z-10"
        style={{ backgroundColor: "var(--muted)" }}
      />
      <span
        className="absolute -bottom-[2px] -right-[2px] w-[4px] h-[4px] rounded-sm z-10"
        style={{ backgroundColor: "var(--muted)" }}
      />

      <h2
        className="text-base sm:text-lg font-semibold px-2 py-1"
        style={{
          border: "1px dashed var(--dotted-border)",
          color: "var(--foreground)",
          backgroundColor: "var(--tag-bg)",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
