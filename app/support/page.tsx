import type { Metadata } from "next";
import { Aurora } from "@/components/aurora";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink, Glass, Pill } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${site.name} — credits, purchases, accounts, identification quality and account deletion.`,
  alternates: { canonical: "/support" },
};

const topics = [
  {
    title: "A purchase did not add credits",
    body: "Every purchase is validated against Apple's servers before credits land, which can take a few seconds. If the balance still looks wrong, open the Buy Credits tab and tap the restore icon in the top bar — that revalidates anything bought with your Apple Account. If it is still off, email us with the date of the purchase and we will sort it out.",
  },
  {
    title: "Restoring purchases on a new device",
    body: "Sign in with the same account you used before and your credit balance and history come with you. If you bought credits and then signed in a different way, email us and we will help you track them down.",
  },
  {
    title: "An identification looks wrong",
    body: "Accuracy depends heavily on the photo. Fill the frame with one plant, get the leaves in focus, and include a flower or fruit if there is one. Check the other ranked candidates too — the right answer is often second when two species are close relatives. If something is badly off, send us the photo and we will look at it.",
  },
  {
    title: "Deleting your account",
    body: "Account → Danger zone → Delete account. It permanently removes the account and every identification in your history. It cannot be undone, and unused credits are not transferable.",
  },
  {
    title: "Refunds",
    body: "Purchases run through the App Store, so refunds are handled by Apple at reportaproblem.apple.com. Email us first if something went wrong on our end — it is usually quicker to fix.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Aurora />
      <SiteHeader />

      <main className="relative z-10 flex-1 px-4 pt-32 pb-24 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-start gap-5">
            <Pill className="text-leaf-700 dark:text-leaf-300">Support</Pill>
            <h1 className="text-4xl leading-[1.06] font-extrabold sm:text-5xl">
              Something not working? Write to us.
            </h1>
            <p className="text-soft text-lg leading-relaxed">
              {site.name} is made by {site.developer}. Email reaches a person,
              not a ticket queue.
            </p>
            <ButtonLink href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </ButtonLink>
          </div>

          <div className="mt-14 flex flex-col gap-3">
            {topics.map((t) => (
              <Glass key={t.title} className="p-7">
                <h2 className="text-lg font-bold">{t.title}</h2>
                <p className="text-soft mt-2 leading-relaxed">{t.body}</p>
              </Glass>
            ))}
          </div>

          <Glass tone="strong" className="mt-10 p-7">
            <h2 className="text-lg font-bold">Privacy and terms</h2>
            <p className="text-soft mt-2 leading-relaxed">
              Read the{" "}
              <a
                href={site.privacyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-leaf-700 dark:text-glow font-semibold underline underline-offset-4"
              >
                privacy policy
              </a>{" "}
              and the{" "}
              <a
                href={site.eulaUrl}
                target="_blank"
                rel="noreferrer"
                className="text-leaf-700 dark:text-glow font-semibold underline underline-offset-4"
              >
                standard App Store terms of use
              </a>{" "}
              that apply to the app.
            </p>
          </Glass>

          <p className="text-soft mt-10 text-sm">
            Looking for something else?{" "}
            <a
              href="/#faq"
              className="text-leaf-700 dark:text-glow font-semibold underline underline-offset-4"
            >
              The FAQ
            </a>{" "}
            covers credits, accuracy and how the pricing works.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
