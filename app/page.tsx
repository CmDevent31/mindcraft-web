import Link from "next/link";
import { EMOTION_META, EMOTIONS, ROUTES } from "@/lib/content";

/**
 * Landing (/) — santuy. Design System v1.0 is the source of truth.
 * Server Component: static sections only. The FAQ uses native
 * <details>/<summary> so it stays interactive with zero client JS.
 * Motion: static plus tactile button states only (MOTION 3).
 * One eyebrow on the whole page (demo section, per brief).
 */

const CONTAINER = "mx-auto w-full max-w-[1080px] px-[var(--gutter)]";
const SECTION = "py-[var(--section-rhythm)]";
const H2 = "text-balance font-head text-3xl font-bold leading-tight text-ink md:text-4xl";
const BODY = "max-w-[65ch] text-base leading-relaxed text-ink";

const STEPS = [
  {
    title: "Check in",
    body: "Pick the card that matches how you feel. No forms, no account, two taps to relief.",
  },
  {
    title: "Breathe",
    body: "Follow a short 4-7-8 breathing round to settle your body first. Skip anytime.",
  },
  {
    title: "Laugh",
    body: "Get memes matched to your state, each with a note that you are not alone in it.",
  },
  {
    title: "Act",
    body: "Land one tiny 30 second action, with free helplines beside you if it gets heavy.",
  },
] as const;

const FAQS = [
  {
    q: "Is santuy therapy?",
    a: "No. It is peer style first aid for rough afternoons: breathing, humor, and one small step. It never diagnoses and never replaces professional care.",
  },
  {
    q: "Do I need an account?",
    a: "No. Everything works anonymously in your browser. Open the page, pick a card, and start.",
  },
  {
    q: "Can I skip the breathing part?",
    a: "Yes, always. Breathing comes first because calm bodies laugh easier, but a skip control is on screen the whole time.",
  },
  {
    q: "Is the text I type into Meme Your Problem stored?",
    a: "No. Your words stay in your session to render your meme. Nothing is logged or profiled.",
  },
  {
    q: "What if a helpline does not answer?",
    a: "Try the next line on the list. That is why several official lines are shown instead of one.",
  },
  {
    q: "How much does it cost?",
    a: "Free to use, no account. The listed helplines are free lines run by official services.",
  },
] as const;

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-[var(--sp-7)] md:pt-[var(--sp-8)]">
      <div className={`${CONTAINER} grid items-center gap-[var(--sp-6)] md:grid-cols-2`}>
        <div className="flex flex-col gap-[var(--sp-4)]">
          <h1 id="hero-title" className="text-balance font-head text-4xl font-bold leading-none tracking-tight text-ink md:text-5xl">
            Rough day? Get unstuck in minutes.
          </h1>
          <p className={`${BODY} text-lg`}>
            A stigma free first aid kit for stressed students. Breathe, laugh, then take one tiny step.
          </p>
          <div className="flex flex-col gap-[var(--sp-3)] sm:flex-row">
            <Link href={ROUTES.triage} className="btn btn-primary w-auto self-start px-8">
              Start check-in
            </Link>
          </div>
        </div>
        {/* TODO: mascot art, 1200x900. Reserved slot, no fake illustration. */}
        <div
          role="img"
          aria-label="Mascot illustration placeholder"
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-[var(--sp-2)] rounded-[var(--radius-card)] border-2 border-dashed bg-white p-[var(--sp-5)] text-center"
          style={{ borderColor: "var(--blue-light)" }}
        >
          <p className="font-head text-xl font-bold text-ink">Mascot slot</p>
          <p className="max-w-[40ch] text-sm leading-relaxed text-ink">
            Mascot art goes here once it is ready.
          </p>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section aria-labelledby="demo-title" id="demo" className={SECTION}>
      <div className={`${CONTAINER} flex flex-col gap-[var(--sp-4)]`}>
        <p className="font-head text-xs font-bold uppercase tracking-[0.18em] text-blue-dark">
          How it works
        </p>
        <h2 id="demo-title" className={H2}>
          From panic to one small step
        </h2>
        <p className={BODY}>
          This short tour follows the real flow. Check in, breathe, get memes that get it, then land one tiny action.
        </p>
        {/* TODO: demo video file. 16:9 placeholder until the real tour is recorded. */}
        <div
          role="img"
          aria-label="Demo video placeholder"
          className="flex aspect-video w-full flex-col items-center justify-center gap-[var(--sp-3)] rounded-[var(--radius-card)] bg-ink p-[var(--sp-5)] text-center"
        >
          <span
            aria-hidden="true"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-orange"
          >
            <span
              aria-hidden="true"
              className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white"
            />
          </span>
          <p className="font-head text-lg font-bold text-white">Demo video</p>
          <p className="text-sm leading-relaxed text-white">
            Placeholder until the real two minute tour is recorded.
          </p>
        </div>
      </div>
    </section>
  );
}

