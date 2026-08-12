import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Frontend Developer, React.js & Next.js`;

/**
 * Social card, generated at build time from the site tokens so it always
 * matches the page it represents.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          backgroundImage:
            "radial-gradient(70% 60% at 15% 0%, rgba(124,92,255,0.28), transparent 65%)",
          padding: 72,
          color: "#ececed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 999,
              border: "1px solid #22222c",
              fontSize: 20,
            }}
          >
            {site.monogram}
          </div>
          <div style={{ fontSize: 22, color: "#8b8b96" }}>{site.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Satori requires an explicit display on any element with more than
              one child, so the headline is a flex row of two spans. */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              maxWidth: 940,
            }}
          >
            <span>I turn ideas into digital products that&nbsp;</span>
            <span style={{ color: "#9b83ff" }}>work.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#8b8b96" }}>
            {`${site.name} — Frontend & Full-Stack Developer`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 20, color: "#7a7a86" }}>
          {site.specialisation.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
