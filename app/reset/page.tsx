"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo } from "react";

import {
  EMOTION_META,
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
    <main className="santuy-shell">
      <div className="santuy-frame">
        <section className="santuy-hero santuy-hero--dawn">
          <div className="santuy-hero__top">
            <div>
              <p className="santuy-kicker">SANTUY</p>
              <h1 className="santuy-title">One small step still counts.</h1>
              <p className="santuy-subtitle">
                You checked in with <strong>{meta.title}</strong>. Here’s one
                tiny step to help you reset.
              </p>
            </div>

            <div className="santuy-progress">
              <span className="santuy-progress__dot santuy-progress__dot--done" />
              <span className="santuy-progress__dot santuy-progress__dot--done" />
              <span className="santuy-progress__dot santuy-progress__dot--active" />
            </div>
          </div>

          <div className="santuy-tip">
            <span className="santuy-tip__label">Quest 3</span>
            <p>Progress, not perfection.</p>
          </div>
        </section>

        <section className="santuy-panel">
          <div className="microstep-card">
            <p className="microstep-card__label">Your micro-step</p>
            <p className="microstep-card__text">{microStep}</p>
          </div>

          <div className="santuy-message">
            <h2 className="santuy-message__title">That is enough for now.</h2>
            <p className="santuy-message__body">
              Small steps still move you forward, even if the day feels messy.
            </p>
          </div>

          <div className="santuy-actions">
            <Link href={ROUTES.triage} className="pixel-btn pixel-btn--secondary">
              Check in again
            </Link>

            <Link href={ROUTES.landing} className="pixel-btn pixel-btn--primary">
              Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function ResetPage() {
  return (
    <Suspense
      fallback={
        <main className="santuy-shell">
          <div className="santuy-frame">
            <section className="santuy-panel">
              <p>Loading your reset...</p>
            </section>
          </div>
        </main>
      }
    >
      <ResetContent />
    </Suspense>
  );
}