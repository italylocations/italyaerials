import { Resend } from "resend";

export const EMAIL_FROM =
  process.env.EMAIL_FROM ?? "fly@italyaerials.com";
export const EMAIL_TO = process.env.EMAIL_TO ?? "fly@italyaerials.com";

let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    client = new Resend(apiKey);
  }
  return client;
}

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const subject = `New brief — ${payload.name}${
    payload.company ? ` (${payload.company})` : ""
  }`;

  const html = `
    <h2>New project brief</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    ${
      payload.company
        ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>`
        : ""
    }
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
  `;

  return getResend().emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: payload.email,
    subject,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
