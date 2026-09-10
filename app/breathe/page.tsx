"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { EMOTION_META, isEmotion, ROUTES } from "@/lib/content";

type PhaseName = "inhale" | "hold" | "exhale";

interface Phase {
  name: PhaseName;
  label: string;
  duration: number;
}

const PHASES: Phase[] = [
  {
    name: "inhale",
    label: "Breathe in",
    duration: 4,
  },
  {
    name: "hold",
    label: "Hold",
    duration: 7,
  },
  {
    name: "exhale",
    label: "Breathe out",
    duration: 8,
  },
];

export default function BreathePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emotionParam = searchParams.get("emotion");

  const emotion = useMemo(() => {
    return isEmotion(emotionParam) ? emotionParam : null;
  }, [emotionParam]);

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(PHASES[0].duration);
  const [cycleComplete, setCycleComplete] = useState(false);

  useEffect(() => {
    if (!emotion) {
      router.replace(ROUTES.triage);
    }
  }, [emotion, router]);

  useEffect(() => {
    if (!emotion || cycleComplete) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current > 1) {
          return current - 1;
        }

        const isLastPhase = phaseIndex === PHASES.length - 1;

        if (isLastPhase) {
          setCycleComplete(true);
          return 0;
        }

        const nextPhaseIndex = phaseIndex + 1;
        setPhaseIndex(nextPhaseIndex);

        return PHASES[nextPhaseIndex].duration;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [emotion, phaseIndex, cycleComplete]);

  if (!emotion) {
    return null;
  }

  const phase = PHASES[phaseIndex];
  const meta = EMOTION_META[emotion];
  const memeRoute = ROUTES.memes(emotion);

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-8 text-center">
        <div className="w-full space-y-3 text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            One moment first
          </p>

          <h1>Slow things down for a second.</h1>

          <p>
            You picked{" "}
            <span className="font-semibold">{meta.title}</span>. No need to fix
            everything right now.
          </p>
        </div>

        <section
          className="flex w-full flex-col items-center gap-8 rounded-[var(--radius-card)] bg-[var(--white)] p-6"
          aria-live="polite"
          aria-label="Guided breathing exercise"
        >
          <div className="relative flex h-64 w-64 items-center justify-center">
            <div
              key={phase.name}
              className={`breathing-circle breathing-${phase.name}`}
              aria-hidden="true"
            />

            <div className="absolute z-10 flex flex-col items-center">
              <p className="text-xl font-semibold">{phase.label}</p>

              <p className="mt-2 text-6xl font-bold tabular-nums">
                {secondsLeft}
              </p>

              <p className="mt-2 text-sm">
                {phase.duration} second phase
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-sm justify-between gap-2 text-sm">
            {PHASES.map((item, index) => (
              <span
                key={item.name}
                className={`rounded-[var(--radius-pill)] px-3 py-2 ${
                  index === phaseIndex && !cycleComplete
                    ? "bg-[var(--blue)] font-semibold text-[var(--white)]"
                    : "bg-[var(--paper)]"
                }`}
              >
                {item.label} {item.duration}s
              </span>
            ))}
          </div>

          {cycleComplete ? (
            <div className="space-y-2">
              <h2>Nice. One cycle done.</h2>
              <p>
                You do not have to feel completely better. A little steadier is
                enough.
              </p>
            </div>
          ) : (
            <p className="max-w-md">
              Follow the words and the timer. The circle is only a visual cue.
            </p>
          )}
        </section>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Link
            href={memeRoute}
            className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] border-2 border-[var(--blue)] px-5 py-3 font-semibold no-underline"
          >
            Skip
          </Link>

          {cycleComplete && (
            <Link
              href={memeRoute}
              className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--orange)] px-5 py-3 font-semibold text-[var(--ink)] no-underline"
            >
              Continue
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}