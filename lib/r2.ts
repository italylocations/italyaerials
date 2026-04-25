import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const accessKeyId = process.env.R2_ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY ?? "";
const endpoint = process.env.R2_ENDPOINT ?? "";

export const R2_BUCKET = process.env.R2_BUCKET ?? "italyaerials";
export const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "";

export const r2Client = new S3Client({
  region: "auto",
  endpoint,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function uploadToR2(
  key: string,
  body: Buffer | Uint8Array | string,
  contentType?: string
) {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
    ContentType: contentType,
  });
  return r2Client.send(command);
}

export async function getFromR2(key: string) {
  const command = new GetObjectCommand({ Bucket: R2_BUCKET, Key: key });
  return r2Client.send(command);
}

export function r2PublicUrl(key: string) {
  return `${R2_PUBLIC_URL.replace(/\/$/, "")}/${key.replace(/^\//, "")}`;
}
