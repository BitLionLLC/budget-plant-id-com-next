"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bpid-theme";

/**
 * Light/dark switch mirroring the app's Appearance setting. The initial class
 * is set by the inline script in the layout; this only takes over once React
 * has hydrated, which is why `mounted` gates the icon.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* Private browsing: the choice simply does not persist. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`glass glass-rim grid h-10 w-10 place-items-center rounded-full transition hover:brightness-[1.06] ${className ?? ""}`}
    >
      <span className="sr-only">Toggle colour scheme</span>
      {mounted && dark ? (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
          <path
            d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}
