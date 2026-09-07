import { site } from "@/lib/site";
import { Phone } from "../phone";
import { AppStoreButton, ButtonLink, Glass, Pill } from "../ui";

const facts = [
  { k: "$0.99", v: "for your first two IDs" },
  { k: "$0.20", v: "per ID on the 50 pack" },
  { k: "$0.00", v: "per month, forever" },
];

export function Hero() {
  return (
    <section className="relative px-4 pt-32 pb-20 sm:px-6 sm:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="animate-rise flex flex-col items-start">
          <Pill className="text-leaf-700 dark:text-leaf-300">
            <span className="bg-leaf-500 dark:bg-glow h-1.5 w-1.5 rounded-full" />
            No subscription. Ever.
          </Pill>

          <h1 className="mt-7 text-[2.75rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-[4.1rem]">
            Know every plant
            <br />
            you walk past.
            <br />
            <span className="text-gradient">Pay by the photo.</span>
          </h1>

          <p className="text-soft mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
            Point your camera at a leaf, a flower, a mystery seedling in the
            corner of the yard. Seconds later you have the species, how to keep
            it alive, and whether the spots on it are something to worry about.
            Most plant apps want{" "}
            <span className="text-[color:var(--text)] font-semibold">
              a subscription
            </span>
            . This one wants{" "}
            <span className="text-[color:var(--text)] font-semibold">
              ninety-nine cents
            </span>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreButton href={site.appStoreUrl} />
            <ButtonLink href="/#pricing" variant="ghost">
              See what a credit costs
            </ButtonLink>
          </div>

          <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-3">
            {facts.map((f) => (
              <Glass key={f.k} className="px-3 py-4 sm:px-4">
                <dt className="text-leaf-700 dark:text-glow text-xl font-extrabold tracking-tight sm:text-2xl">
                  {f.k}
                </dt>
                <dd className="text-soft mt-1 text-xs leading-snug sm:text-[13px]">
                  {f.v}
                </dd>
              </Glass>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Soft halo so the devices read as lit from behind. */}
          <div
            aria-hidden
            className="bg-leaf-300/50 dark:bg-glow/20 absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          />

          <div className="relative flex items-end gap-4 sm:gap-6">
            <Phone
              src="/screens/history.png"
              alt="The identification history screen in Budget Plant ID, listing past plants with their confidence scores"
              className="animate-float w-[38%] max-w-[190px] translate-y-8 sm:w-[42%]"
            />
            <Phone
              src="/screens/result.png"
              alt="A Budget Plant ID result identifying a Japanese banana, showing its scientific name and description"
              className="w-[58%] max-w-[280px]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-soft mx-auto mt-16 flex max-w-6xl flex-wrap items-center gap-x-7 gap-y-3 text-sm lg:mt-20">
        <Fact>Free to download</Fact>
        <Fact>{site.platforms}</Fact>
        <Fact>Rated {site.ageRating}</Fact>
        <Fact>Apple privacy label: no data collected</Fact>
      </div>
    </section>
  );
}

function Fact({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 20 20" className="text-leaf-500 dark:text-glow h-4 w-4" aria-hidden>
        <path
          d="M4 10.5l4 4 8-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}
