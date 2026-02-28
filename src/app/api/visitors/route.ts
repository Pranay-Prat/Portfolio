import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

const COUNTER_FILE = path.join(process.cwd(), "visitor-count.json");
const DEDUP_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

interface VisitorData {
  count: number;
  visitors: Record<string, number>; // hashedIP -> last visit timestamp
}

async function getData(): Promise<VisitorData> {
  try {
    const raw = await fs.readFile(COUNTER_FILE, "utf-8");
    const json = JSON.parse(raw);
    return {
      count: json.count || 0,
      visitors: json.visitors || {},
    };
  } catch {
    return { count: 0, visitors: {} };
  }
}

async function setData(data: VisitorData): Promise<void> {
  await fs.writeFile(COUNTER_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }
  // Fallback for local development
  return "127.0.0.1";
}

export async function GET() {
  const data = await getData();
  return NextResponse.json({ count: data.count });
}

export async function POST(request: NextRequest) {
  const data = await getData();
  const ip = getClientIP(request);
  const hashedIP = hashIP(ip);
  const now = Date.now();

  const lastVisit = data.visitors[hashedIP];

  // Only count if this IP hasn't visited in the last 24 hours
  if (!lastVisit || now - lastVisit > DEDUP_WINDOW_MS) {
    data.count += 1;
  }

  // Always update the timestamp for this visitor
  data.visitors[hashedIP] = now;

  // Clean up old entries (older than 24 hours) to keep the file small
  for (const [key, timestamp] of Object.entries(data.visitors)) {
    if (now - timestamp > DEDUP_WINDOW_MS) {
      delete data.visitors[key];
    }
  }

  await setData(data);
  return NextResponse.json({ count: data.count });
}
