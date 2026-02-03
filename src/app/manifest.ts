import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucas Castro - Full Stack Developer Portfolio",
    short_name: "Lucas Castro",
    description:
      "Full Stack Developer with 4+ years of experience building robust web applications using React, Vue, and Angular. Proficient in Node.js, Python, and .NET.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#05FF03",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
