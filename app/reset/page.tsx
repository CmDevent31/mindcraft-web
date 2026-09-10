"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import {
  EMOTION_META,
  isEmotion,
  MICRO_STEPS_BY_EMOTION,
  ROUTES,
} from "@/lib/content";

export default function ResetPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emotionParam = searchParams.get("emotion");

  const emotion = useMemo(() => {
    return isEmotion(emotionParam) ? emotionParam : null;
  }, [emotionParam]);

  useEffect(() => {
    if (!emotion) {
      router.replace(ROUTES.triage);
    }
  }, [emotion, router]);

  if (!emotion) {
    return null;
  }

  const meta = EMOTION_META[emotion];
  const microStep = MICRO_STEPS_BY_EMOTION[emotion];

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            One tiny reset
          </p>

          <h1>You do not have to solve everything tonight.</h1>

          <p className="max-w-xl">
            You checked in with{" "}
            <span className="font-semibold">{meta.title}</span>. Here is one
            small thing you can do next.
          </p>
        </div>

        <section className="rounded-[var(--radius-card)] bg-[var(--white)] p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            Your micro-step
          </p>

          <p className="mt-4 text-2xl font-bold leading-relaxed">
            {microStep}
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={ROUTES.triage}
            className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] border-2 border-[var(--blue)] px-5 py-3 font-semibold no-underline"
          >
            Check in again
          </Link>

          <Link
            href={ROUTES.landing}
            className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--orange)] px-5 py-3 font-semibold text-[var(--ink)] no-underline"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}