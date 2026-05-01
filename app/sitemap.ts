import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://italyaerials.com";

type RouteEntry = {
  path: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

const ROUTES: RouteEntry[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "yearly", priority: 0.7 },
  { path: "/portfolio", changeFrequency: "yearly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/faq", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
