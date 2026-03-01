import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Simple in-memory cache (works per serverless instance roughly, but better than nothing)
const ipCache = new Map<string, number>();
const DEDUP_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP.trim();
  
  return "127.0.0.1";
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIP(request);
    const hashedIP = hashIP(ip);
    const now = Date.now();
    const lastVisit = ipCache.get(hashedIP);

    let isNewVisit = true;
    if (lastVisit && (now - lastVisit < DEDUP_WINDOW_MS)) {
      isNewVisit = false;
    }

    // Clean up old entries occasionally to prevent memory leaks in long-lived instances
    if (ipCache.size > 1000) {
      for (const [key, timestamp] of Array.from(ipCache.entries())) {
        if (now - timestamp > DEDUP_WINDOW_MS) {
          ipCache.delete(key);
        }
      }
    }

    if (isNewVisit) {
      // Record visit and increment
      ipCache.set(hashedIP, now);
      const res = await fetch(
        "https://api.counterapi.dev/v1/pranay-prat-portfolio/visits/up",
        { cache: "no-store", method: "GET" } 
      );
      const data = await res.json();
      return NextResponse.json({ count: data.count || 0 });
    } else {
      // Just fetch the current count without incrementing
      const res = await fetch(
        "https://api.counterapi.dev/v1/pranay-prat-portfolio/visits",
        { cache: "no-store", method: "GET" } 
      );
      const data = await res.json();
      return NextResponse.json({ count: data.count || 0 });
    }

  } catch {
    return NextResponse.json({ count: 0 });
  }
}
