import { Reveal } from "../reveal";
import { Glass, SectionHeading } from "../ui";

const theirs = [
  "A recurring charge whether you identify one plant or none",
  "A free trial that turns into a yearly plan if you forget",
  "Features that drift behind higher tiers over time",
  "A cancellation you have to remember to make",
];

const ours = [
  "A pack of credits, bought once, spent whenever",
  "No trial to forget and nothing to cancel",
  "Every feature included on every identification",
  "A balance that sits there until you use it",
];

export function TheMath() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="The math"
            title={
              <>
                You identify plants a few times a year.
                <br className="hidden sm:block" /> So why pay every month?
              </>
            }
            lede="Plant identification is a thing you need on a walk, at a garden centre, or the day something on the windowsill starts looking unwell. Budget Plant ID prices it that way: a few cents when you use it, nothing when you don't."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal delay={60}>
            <Glass className="h-full p-8 opacity-90">
              <p className="text-soft text-xs font-semibold tracking-[0.16em] uppercase">
                The usual deal
              </p>
              <p className="text-soft mt-4 text-3xl font-extrabold tracking-tight">
                A subscription
              </p>
              <ul className="mt-7 flex flex-col gap-4">
                {theirs.map((t) => (
                  <li key={t} className="text-soft flex gap-3 text-[15px] leading-snug">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden>
                      <path
                        d="M5.5 5.5l9 9M14.5 5.5l-9 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>

          <Reveal delay={140}>
            <Glass tone="strong" className="relative h-full overflow-hidden p-8">
              <div
                aria-hidden
                className="bg-leaf-300/60 dark:bg-glow/25 absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl"
              />
              <p className="text-leaf-700 dark:text-glow relative text-xs font-semibold tracking-[0.16em] uppercase">
                Budget Plant ID
              </p>
              <p className="relative mt-4 text-3xl font-extrabold tracking-tight">
                $0.99 to start
              </p>
              <ul className="relative mt-7 flex flex-col gap-4">
                {ours.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-snug">
                    <svg
                      viewBox="0 0 20 20"
                      className="text-leaf-500 dark:text-glow mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden
                    >
                      <path
                        d="M4 10.5l4 4 8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
