import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/mailer";

type IncomingPayload = ContactPayload & { website?: string };

export async function POST(request: Request) {
  let payload: IncomingPayload;

  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    payload = (await request.json()) as IncomingPayload;
  } else {
    const form = await request.formData();
    payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      projectType: String(form.get("projectType") ?? ""),
      location: String(form.get("location") ?? ""),
      shootingDate: String(form.get("shootingDate") ?? ""),
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    };
  }

  if (payload.website) {
    return NextResponse.json({ success: true });
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }

  try {
    const { website: _hp, ...clean } = payload;
    void _hp;
    await sendContactEmail(clean);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] send failed:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
