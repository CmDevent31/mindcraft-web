import { redirect } from "next/navigation";

import { EMOTION_META, isEmotion, ROUTES } from "@/lib/content";
import { getMemesByEmotion } from "@/lib/memes";

import MemeDeck from "./MemeDeck";

export default async function MemesPage({
  params,
}: {
  params: Promise<{ emotion: string }>;
}) {
  const { emotion } = await params;

  if (!isEmotion(emotion)) {
    redirect(ROUTES.triage);
  }

  const memes = getMemesByEmotion(emotion);

  if (memes.length === 0) {
    redirect(ROUTES.triage);
  }

  return (
    <MemeDeck
      memes={memes}
      emotion={emotion}
      title={EMOTION_META[emotion].title}
    />
  );
}