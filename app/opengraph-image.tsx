import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Budget Plant ID — identify plants without a subscription. Credit packs from $0.99.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(join(process.cwd(), "public", "app-icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 76,
          background:
            "linear-gradient(135deg, #E9FAF0 0%, #CFF2E1 42%, #BFE6FF 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={92} height={92} alt="" style={{ borderRadius: 24 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#0E2118" }}>
              Budget Plant ID
            </div>
            <div style={{ fontSize: 24, color: "#3D6152" }}>by BitLion, LLC</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.02,
              color: "#0C2B1C",
            }}
          >
            Know every plant you
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.02,
              color: "#0C6B3D",
            }}
          >
            walk past. Pay by the photo.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              background: "#0C6B3D",
              color: "#F2FAF5",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            No subscription
          </div>
          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.72)",
              color: "#0E2118",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            2 identifications for $0.99
          </div>
          <div
            style={{
              display: "flex",
              background: "rgba(255,255,255,0.72)",
              color: "#0E2118",
              padding: "14px 26px",
              borderRadius: 999,
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            iPhone · iPad · Mac
          </div>
        </div>
      </div>
    ),
    size,
  );
}
