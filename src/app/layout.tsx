import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pranay",
    template: "%s | Pranay",
  },
  description:
    "Frontend developer crafting smooth interfaces, powering them with logic, and deploying like a reflex.",
  keywords: [
    "portfolio",
    "developer",
    "frontend",
    "backend",
    "fullstack",
    "react",
    "nextjs",
  ],
  authors: [{ name: "Pranay" }],
  openGraph: {
    title: "Pranay | Portfolio",
    description:
      "Frontend developer crafting smooth interfaces, powering them with logic, and deploying like a reflex.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
