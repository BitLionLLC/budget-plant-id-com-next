import { Reveal } from "../reveal";
import { Glass, SectionHeading } from "../ui";

const features = [
  {
    title: "Camera or library",
    body: "Shoot the plant in front of you, or dig out that photo from a hike three weeks ago.",
    icon: "camera",
  },
  {
    title: "Fruit, veg and herbs too",
    body: "A tomato on the vine, a bunch of supermarket herbs, a seed in your palm — harvested plant parts identify just as well, with ripeness, storage and culinary notes.",
    icon: "apple",
  },
  {
    title: "Disease diagnosis",
    body: "Powdery mildew, leaf spot, rust, root rot. When the app sees a problem it names it, explains what causes it, and gives you two ways to treat it.",
    icon: "flask",
  },
  {
    title: "Searchable history",
    body: "Every identification is saved with its photo, date and confidence. Search it by name months later when you finally decide to repot.",
    icon: "clock",
  },
  {
    title: "Honest about uncertainty",
    body: "Confidence scores are shown, not hidden. If a photo is not a plant at all, the app says so rather than inventing a species.",
    icon: "gauge",
  },
  {
    title: "Light, dark, or system",
    body: "Bright glass over a pale aurora, or smoked glass over a deep one. It follows your phone unless you tell it otherwise.",
    icon: "moon",
  },
  {
    title: "Sign in your way",
    body: "Apple, Google or email. Your credits and history follow you to a new phone.",
    icon: "key",
  },
  {
    title: "Yours to delete",
    body: "Delete your account from inside the app and your history goes with it. No email thread required.",
    icon: "trash",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Small app. Nothing missing."
            lede="Everything here is included with every identification — there is only one tier, and you are already on it."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <Glass className="group h-full p-6 transition duration-500 hover:-translate-y-1">
                <Icon name={f.icon} />
                <h3 className="mt-5 text-[17px] font-bold">{f.title}</h3>
                <p className="text-soft mt-2 text-[15px] leading-relaxed">
                  {f.body}
                </p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const paths: Record<string, string> = {
  camera:
    "M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1.2-2h6.2l1.2 2h1.7A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Zm9 8.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  apple:
    "M12 8c-3.5-2.5-8 .5-7 5.5S10 22 12 20c2 2 6-1.5 7-6.5S15.5 5.5 12 8Zm0 0c0-2.5 1.5-4.5 4-5",
  flask: "M9 3h6M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3M7.5 15h9",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5.2l3.4 2",
  gauge: "M12 20a8 8 0 1 1 8-8M12 12l4.5-3.5",
  moon: "M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5a8.6 8.6 0 1 0 10.7 10.7Z",
  key: "M14.5 10.5a4 4 0 1 1-4-4M14.5 10.5 21 4M18.5 6.5 20 8M16.5 8.5 18 10",
  trash: "M5 7h14M10 7V5h4v2M6.5 7l.8 12a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9l.8-12M10 11v6M14 11v6",
};

function Icon({ name }: { name: string }) {
  return (
    <span className="bg-leaf-500/12 text-leaf-700 dark:bg-glow/12 dark:text-glow grid h-11 w-11 place-items-center rounded-2xl transition duration-500 group-hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" aria-hidden>
        <path
          d={paths[name]}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
