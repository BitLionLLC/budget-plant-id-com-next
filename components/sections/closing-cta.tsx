import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "../reveal";
import { AppStoreButton, Glass } from "../ui";

export function ClosingCta() {
  return (
    <section className="relative px-4 pt-8 pb-24 sm:px-6 lg:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Glass
            tone="strong"
            className="relative overflow-hidden px-8 py-16 text-center sm:px-14 sm:py-20"
          >
            <div
              aria-hidden
              className="bg-leaf-300/70 dark:bg-glow/25 absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-[80px]"
            />
            <div
              aria-hidden
              className="bg-lagoon/30 dark:bg-lagoon/20 absolute -bottom-28 -right-20 h-64 w-64 rounded-full blur-[80px]"
            />

            <div className="relative flex flex-col items-center">
              <Image
                src="/app-icon.png"
                alt=""
                width={88}
                height={88}
                className="h-20 w-20 rounded-[22px] shadow-2xl shadow-leaf-700/30"
              />

              <h2 className="mt-8 text-4xl leading-[1.06] font-extrabold sm:text-5xl">
                There is a plant near you
                <br />
                you cannot name yet.
              </h2>

              <p className="text-soft mt-6 max-w-xl text-lg leading-relaxed">
                Download {site.name} free, buy two identifications for the price
                of a gumball, and find out what it is.
              </p>

              <div className="mt-9">
                <AppStoreButton href={site.appStoreUrl} />
              </div>

              <p className="text-soft mt-6 text-xs">
                {site.platforms} · {site.category} · Rated {site.ageRating}
              </p>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
