import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { validateEnv } from "@/lib/env";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SERVICES = [
  "Digital Marketing Services",
  "Web Development",
  "Digital Marketing Course",
  "Java Course",
  "Other",
] as const;

export async function POST(req: Request) {
  try {
    validateEnv();

    const ip = getClientIp(req);
    const limit = rateLimit(`contact:${ip}`, 5, 15 * 60 * 1000);

    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(limit.retryAfterSeconds) },
        }
      );
    }

    const body = await req.json();

    // Honeypot — bots fill hidden fields
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = body.phone ? String(body.phone).trim() : null;
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!ALLOWED_SERVICES.includes(service as (typeof ALLOWED_SERVICES)[number])) {
      return NextResponse.json({ error: "Invalid service selection" }, { status: 400 });
    }

    if (
      name.length > 100 ||
      email.length > 100 ||
      (phone && phone.length > 20) ||
      message.length > 2000
    ) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    await prisma.contact.create({
      data: { name, email, phone, service, message },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
