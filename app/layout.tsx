import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — identify plants without a subscription`,
    template: `%s · ${site.name}`,
  },
  description:
    "Point your camera at any plant and get the species, a care guide and a health check in seconds. No subscription — credit packs start at $0.99. Free on iPhone, iPad, Mac and Vision Pro.",
  applicationName: site.name,
  keywords: [
    "plant identifier",
    "plant identification app",
    "identify plants by photo",
    "plant app without subscription",
    "plant disease identifier",
    "gardening app",
  ],
  authors: [{ name: site.developer }],
  creator: site.developer,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — identify plants without a subscription`,
    description:
      "Species, care guide and health check from one photo. Pay per identification, from $0.99. No subscription, ever.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — identify plants without a subscription`,
    description:
      "Species, care guide and health check from one photo. Pay per identification, from $0.99.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2faf5" },
    { media: "(prefers-color-scheme: dark)", color: "#060e0a" },
  ],
};

/* Resolve the theme before first paint so a dark-mode visitor never sees a
   white flash. Kept tiny and inlined for that reason. */
const themeScript = `(function(){try{var s=localStorage.getItem("bpid-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full`}
      // The inline script below sets the `dark` class before React hydrates,
      // so the server and client class lists legitimately differ.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