function Issues() {
  return (
    <section aria-labelledby="issues-title" id="issues" className={SECTION}>
      <div className={`${CONTAINER} flex flex-col gap-[var(--sp-5)]`}>
        <div className="flex flex-col gap-[var(--sp-3)]">
          <h2 id="issues-title" className={H2}>
            Stress shows up in familiar ways
          </h2>
          <p className={BODY}>
            Pick the one that sounds like today. Each path leads to breathing first, then humor matched to it.
          </p>
        </div>
        <div className="grid gap-[var(--sp-4)] md:grid-cols-2">
          {EMOTIONS.map((slug, i) => {
            const meta = EMOTION_META[slug];
            return (
              <article
                key={slug}
                className={`flex flex-col gap-[var(--sp-2)] rounded-[var(--radius-card)] bg-white p-[var(--sp-5)] ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
                style={{ boxShadow: "0 4px 14px rgba(21,21,46,.08)" }}
              >
                <h3 className="font-head text-xl font-semibold text-ink">{meta.title}</h3>
                <p className="text-base leading-relaxed text-ink">{meta.tagline}</p>
              </article>
            );
          })}
        </div>
        <Link href={ROUTES.triage} className="btn btn-primary w-full sm:w-auto sm:self-start sm:px-8">
          Start check-in
        </Link>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section aria-labelledby="features-title" id="features" className={SECTION}>
      <div className={`${CONTAINER} flex flex-col gap-[var(--sp-5)]`}>
        <div className="flex flex-col gap-[var(--sp-3)]">
          <h2 id="features-title" className={H2}>
            Four small steps, one calmer you
          </h2>
          <p className={BODY}>
            The full flow takes a few minutes. Every step is skippable except feeling validated, which is automatic.
          </p>
        </div>
        <ol
          className="flex flex-col gap-[var(--sp-5)] border-l-2 pl-[var(--sp-5)]"
          style={{ borderColor: "var(--blue-light)" }}
        >
          {STEPS.map((step) => (
            <li key={step.title} className="flex flex-col gap-[var(--sp-2)]">
              <h3 className="font-head text-xl font-semibold text-ink">{step.title}</h3>
              <p className="max-w-[65ch] text-base leading-relaxed text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section aria-labelledby="closing-title" className={SECTION}>
      <div className={CONTAINER}>
        <div
          className="flex flex-col items-start gap-[var(--sp-4)] rounded-[var(--radius-card)] p-[var(--sp-6)]"
          style={{ backgroundColor: "var(--yellow-light)" }}
        >
          <h2 id="closing-title" className={H2}>
            Ready when you are
          </h2>
          <p className={BODY}>
            Sixty seconds from now you could be breathing easier. Your future self says thanks.
          </p>
          <Link href={ROUTES.triage} className="btn btn-primary w-full sm:w-auto sm:px-8">
            Start check-in
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section aria-labelledby="faq-title" id="faq" className={SECTION}>
      <div className={`${CONTAINER} flex flex-col gap-[var(--sp-4)]`}>
        <h2 id="faq-title" className={H2}>
          Questions students ask
        </h2>
        <div className="flex flex-col gap-[var(--sp-3)]">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="rounded-[var(--radius-card)] bg-white px-[var(--sp-4)] py-[var(--sp-3)]"
              style={{ boxShadow: "0 4px 14px rgba(21,21,46,.08)" }}
            >
              <summary className="cursor-pointer font-head text-base font-bold text-ink">
                {item.q}
              </summary>
              <p className="pt-[var(--sp-2)] text-base leading-relaxed text-ink">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Demo />
      <Issues />
      <Features />
      <Closing />
      <Faq />
    </>
  );
}
