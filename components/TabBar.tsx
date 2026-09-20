"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Emotion } from "@/lib/content";
import { isEmotion, ROUTES } from "@/lib/content";
import { useResetHref } from "./HelpButton";

/** Emotion carried by the current URL, if any. */
function useCurrentEmotion(): Emotion | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fromQuery = searchParams.get("emotion");
  const memeMatch = pathname.match(/^\/memes\/([^/]+)/);
  const candidate = fromQuery ?? memeMatch?.[1] ?? null;

  return isEmotion(candidate) ? candidate : null;
}

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CheckInIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function BreatheIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}

function MemesIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
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

interface Tab {
  label: string;
  href: string;
  active: boolean;
  highlight?: boolean;
  Icon: () => React.JSX.Element;
}

/**
 * Mobile bottom tab bar (thumb-reach, DS §9.3). Hidden on desktop where
 * the header carries inline nav instead. Tabs preserve the current
 * emotion where the destination supports it; Help is always one tap
 * away and always lands on `/reset` content.
 */
export default function TabBar() {
  const pathname = usePathname();
  const emotion = useCurrentEmotion();
  const resetHref = useResetHref();

  const tabs: Tab[] = [
    {
      label: "Home",
      href: ROUTES.landing,
      active: pathname === ROUTES.landing,
      Icon: HomeIcon,
    },
    {
      label: "Check-in",
      href: ROUTES.triage,
      active: pathname === ROUTES.triage,
      Icon: CheckInIcon,
    },
    {
      label: "Breathe",
      href: emotion ? `${ROUTES.breathe}?emotion=${emotion}` : ROUTES.breathe,
      active: pathname === ROUTES.breathe,
      Icon: BreatheIcon,
    },
    {
      label: "Memes",
      href: emotion ? ROUTES.memes(emotion) : ROUTES.triage,
      active: pathname.startsWith("/memes"),
      Icon: MemesIcon,
    },
    {
      label: "Help",
      href: resetHref,
      active: pathname === ROUTES.reset,
      highlight: true,
      Icon: HelpIcon,
    },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="flex">
        {tabs.map(({ label, href, active, highlight, Icon }) => (
          <Link
            key={label}
            href={href}
            aria-current={active ? "page" : undefined}
            aria-label={label === "Help" ? "Get help now — open helplines" : undefined}
            className={`flex min-h-[var(--sp-8)] flex-1 flex-col items-center justify-center gap-1 px-1 py-[var(--sp-2)] no-underline transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] ${
              highlight
                ? "bg-orange font-head font-bold text-white"
                : active
                  ? "font-head font-bold text-ink"
                  : "font-body text-ink"
            }`}
          >
            <Icon />
            <span className="text-sm leading-none">{label}</span>
            {/* Non-color active cue (DS §7.5): dot under the active tab */}
            <span
              aria-hidden="true"
              className={`h-1 w-1 rounded-full ${active ? "bg-current" : "bg-transparent"}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
