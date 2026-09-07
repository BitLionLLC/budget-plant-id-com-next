import { Aurora } from "@/components/aurora";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { InsideAResult } from "@/components/sections/inside-a-result";
import { Pricing } from "@/components/sections/pricing";
import { TheMath } from "@/components/sections/the-math";
import { ClosingCta } from "@/components/sections/closing-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs, packs, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "EducationalApplication",
      operatingSystem: "iOS 13.0 or later, macOS 11.0 or later, visionOS 1.0 or later",
      url: site.url,
      downloadUrl: site.appStoreUrl,
      author: { "@type": "Organization", name: site.developer },
      description:
        "Identify plants from a photo and get care guidance and a health check, without a subscription. Credit packs start at $0.99.",
      offers: packs.map((p) => ({
        "@type": "Offer",
        name: `${p.credits} identification credits`,
        price: p.price.toFixed(2),
        priceCurrency: "USD",
        category: "In-app purchase",
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Aurora />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <TheMath />
        <HowItWorks />
        <InsideAResult />
        <Features />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
