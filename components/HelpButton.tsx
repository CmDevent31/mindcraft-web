"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { EMOTIONS, isEmotion, ROUTES } from "@/lib/content";

/**
 * Emotion-aware link to `/reset` helplines.
 *
 * Reads emotion from the current URL (`?emotion=` or `/memes/<emotion>`).
 * Falls back to the first emotion so Help ALWAYS lands on `/reset`
 * content — bare `/reset` redirects to `/triage` (see app/reset/page.tsx),
 * which would strand users coming from `/` or `/triage`.
 */
export function useResetHref(): string {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fromQuery = searchParams.get("emotion");
  const memeMatch = pathname.match(/^\/memes\/([^/]+)/);
  const candidate = fromQuery ?? memeMatch?.[1] ?? EMOTIONS[0];

  const emotion = isEmotion(candidate) ? candidate : EMOTIONS[0];
  return `${ROUTES.reset}?emotion=${emotion}`;
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Persistent Get Help entry — DS §9.1 Help variant: `--orange` fill,
 * bold `--white` label + icon (approved brand pairing), pill radius.
 * Rendered in the site header (all viewports); the mobile tab bar
 * carries its own Help tab built from the same `useResetHref`.
 */
export default function HelpButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={useResetHref()}
      aria-label="Get help now — open helplines"
      className={`inline-flex min-h-11 items-center justify-center gap-[var(--sp-2)] rounded-pill bg-orange px-[var(--sp-5)] py-3 font-head text-base font-bold text-white no-underline transition-transform duration-[var(--dur-fast)] ease-[var(--ease)] active:scale-[0.96] ${className}`}
    >
      <PhoneIcon />
      Get Help
    </Link>
  );
}
