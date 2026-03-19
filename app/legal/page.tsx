import type { Metadata } from "next";
import LegalContent from "./LegalContent";

export const metadata: Metadata = {
  title: "Legal | FortuneKraft Consultancy",
  description:
    "Legal policies, terms of service, and SEBI compliance information for FortuneKraft Consultancy.",
};

export default function LegalPage(): JSX.Element {
  return <LegalContent />;
}
