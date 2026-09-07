import Image from "next/image";
import { cn } from "./ui";

/**
 * A device shell around a real App Store screenshot. The bezel is drawn rather
 * than imaged so it stays crisp at any size and picks up the page's own light.
 */
export function Phone({
  src,
  alt,
  className,
  priority = false,
  width = 1000,
  height = 2173,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.6rem] bg-gradient-to-br from-white/70 via-white/20 to-white/5 p-[3px] shadow-[0_40px_90px_-30px_rgb(12_107_61_/_0.5)] dark:from-white/25 dark:via-white/5 dark:to-white/0 dark:shadow-[0_40px_90px_-30px_rgb(0_0_0_/_0.85)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.45rem] bg-leaf-900 p-[6px] dark:bg-black">
        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes="(max-width: 768px) 70vw, 320px"
            className="h-auto w-full"
          />
          {/* Specular sweep across the glass, as on a real screen. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/6 to-white/14 mix-blend-screen"
          />
        </div>

        {/* Dynamic-island style cutout. */}
        <div
          aria-hidden
          className="absolute top-[14px] left-1/2 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-black/95"
        />
      </div>
    </div>
  );
}
