import nodemailer, { type Transporter } from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  location?: string;
  shootingDate?: string;
  message: string;
};

export const EMAIL_FROM =
  process.env.EMAIL_FROM ?? "fly@italyaerials.com";
export const EMAIL_TO = process.env.EMAIL_TO ?? "fly@italyaerials.com";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER and SMTP_PASS must be configured.");
  }

  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: { user, pass },
  });
  return transporter;
}

export async function sendContactEmail(payload: ContactPayload) {
  const subject = `New project brief — ${
    payload.projectType || "Untyped"
  } — ${payload.name}`;

  return getTransporter().sendMail({
    from: `Italy Aerials <${EMAIL_FROM}>`,
    to: EMAIL_TO,
    replyTo: payload.email,
    subject,
    html: renderHtml(payload),
    text: renderText(payload),
  });
}

function renderHtml(p: ContactPayload) {
  const row = (label: string, value?: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;border-bottom:1px solid #1a3050;color:#7aa3cc;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;width:160px;vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #1a3050;color:#e8f4ff;font-size:14px;vertical-align:top;">${escapeHtml(
            value
          )}</td>
        </tr>`
      : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a1828;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a1828;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0d1f35;border:1px solid #1a3050;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #1a3050;">
                <p style="margin:0;color:#4a9eff;font-size:11px;text-transform:uppercase;letter-spacing:3px;">New Brief</p>
                <h1 style="margin:8px 0 0;color:#e8f4ff;font-size:22px;font-weight:500;">Project enquiry from ${escapeHtml(
                  p.name
                )}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 16px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", p.name)}
                  ${row("Email", p.email)}
                  ${row("Company", p.company)}
                  ${row("Project Type", p.projectType)}
                  ${row("Location", p.location)}
                  ${row("Shooting Date", p.shootingDate)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;">
                <p style="margin:0 0 8px;color:#7aa3cc;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
                <div style="color:#e8f4ff;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
                  p.message
                ).replace(/\n/g, "<br/>")}</div>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;color:#3a5a7a;font-size:11px;">italyaerials.com · Reply directly to this email to respond.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderText(p: ContactPayload) {
  const lines = [
    `New project brief`,
    ``,
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    p.company ? `Company: ${p.company}` : null,
    p.projectType ? `Project Type: ${p.projectType}` : null,
    p.location ? `Location: ${p.location}` : null,
    p.shootingDate ? `Shooting Date: ${p.shootingDate}` : null,
    ``,
    `Message:`,
    p.message,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
