"use client";

import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  Suspense,
  useEffect,
  useMemo,
} from "react";

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
    return isEmotion(emotionParam)
      ? emotionParam
      : null;
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
  const microStep =
    MICRO_STEPS_BY_EMOTION[emotion];

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            One tiny reset
          </p>

          <h1>
            You do not have to solve everything
            tonight.
          </h1>

          <p className="max-w-xl">
            You checked in with{" "}
            <span className="font-semibold">
              {meta.title}
            </span>
            . Here is one small thing you can do
            next.
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

        <section className="rounded-[var(--radius-card)] bg-[var(--white)] p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            If you want to talk to someone
          </p>

          <ul className="mt-4 flex flex-col gap-3">
            {HELPLINES.map((line) => (
                <li key={line.name}>
                
                <a href={line.href}
                className="flex min-h-11 flex-col justify-center rounded-[var(--radius-card)] bg-[var(--paper)] px-5 py-4 no-underline">
                  <span className="font-semibold text-[var(--ink)]">
                    {line.name}
                  </span>
                  <span className="font-bold text-[var(--blue-dark)]">
                    {line.number}
                  </span>
                  <span className="mt-1 text-sm text-[var(--ink)]">
                    {line.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Task 3.2: global button system adoption — Secondary for the
              quiet alternative, Primary for the main path forward. `flex-1`
              kept for layout; all visual styling comes from `.btn`. */}
          <Link
            href={ROUTES.triage}
            className="btn btn-secondary flex-1"
          >
            Check in again
          </Link>

          <Link
            href={ROUTES.landing}
            className="btn btn-primary flex-1"
          >
            Back home
          </Link>
        </div>
        <p className="text-sm leading-relaxed text-[var(--ink)]">
          {DISCLAIMER}
        </p>
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