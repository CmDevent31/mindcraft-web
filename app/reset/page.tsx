"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";

import {
  DISCLAIMER,
  EMOTION_META,
  HELPLINES,
  isEmotion,
  MICRO_STEPS_BY_EMOTION,
  ROUTES,
} from "@/lib/content";

function ResetContent() {
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
        {/* Header */}
        <section className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            Quest 3 · Reset
          </p>

          <h1>One small step still counts.</h1>

          <p className="max-w-xl leading-relaxed">
            You checked in with{" "}
            <span className="font-semibold">{meta.title}</span>. You do not
            have to solve everything at once. Here is one tiny thing you can do
            next.
          </p>
        </section>

        {/* Micro-step */}
        <section className="rounded-[var(--radius-card)] border-2 border-[var(--yellow-dark)] bg-[var(--yellow-light)] p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--yellow-dark)]">
            Your micro-step
          </p>

          <p className="mt-4 text-2xl font-bold leading-relaxed">
            {microStep}
          </p>
        </section>

        {/* Support message */}
        <section className="rounded-[var(--radius-card)] bg-[var(--white)] p-6">
          <h2 className="text-xl font-bold">That is enough for now.</h2>

          <p className="mt-2 leading-relaxed">
            Small steps still move you forward, even when the day feels messy.
            You do not need to earn rest or fix everything tonight.
          </p>
        </section>

        {/* Helplines */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold">
              Need a little more support?
            </h2>

            <p className="mt-2 leading-relaxed">
              These support lines are here if things feel heavier than a rough
              afternoon.
            </p>
          </div>

          <div className="grid gap-3">
            {HELPLINES.map((helpline) => (
              <a
                key={helpline.name}
                href={helpline.href}
                target={
                  helpline.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  helpline.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                className="flex min-h-11 flex-col justify-center rounded-[var(--radius-card)] border-2 border-[var(--blue)] bg-[var(--white)] p-5 no-underline transition-transform hover:-translate-y-0.5"
              >
                <span className="font-bold text-[var(--blue-dark)]">
                  {helpline.name}
                </span>

                <span className="mt-1 font-semibold text-[var(--ink)]">
                  {helpline.number}
                </span>

                <span className="mt-1 text-sm leading-relaxed text-[var(--ink)]">
                  {helpline.note}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="rounded-[var(--radius-card)] border border-[var(--blue-light)] bg-[var(--white)] p-5">
          <p className="m-0 text-sm leading-relaxed">
            {DISCLAIMER}
          </p>
        </section>

        {/* Actions */}
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

export default function ResetPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)]">
          <div className="mx-auto w-full max-w-[760px]">
            <p>Loading your reset...</p>
          </div>
        </main>
      }
    >
      <ResetContent />
    </Suspense>
  );
}