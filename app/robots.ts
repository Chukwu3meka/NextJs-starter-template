import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/private-link/"],
  },
  sitemap: "https://soccermass.com/sitemap.xml",
});

export default robots;
