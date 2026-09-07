import { packs, perCredit, site } from "@/lib/site";
import { Reveal } from "../reveal";
import { AppStoreButton, Glass, SectionHeading } from "../ui";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Free to download. Credits when you need them."
            lede="One credit is one identification. Buy a pack in the app, spend it whenever — there is no expiry date and no recurring charge."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {packs.map((p, i) => (
            <Reveal key={p.credits} delay={i * 70} className="h-full">
              <Glass
                tone={p.best ? "strong" : "regular"}
                className={`relative flex h-full flex-col overflow-hidden p-6 ${
                  p.best ? "ring-leaf-500/40 dark:ring-glow/40 ring-2" : ""
                }`}
              >
                {p.best ? (
                  <div
                    aria-hidden
                    className="bg-leaf-300/60 dark:bg-glow/25 absolute -top-20 -right-14 h-44 w-44 rounded-full blur-3xl"
                  />
                ) : null}

                {/* Rendered on every card — invisible where it does not apply —
                    so the price rows line up across the row. */}
                <span
                  aria-hidden={!p.best}
                  className={`relative mb-4 w-fit rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${
                    p.best
                      ? "bg-leaf-700 text-leaf-50 dark:bg-glow dark:text-leaf-900"
                      : "invisible"
                  }`}
                >
                  Best value
                </span>

                <p className="text-soft relative text-xs font-semibold tracking-[0.16em] uppercase">
                  {p.label}
                </p>

                <p className="relative mt-3 text-4xl font-extrabold tracking-tight">
                  {money(p.price)}
                </p>

                <p className="text-leaf-700 dark:text-glow relative mt-2 text-sm font-semibold">
                  {p.credits} identifications
                </p>

                <p className="text-soft relative mt-1 text-sm">
                  {money(perCredit(p))} each
                </p>

                <p className="text-soft relative mt-auto pt-6 text-[13px] leading-snug">
                  {p.note}
                </p>
              </Glass>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Glass tone="strong" className="mt-8 flex flex-col items-center gap-6 p-8 text-center sm:p-10">
            <p className="max-w-2xl text-lg leading-relaxed">
              Fifty identifications for $9.99, bought once. It does not renew,
              it does not lapse, and there is nothing to cancel.
            </p>
            <AppStoreButton href={site.appStoreUrl} />
            <p className="text-soft text-xs">
              Prices shown in US dollars. Your local App Store price may differ.
            </p>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
