import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Italy Aerials",
  description:
    "Aerial cinematography work across Italy — institutional, commercial, automotive, landscape and events. ENAC licensed drone operators.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
