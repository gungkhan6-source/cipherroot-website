import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = siteConfig.name;

// Shown as a bare domain, without the "www." the site is served from.
const displayDomain = new URL(siteConfig.url).host.replace(/^www\./, "");

const { colors } = siteConfig.theme;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: colors.surface0,
          backgroundImage:
            `radial-gradient(circle at 50% 0%, ${colors.brandHover} 0%, transparent 55%), radial-gradient(ellipse at 50% 120%, ${colors.accent} 0%, transparent 60%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            maxWidth: 860,
            fontSize: 36,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          {siteConfig.description}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 26,
            color: colors.brandLight,
          }}
        >
          {displayDomain}
        </div>
      </div>
    ),
    size,
  );
}
