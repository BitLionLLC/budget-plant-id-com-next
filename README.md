# budget-plant-id.com

Marketing site for **Budget Plant ID** — the iOS plant identification app by
BitLion, LLC that charges per photo instead of per month.

- App Store: https://apps.apple.com/us/app/budget-plant-id/id6747782540
- App source: `../plant-identifier-flutter`

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.
Every route is statically prerendered; there is no backend.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Design

The site borrows the app's "liquid glass" language: translucent panes with a
specular rim, floating over a slow-drifting aurora. The palette in
`app/globals.css` is lifted directly from the app's `lib/constants/app_theme.dart`,
so the two stay in step — change a colour there and change it here.

Light and dark are both first-class. The theme resolves before first paint via a
small inline script in `app/layout.tsx`, and the toggle in the header writes the
choice to `localStorage` under `bpid-theme`.

## Where the content lives

Almost everything factual is in `lib/site.ts`: URLs, the support address, the
in-app purchase packs, and the FAQ. Update prices there and the pricing grid,
the hero stats and the JSON-LD offers all follow.

`site.url` is set to `https://budget-plant-id.com` — change it if the site ships
on a different domain, since it seeds `metadataBase`, the sitemap and the
canonical URLs.

## Assets

- `public/app-icon.png` — the app icon, also the source for the favicon
  (`app/icon.png`) and the Apple touch icon (`app/apple-icon.png`).
- `public/screens/*.png` — the current App Store screenshots, pulled from the
  iTunes lookup API. **These predate the app's liquid-glass redesign.** When
  fresh screenshots ship to the App Store, drop the new files in with the same
  names and nothing else needs to change.
- `app/opengraph-image.tsx` — social card, generated at build time.
