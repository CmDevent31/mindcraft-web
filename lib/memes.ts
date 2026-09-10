import memesJson from "@/data/memes.json";
import type { Emotion, Meme } from "@/lib/content";
const MEME_BASE_URL = process.env.NEXT_PUBLIC_MEME_BASE_URL ?? "";

export function resolveMemeSrc(src: string): string {
  return MEME_BASE_URL ? `${MEME_BASE_URL}${src}` : src;
}

export const MEMES: Meme[] = (memesJson as Meme[]).map((meme) => ({
  ...meme,
  src: resolveMemeSrc(meme.src),
}));

export function getMemesByEmotion(emotion: Emotion): Meme[] {
  return MEMES.filter((m) => m.emotion === emotion);
}