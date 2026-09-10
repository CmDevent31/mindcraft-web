"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

import { EMOTION_META, isEmotion, ROUTES } from "@/lib/content";

type PhaseName = "inhale" | "hold" | "exhale";

interface Phase {
  name: PhaseName;
  label: string;
  duration: number;
  helper: string;
}

const PHASES: Phase[] = [
  {
    name: "inhale",
    label: "Breathe in",
    duration: 4,
    helper: "Gently fill your lungs.",
  },
  {
    name: "hold",
    label: "Hold",
    duration: 7,
    helper: "Let the calm settle for a second.",
  },
  {
    name: "exhale",
    label: "Breathe out",
    duration: 8,
    helper: "Release the tension slowly.",
  },
];

function BreatheContent() {
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

    return () => {
      window.clearInterval(timer);
    };
  }, [emotion, phaseIndex, cycleComplete]);

  if (!emotion) {
    return null;
  }

  const phase = PHASES[phaseIndex];
  const meta = EMOTION_META[emotion];
  const memeRoute = ROUTES.memes(emotion);

  return (
    <main className="santuy-shell">
      <div className="santuy-frame">
        <section className="santuy-hero santuy-hero--night">
          <div className="santuy-hero__top">
            <div>
              <p className="santuy-kicker">SANTUY</p>
              <h1 className="santuy-title">Take one calm breath at a time.</h1>
              <p className="santuy-subtitle">
                You checked in with <strong>{meta.title}</strong>. You do not
                have to solve everything right now.
              </p>
            </div>

            <div className="santuy-progress">
              <span className="santuy-progress__dot santuy-progress__dot--done" />
              <span className="santuy-progress__dot santuy-progress__dot--active" />
              <span className="santuy-progress__dot" />
            </div>
          </div>

          <div className="santuy-tip">
            <span className="santuy-tip__label">Quest 2</span>
            <p>Follow the words and timer. The motion is just a visual guide.</p>
          </div>
        </section>

        <section
          className="santuy-panel santuy-panel--breathing"
          aria-live="polite"
          aria-label="Guided breathing exercise"
        >
          <div className="breathing-stage">
            <div
              key={phase.name}
              className={`breathing-circle breathing-${phase.name}`}
              aria-hidden="true"
            />

            <div className="breathing-stage__content">
              <p className="breathing-stage__phase">{phase.label}</p>
              <p className="breathing-stage__count">{secondsLeft}</p>
              <p className="breathing-stage__helper">{phase.helper}</p>
            </div>
          </div>

          <div className="breathing-legend">
            {PHASES.map((item, index) => (
              <span
                key={item.name}
                className={`breathing-legend__chip ${
                  index === phaseIndex && !cycleComplete
                    ? "breathing-legend__chip--active"
                    : ""
                }`}
              >
                {item.label} {item.duration}s
              </span>
            ))}
          </div>

          {cycleComplete ? (
            <div className="santuy-message">
              <h2 className="santuy-message__title">Nice. One cycle done.</h2>
              <p className="santuy-message__body">
                You do not need to feel perfect. A little steadier is already a
                win.
              </p>
            </div>
          ) : (
            <div className="santuy-message">
              <h2 className="santuy-message__title">Stay with the rhythm.</h2>
              <p className="santuy-message__body">
                Inhale for 4, hold for 7, exhale for 8.
              </p>
            </div>
          )}

          <div className="santuy-actions">
            <Link href={memeRoute} className="pixel-btn pixel-btn--secondary">
              Skip for now
            </Link>

            {cycleComplete && (
              <Link href={memeRoute} className="pixel-btn pixel-btn--primary">
                Continue
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default function BreathePage() {
  return (
    <Suspense
      fallback={
        <main className="santuy-shell">
          <div className="santuy-frame">
            <section className="santuy-panel">
              <p>Loading breathing exercise...</p>
            </section>
          </div>
        </main>
      }
    >
      <BreatheContent />
    </Suspense>
  );
}