import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Update this with your actual production URL after deployment
  metadataBase: new URL("https://www.pranaypratap.dev/"),
  title: {
    default: "Pranay",
    template: "%s | Pranay",
  },
  description:
    "Fullstack developer crafting smooth interfaces and powering them with logic.",
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
      "Fullstack developer crafting smooth interfaces and powering them with logic.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pranay - Full-Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay | Portfolio",
    description:
      "Fullstack developer crafting smooth interfaces and powering them with logic.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${satoshi.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
