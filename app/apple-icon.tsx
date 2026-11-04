import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * iOS home-screen icon. Apple ignores SVG favicons, so the same mark is
 * rasterised here at 180px. The artwork is embedded as a data URI rather than
 * drawn with text, so it needs no font and matches app/icon.svg exactly.
 *
 * Note: no rounded corners — iOS applies its own mask.
 */
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#8f72ff"/><stop offset="1" stop-color="#4a2fd6"/>
</linearGradient></defs>
<rect width="64" height="64" fill="url(#g)"/>
<path d="M19 19 L32 33.5 L45 19" fill="none" stroke="#fff" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32 33.5 L32 46" fill="none" stroke="#fff" stroke-width="7.5" stroke-linecap="round"/>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={180}
          height={180}
          alt=""
          src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`}
        />
      </div>
    ),
    size,
  );
}
