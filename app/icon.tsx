import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Monogram favicon, generated from the same tokens as the site. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080a",
          color: "#ececed",
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          borderRadius: 14,
          border: "2px solid #7c5cff",
        }}
      >
        {site.monogram}
      </div>
    ),
    size,
  );
}
