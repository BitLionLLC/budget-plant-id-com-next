import { Phone } from "../phone";
import { Reveal } from "../reveal";
import { Glass, SectionHeading } from "../ui";

const steps = [
  {
    n: "01",
    title: "Take the photo",
    body: "Shoot it live or pull one from your library. A leaf, a flower, a fruit, a strip of bark — anything the plant will show you.",
  },
  {
    n: "02",
    title: "It reads the details",
    body: "Leaf shape, margins and venation. Petal count and arrangement. Stem texture, growth habit, and any spotting or damage on the way through.",
  },
  {
    n: "03",
    title: "You get an answer",
    body: "Three to five ranked candidates with confidence scores, a full care guide for the top match, and a verdict on the plant's health.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="One photo. One credit. About ten seconds."
            lede="No forms, no keys, no wading through a field guide to find out which of forty maples you are looking at."
          />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <ol className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <Glass as="li" className="flex gap-6 p-7 sm:p-8">
                  <span className="text-leaf-500/45 dark:text-glow/40 font-display text-3xl font-extrabold tabular-nums">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="text-soft mt-2 leading-relaxed">{s.body}</p>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="flex justify-center">
            <Phone
              src="/screens/home.png"
              alt="The Budget Plant ID home screen, with camera and gallery buttons and a credit balance"
              className="w-[62%] max-w-[290px] sm:w-[48%] lg:w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
