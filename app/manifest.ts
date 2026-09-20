import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TermLink",
    short_name: "TermLink",
    description: "Fully offline, private BLE chat for Windows terminals.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbff",
    theme_color: "#1268e8",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
