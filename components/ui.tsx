import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** A translucent pane. `tone="strong"` milks the fill for dense text. */
export function Glass({
  as: Tag = "div",
  tone = "regular",
  className,
  children,
}: {
  as?: "div" | "section" | "article" | "li" | "header" | "figure";
  tone?: "regular" | "strong";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "glass glass-rim rounded-3xl",
        tone === "strong" && "glass-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Small capsule used for section eyebrows and inline facts. */
export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "glass glass-rim inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      <Pill className="text-leaf-700 dark:text-leaf-300">{eyebrow}</Pill>
      <h2 className="max-w-3xl text-4xl leading-[1.08] font-extrabold sm:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="text-soft max-w-2xl text-lg leading-relaxed">{lede}</p>
      ) : null}
    </div>
  );
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "ghost";
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "bg-leaf-700 text-leaf-50 shadow-lg shadow-leaf-700/25 hover:-translate-y-0.5 hover:bg-leaf-800 hover:shadow-xl hover:shadow-leaf-700/30 dark:bg-glow dark:text-leaf-900 dark:shadow-glow/20 dark:hover:bg-leaf-300",
        variant === "ghost" &&
          "glass glass-rim hover:-translate-y-0.5 hover:brightness-[1.04]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden className={className} fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C61.2 141.2 0 184.6 0 273c0 26.1 4.8 53.1 14.4 80.9 12.8 36.6 59 126.4 107.2 124.9 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.3 102.6-119 -65.2-30.7-61.7-90-61.7-91.1zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/** Link to the App Store, styled to sit comfortably beside the glass UI. */
export function AppStoreButton({
  href,
  className,
  size = "lg",
}: {
  href: string;
  className?: string;
  size?: "lg" | "sm";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl bg-leaf-900 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-offset-4 dark:bg-mist dark:text-leaf-900 dark:hover:bg-white",
        size === "lg"
          ? "px-6 py-3.5 shadow-xl shadow-leaf-900/25"
          : "px-4 py-2.5 shadow-lg shadow-leaf-900/20",
        className,
      )}
    >
      <AppleGlyph className={size === "lg" ? "h-7 w-7" : "h-5 w-5"} />
      <span className="flex flex-col text-left leading-none">
        <span
          className={cn(
            "opacity-70",
            size === "lg" ? "text-[11px]" : "text-[9px]",
          )}
        >
          Download on the
        </span>
        <span
          className={cn(
            "font-semibold tracking-tight",
            size === "lg" ? "mt-1 text-lg" : "mt-0.5 text-sm",
          )}
        >
          App Store
        </span>
      </span>
    </a>
  );
}
