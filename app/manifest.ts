import { MetadataRoute } from "next";
import stylesVariables from "styles/variables.module.scss";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Next.js Template",
  short_name: "next.js",
  description: "Next.js Template",
  start_url: "/",
  display: "standalone",
  // background_color: "#fff",
  theme_color: stylesVariables.primaryColor,
  //
  icons: [
    {
      src: "/favicon.ico",
      // sizes: "any",
      sizes: "32x32",
      type: "image/x-icon",
    },
  ],
});

export default manifest;
