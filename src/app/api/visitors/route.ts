import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const COUNTER_FILE = path.join(process.cwd(), "visitor-count.json");

async function getCount(): Promise<number> {
  try {
    const data = await fs.readFile(COUNTER_FILE, "utf-8");
    const json = JSON.parse(data);
    return json.count || 0;
  } catch {
    return 0;
  }
}

async function setCount(count: number): Promise<void> {
  await fs.writeFile(COUNTER_FILE, JSON.stringify({ count }), "utf-8");
}

export async function GET() {
  const count = await getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const current = await getCount();
  const next = current + 1;
  await setCount(next);
  return NextResponse.json({ count: next });
}
