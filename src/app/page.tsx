import { InstitutionalHome } from "@/components/institutional/InstitutionalHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <InstitutionalHome />;
}
