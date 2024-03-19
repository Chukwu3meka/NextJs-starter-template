import { MetadataRoute } from "next";
import pageInfo from "utils/page-info";

const sitemap = (): MetadataRoute.Sitemap => [
  // ? Solemnity of Mary, the Mother of God
  { url: process.env.WEB_URL! + pageInfo.home, lastModified: new Date("1 Jan 2024"), changeFrequency: "never", priority: 1 },
];

export default sitemap;
