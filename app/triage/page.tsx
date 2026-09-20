import Link from "next/link";

import {
  EMOTIONS,
  EMOTION_META,
  ROUTES,
} from "@/lib/content";

import styles from "./triage.module.css";

const EMOTION_VISUALS = {
  "executive-dysfunction": {
    symbol: "☁",
    blockClass: styles.blockStone,
  },

  "social-hangxiety": {
    symbol: "♥",
    blockClass: styles.blockRose,
  },

  "academic-imposter": {
    symbol: "✦",
    blockClass: styles.blockIce,
  },
} as const;

export default function TriagePage() {
  return (
    <main className={styles.world}>
      <div className={styles.stars} aria-hidden="true" />

      <div
        className={`${styles.cloud} ${styles.cloudOne}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.cloud} ${styles.cloudTwo}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.mountain} ${styles.mountainLeft}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.mountain} ${styles.mountainRight}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.grass} ${styles.grassLeft}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.grass} ${styles.grassRight}`}
        aria-hidden="true"
      />

      <div
        className={`${styles.lantern} ${styles.lanternLeft}`}
        aria-hidden="true"
      >
        <span />
      </div>

      <div
        className={`${styles.lantern} ${styles.lanternRight}`}
        aria-hidden="true"
      >
        <span />
      </div>

      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <p className={styles.logo}>
              SANTUY<span>✦</span>
            </p>

            <p className={styles.logoCaption}>
              A CALMER YOU
              <br />
              BUILDS A BRIGHTER TOMORROW
            </p>
          </div>

          <div
            className={styles.headerIcons}
            aria-hidden="true"
          >
            <span>▣</span>
            <span>▥</span>
            <span>⚙</span>
          </div>
        </header>

        <section className={styles.journey}>
          <div className={styles.journeyLabel}>
            <span aria-hidden="true">▲▲</span>
            <small>YOUR JOURNEY</small>
          </div>

          <div className={styles.journeyTrack}>
            <span
              className={`${styles.journeyNode} ${styles.journeyNodeActive}`}
            >
              ✓
            </span>

            <span
              className={`${styles.journeyLine} ${styles.journeyLineActive}`}
            />

            <span className={styles.journeyNode} />

            <span className={styles.journeyLine} />

            <span className={styles.journeyNode} />
          </div>

          <strong>1 / 3</strong>
        </section>

        <section className={styles.heading}>
          <p className={styles.overline}>
            QUEST 01 · CHECK IN
          </p>

          <h1>
            HOW&apos;S YOUR WORLD
            <br />
            FEELING TODAY?
          </h1>

          <p>
            Pick the block that feels closest
            <br className={styles.desktopOnly} />
            to your current headspace.
          </p>
        </section>

        <section className={styles.emotionGrid}>
          {EMOTIONS.map((emotion) => {
            const meta = EMOTION_META[emotion];
            const visual = EMOTION_VISUALS[emotion];

            return (
              <Link
                key={emotion}
                href={`${ROUTES.breathe}?emotion=${emotion}`}
                className={styles.emotionCard}
              >
                <div
                  className={`${styles.emotionBlock} ${visual.blockClass}`}
                  aria-hidden="true"
                >
                  <span className={styles.blockSymbol}>
                    {visual.symbol}
                  </span>

                  <div className={styles.blockFace}>
                    <i />
                    <i />
                    <b />
                  </div>
                </div>

                <h2>{meta.title}</h2>

                <p>{meta.tagline}</p>

                <span className={styles.cardAction}>
                  SELECT BLOCK →
                </span>
              </Link>
            );
          })}
        </section>

        <section className={styles.questCard}>
          <div
            className={styles.questIcon}
            aria-hidden="true"
          >
            🌱
          </div>

          <div>
            <span className={styles.questBadge}>
              Quest 1
            </span>

            <h2>Choose one feeling.</h2>

            <p>
              We&apos;ll take it one block at a
              time.
            </p>
          </div>

          <small>
            YOU&apos;RE HERE.
            <br />
            AND THAT ALREADY COUNTS.
          </small>
        </section>

        <footer className={styles.footer}>
          <span>🌱</span>
          <p>REST · REFLECT · REBUILD</p>
          <span>🌱</span>
        </footer>
      </div>
    </main>
  );
}