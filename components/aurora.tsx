/**
 * The living backdrop every glass surface is seen against: four wide, slow
 * blobs that drift out of phase with one another. Fixed to the viewport so
 * panes appear to slide over it as the page scrolls.
 */
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-leaf-50 dark:bg-night" />

      <div className="absolute -top-[22%] -left-[12%] h-[70vmax] w-[70vmax] animate-drift rounded-full bg-[#9BE8C0] opacity-70 blur-[110px] dark:bg-[#0B7A4B] dark:opacity-45" />
      <div className="absolute -top-[10%] right-[-18%] h-[62vmax] w-[62vmax] animate-drift-slow rounded-full bg-[#8FDCE6] opacity-60 blur-[120px] dark:bg-[#0E5F6B] dark:opacity-40" />
      <div className="absolute bottom-[-25%] left-[18%] h-[58vmax] w-[58vmax] animate-drift-slow rounded-full bg-[#D8F0A6] opacity-55 blur-[120px] dark:bg-[#1B4D2E] dark:opacity-45" />
      <div className="absolute bottom-[-15%] right-[6%] h-[50vmax] w-[50vmax] animate-drift rounded-full bg-[#BFE6FF] opacity-50 blur-[120px] dark:bg-[#123B57] dark:opacity-40" />

      {/* Settles the contrast so body text never sits on a hot spot. */}
      <div className="absolute inset-0 bg-white/25 dark:bg-night/45" />
    </div>
  );
}
