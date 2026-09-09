import type { Metadata } from "next";
import { Nunito, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "santuy — humor-based mental-health first-aid",
  description:
    "Stigma-free first-aid kit: triage, breathing, memes, micro-step + helpline. Peer-style first aid, not therapy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
