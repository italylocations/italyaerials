import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/resend";

export async function POST(request: Request) {
  let payload: ContactPayload;

  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    payload = (await request.json()) as ContactPayload;
  } else {
    const form = await request.formData();
    payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      message: String(form.get("message") ?? ""),
    };
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
