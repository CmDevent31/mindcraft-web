"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckListIcon,
  LaughingIcon,
  LungsIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { useEffect, useRef, useState } from "react";

export interface Step {
  title: string;
  body: string;
}

/** One icon per step, in STEPS order: Check in, Breathe, Laugh, Act. */
const STEP_ICONS = [CheckListIcon, LungsIcon, LaughingIcon, ZapIcon] as const;

/** Pause between auto-advances of the open step. */
export const ROTATE_MS = 6000;

function Chevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

/**
 * Four-steps accordion — same motion contract as the FAQ (500ms
 * ::details-content open/close, text fade + 4px drift, chevron
 * rotation; all on DS tokens, collapsed under reduced motion).
 *
 * Behavior: all steps start closed. When the list first scrolls
 * into view, step 0 opens; every 6s the open step advances while
 * the list stays visible. Tapping a step opens it and restarts
 * the 6s clock. Under prefers-reduced-motion the first step
 * opens on view but rotation stays off.
 */
export default function StepsAccordion({ steps }: { steps: readonly Step[] }) {
  const rootRef = useRef<HTMLOListElement>(null);
  const [started, setStarted] = useState(false);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [cycle, setCycle] = useState(0);
  const [reduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setStarted(true);
          setActive((a) => (a === null ? 0 : a));
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !inView || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((a) => (a === null ? 0 : (a + 1) % steps.length));
      setCycle((c) => c + 1);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [started, inView, reduceMotion, active, steps.length]);

  function select(i: number) {
    setActive(i);
    setCycle((c) => c + 1);
  }

  return (
    <ol ref={rootRef} className="flex flex-col">
      {steps.map((step, i) => (
        <li key={step.title} className="relative border-b border-ink/10 last:border-b-0">
          <details open={active === i} className="py-[var(--sp-3)]">
            <summary
              onClick={(e) => {
                e.preventDefault();
                select(i);
              }}
              className="steps-cols cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden"
            >
              <span
                aria-hidden="true"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-input)] transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] ${
                  active === i ? "bg-ink text-white" : "bg-ink/5 text-ink/40"
                }`}
              >
                <HugeiconsIcon
                  icon={STEP_ICONS[i]}
                  size={22}
                  color="currentColor"
                  strokeWidth={1.5}
                />
              </span>
              <h3
                className={`font-head text-lg font-semibold transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] ${
                  active === i ? "text-ink" : "text-ink/50"
                }`}
              >
                {step.title}
              </h3>
              <span
                aria-hidden="true"
                className="faq-chevron flex h-6 w-6 shrink-0 items-center justify-center text-ink/60"
              >
                <Chevron />
              </span>
            </summary>
            <div className="faq-panel steps-cols items-start">
              <span aria-hidden="true" />
              <div>
                <p className="max-w-[60ch] text-[15px] leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </div>
            </div>
          </details>
          {active === i && started && inView && !reduceMotion && (
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-px block h-[2px] overflow-hidden rounded-full bg-ink/10"
            >
              <span
                key={`progress-${cycle}`}
                aria-hidden="true"
                className="steps-progress-fill block h-full w-full"
                style={{ animationDuration: `${ROTATE_MS}ms` }}
              />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
