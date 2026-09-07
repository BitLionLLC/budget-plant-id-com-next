import { Reveal } from "../reveal";
import { Glass, SectionHeading } from "../ui";

const careRows = [
  { label: "Water", value: "Deeply and often through summer; let the top inch dry between drinks" },
  { label: "Light", value: "Full sun to light shade, sheltered from wind" },
  { label: "Soil", value: "Rich, free-draining loam kept consistently moist" },
];

const extras = [
  {
    title: "Ranked candidates",
    body: "Three to five species, each with a confidence score, so you can see when two close relatives are in play.",
    icon: "list",
  },
  {
    title: "Common names & synonyms",
    body: "What the plant is called locally, in the trade, and in the literature — plus the names it used to go by.",
    icon: "tag",
  },
  {
    title: "Full taxonomy",
    body: "Kingdom down to species, for when you want to know what family you are actually dealing with.",
    icon: "tree",
  },
  {
    title: "Edible parts & toxicity",
    body: "Whether any of it can be eaten, and whether any of it should be kept away from a cat or a toddler.",
    icon: "shield",
  },
  {
    title: "Health check",
    body: "Spotting, mildew, rust, curling, chewed edges — flagged with a likely diagnosis, its cause, and organic or chemical treatments.",
    icon: "heart",
  },
  {
    title: "Propagation & uses",
    body: "How to make more of it, and what people have traditionally done with it.",
    icon: "sprout",
  },
];

export function InsideAResult() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="What a credit buys"
            title="Not just a name. The whole picture."
            lede="One identification returns everything below. There is no premium tier holding half of it back."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <Glass tone="strong" className="overflow-hidden p-0">
              <div className="from-leaf-500/25 via-lagoon/15 hairline relative border-b bg-gradient-to-br to-transparent px-7 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-leaf-700 dark:text-glow text-xs font-semibold tracking-[0.16em] uppercase">
                      Identified
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                      Japanese banana
                    </h3>
                    <p className="text-soft mt-1 text-[15px] italic">Musa basjoo</p>
                  </div>
                  <span className="bg-leaf-500/15 text-leaf-700 dark:bg-glow/15 dark:text-glow rounded-full px-3 py-1.5 text-xs font-bold whitespace-nowrap">
                    92% match
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
                  <Chip tone="good">Appears healthy</Chip>
                  <Chip>Fruit edible</Chip>
                  <Chip>Non-toxic</Chip>
                </div>
              </div>

              <div className="px-7 py-6">
                <p className="text-soft text-[15px] leading-relaxed">
                  A hardy, clump-forming banana from the Ryukyu Islands of
                  southern Japan, grown across cool temperate gardens for its
                  paddle-shaped leaves rather than its fruit.
                </p>

                <dl className="mt-6 flex flex-col gap-4">
                  {careRows.map((r) => (
                    <div key={r.label} className="flex gap-4">
                      <dt className="w-16 shrink-0 text-xs font-bold tracking-wider uppercase opacity-55">
                        {r.label}
                      </dt>
                      <dd className="text-[15px] leading-snug">{r.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="hairline mt-6 border-t pt-5">
                  <p className="text-xs font-bold tracking-wider uppercase opacity-55">
                    Taxonomy
                  </p>
                  <p className="text-soft mt-2 text-sm">
                    Plantae · Tracheophyta · Liliopsida · Zingiberales ·
                    Musaceae · <span className="italic">Musa</span>
                  </p>
                </div>
              </div>
            </Glass>

            <p className="text-soft mt-4 px-2 text-xs">
              An illustration of a result, in the site's styling. Field names and
              structure match what the app returns.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {extras.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <Glass className="h-full p-6">
                  <Icon name={e.icon} />
                  <h3 className="mt-4 text-[17px] font-bold">{e.title}</h3>
                  <p className="text-soft mt-2 text-[15px] leading-relaxed">
                    {e.body}
                  </p>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "good";
}) {
  return (
    <span
      className={`glass glass-rim rounded-full px-3 py-1.5 ${
        tone === "good" ? "text-leaf-700 dark:text-glow" : "text-soft"
      }`}
    >
      {children}
    </span>
  );
}

const paths: Record<string, string> = {
  list: "M4 6h16M4 12h16M4 18h10",
  tag: "M4 4h7l9 9-7 7-9-9V4Zm3.5 3.5h.01",
  tree: "M12 3v18M12 8l5-4M12 13l-6-4M12 18l5-4",
  shield: "M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z",
  heart: "M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20Z",
  sprout: "M12 21v-7m0 0c0-3-2-5-5-5H5c0 3 2 5 5 5h2Zm0 0c0-3.5 2.5-6 6-6h1c0 3.5-2.5 6-6 6h-1Z",
};

function Icon({ name }: { name: string }) {
  return (
    <span className="bg-leaf-500/12 text-leaf-700 dark:bg-glow/12 dark:text-glow grid h-10 w-10 place-items-center rounded-xl">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          d={paths[name]}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
