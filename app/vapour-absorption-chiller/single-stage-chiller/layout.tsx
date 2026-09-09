import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Stage Vapour Absorption Chillers | BROAD India",
  description: "Efficient single-stage Vapour absorption chillers for industrial applications requiring reliable low-grade heat recovery cooling.",
};

export default function SingleStageChillerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
