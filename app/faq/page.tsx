import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Italy Aerials",
  description:
    "Frequently asked questions about our aerial drone cinematography services in Italy. ENAC licensed operators, FPV specialists, permits, pricing and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FaqClient />;
}
