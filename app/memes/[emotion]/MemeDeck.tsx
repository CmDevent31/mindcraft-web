"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Emotion, Meme } from "@/lib/content";
import { ROUTES } from "@/lib/content";

export default function MemeDeck({
  memes,
  emotion,
  title,
}: {
  memes: Meme[];
  emotion: Emotion;
  title: string;
}) {
  const [index, setIndex] = useState(0);

  const meme = memes[index];
  const isLast = index === memes.length - 1;
  const resetHref = `${ROUTES.reset}?emotion=${emotion}`;

  return (
    <main className="min-h-screen bg-[var(--paper)] px-5 py-10 text-[var(--ink)]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--blue-dark)]">
            Meme lab
          </p>

          <h1>Someone else has been here too.</h1>

          <p>
            Memes for <span className="font-semibold">{title}</span>.
            Take them at your own pace.
          </p>
        </div>

        <section className="rounded-[var(--radius-card)] bg-[var(--white)] p-6">
          <p className="text-sm font-semibold" aria-live="polite">
            Meme {index + 1} of {memes.length}
          </p>

          <div className="mt-4 overflow-hidden rounded-[var(--radius-card)]">
            <Image
              key={meme.src}
              src={meme.src}
              alt={meme.alt}
              width={900}
              height={900}
              priority={index === 0}
              sizes="(max-width: 760px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>

          <p className="mt-5 text-lg font-semibold leading-relaxed">
            {meme.validation}
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          {!isLast && (
            <button
              type="button"
              onClick={() => setIndex(index + 1)}
              className="flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] border-2 border-[var(--blue)] px-5 py-3 font-semibold"
            >
              Next meme
            </button>
          )}

          <Link
            href={resetHref}
            className={
              isLast
                ? "flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--orange)] px-5 py-3 font-semibold text-[var(--ink)] no-underline"
                : "flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] border-2 border-[var(--blue)] px-5 py-3 font-semibold no-underline"
            }
          >
            {isLast ? "Continue" : "Skip to reset"}
          </Link>
        </div>
      </div>
    </main>
  );
}