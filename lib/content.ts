/**
 * Shared content contract for competition-mvp-build (task 1.2).
 * Single source of truth for emotions, micro-steps, and helplines.
 * Meme images live in `data/memes.json` (task 4.1) and MUST conform to `Meme`.
 * Routes import from here — no other cross-route data sharing.
 */

export const EMOTIONS = [
  "executive-dysfunction",
  "social-hangxiety",
  "academic-imposter",
] as const;

export type Emotion = (typeof EMOTIONS)[number];

export interface EmotionMeta {
  slug: Emotion;
  title: string;
  tagline: string;
}

export const EMOTION_META: Record<Emotion, EmotionMeta> = {
  "executive-dysfunction": {
    slug: "executive-dysfunction",
    title: "Executive Dysfunction",
    tagline: "Tasks are piling up but my brain is blank.",
  },
  "social-hangxiety": {
    slug: "social-hangxiety",
    title: "Social Hangxiety",
    tagline: "Replaying that conversation on loop since last night.",
  },
  "academic-imposter": {
    slug: "academic-imposter",
    title: "Academic Imposter",
    tagline: "Feeling like the biggest failure in the room.",
  },
};

export function isEmotion(value: unknown): value is Emotion {
  return (
    typeof value === "string" &&
    (EMOTIONS as readonly string[]).includes(value)
  );
}

export interface Meme {
  src: string;
  alt: string;
  validation: string;
  emotion: Emotion;
}

/** Static one micro-step per emotion — deterministic, no random pool. */
export const MICRO_STEPS_BY_EMOTION: Record<Emotion, string> = {
  "executive-dysfunction":
    "Write down just the next tiny step — one sentence, 30 seconds.",
  "social-hangxiety":
    "Drink one slow sip of water and name one thing you can see right now.",
  "academic-imposter":
    "Open your task and write one imperfect sentence — done beats perfect.",
};

export interface Helpline {
  name: string;
  number: string;
  href: string;
  note: string;
}

export const HELPLINES: Helpline[] = [
  {
    name: "SEJIWA / Healing 119",
    number: "119 ext. 8",
    href: "tel:119",
    note: "Free counseling line — dial 119 then ext. 8.",
  },
  {
    name: "Halo Kemenkes",
    number: "1500-567",
    href: "tel:1500567",
    note: "Ministry of Health helpline.",
  },
  {
    name: "LISA Suicide Prevention (WhatsApp)",
    number: "+62 811-3855-472",
    href: "https://wa.me/628113855472",
    note: "Chat-based support via WhatsApp.",
  },
];

export const DISCLAIMER =
  "This is peer-style first aid, not therapy or diagnosis. If it's more than a rough afternoon, these free lines are ready to help.";

export const ROUTES = {
  landing: "/",
  triage: "/triage",
  breathe: "/breathe",
  memes: (emotion: Emotion) => `/memes/${emotion}`,
  reset: "/reset",
} as const;
