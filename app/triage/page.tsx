import Link from "next/link";
import { EMOTIONS, EMOTION_META, ROUTES } from "@/lib/content";

export default function TriagePage() {
  return (
    <main className="santuy-shell">
      <div className="santuy-frame">
        <section className="santuy-hero santuy-hero--sunset">
          <div className="santuy-hero__top">
            <div>
              <p className="santuy-kicker">SANTUY</p>
              <h1 className="santuy-title">How’s your world feeling today?</h1>
              <p className="santuy-subtitle">
                Pick the block that feels closest to your current headspace.
                No pressure — just one honest check-in.
              </p>
            </div>

            <div className="santuy-progress">
              <span className="santuy-progress__dot santuy-progress__dot--active" />
              <span className="santuy-progress__dot" />
              <span className="santuy-progress__dot" />
            </div>
          </div>

          <div className="santuy-tip">
            <span className="santuy-tip__label">Quest 1</span>
            <p>Choose one feeling. We’ll take it one block at a time.</p>
          </div>
        </section>

        <section className="santuy-panel">
          <div className="emotion-grid">
            {EMOTIONS.map((emotion, index) => {
              const meta = EMOTION_META[emotion];

              const blockClass =
                index === 0
                  ? "emotion-card__icon emotion-card__icon--grass"
                  : index === 1
                    ? "emotion-card__icon emotion-card__icon--water"
                    : "emotion-card__icon emotion-card__icon--amethyst";

              return (
                <Link
                  key={emotion}
                  href={`${ROUTES.breathe}?emotion=${emotion}`}
                  className="emotion-card"
                >
                  <div className={blockClass} aria-hidden="true">
                    <span className="emotion-card__face">: )</span>
                  </div>

                  <div className="emotion-card__content">
                    <h2 className="emotion-card__title">{meta.title}</h2>
                    <p className="emotion-card__tagline">{meta.tagline}</p>
                  </div>

                  <div className="emotion-card__cta">
                    <span>Choose this</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}