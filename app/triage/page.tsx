import Link from "next/link";
import { EMOTIONS, EMOTION_META, ROUTES } from "@/lib/content";

export default function TriagePage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--blue)]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Quick check-in
          </p>

          <h1 className="text-3xl font-bold leading-tight">
            What feels closest to your headspace right now?
          </h1>

          <p className="max-w-xl text-base leading-relaxed">
            Pick the one that feels most familiar. You can take it one small
            step at a time.
          </p>
        </div>

        <div className="grid gap-4">
          {EMOTIONS.map((emotion) => {
            const meta = EMOTION_META[emotion];

            return (
              <Link
                key={emotion}
                href={`${ROUTES.breathe}?emotion=${emotion}`}
                className="flex min-h-28 items-center rounded-[var(--radius-card)] border-2 border-[var(--blue)] bg-[var(--white)] p-5 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--blue)]"
              >
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">{meta.title}</h2>
                  <p className="leading-relaxed">{meta.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}