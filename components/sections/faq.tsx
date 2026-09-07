import { faqs, site } from "@/lib/site";
import { Reveal } from "../reveal";
import { Glass, SectionHeading } from "../ui";

export function Faq() {
  return (
    <section id="faq" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="The things people ask first"
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <Glass as="div" className="overflow-hidden">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-leaf-700 dark:text-glow shrink-0 transition duration-300 group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-soft px-6 pb-6 leading-relaxed">{f.a}</p>
                </details>
              </Glass>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-soft mt-10 text-center text-sm">
            Still stuck?{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-leaf-700 dark:text-glow font-semibold underline underline-offset-4"
            >
              {site.supportEmail}
            </a>{" "}
            reaches a person.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
