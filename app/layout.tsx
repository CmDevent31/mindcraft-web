import type { Metadata } from "next";
import { Nunito, Onest } from "next/font/google";
import { Suspense } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TabBar from "@/components/TabBar";
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
      <body className="min-h-full flex flex-col">
        {/* App shell (task 2.2): bottom padding clears the fixed mobile
            tab bar; client shell pieces read the URL so they suspend. */}
        <div className="flex min-h-dvh flex-col bg-paper pb-[calc(var(--sp-8)+var(--sp-5))] text-ink md:pb-0">
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
          <Suspense fallback={null}>
            <TabBar />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
