import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://italyaerials.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/services", "/portfolio", "/about", "/faq", "/contact"];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
