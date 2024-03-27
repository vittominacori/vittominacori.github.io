const vars = require("./.env.json");

const title = "";
const image = "https://vittominacori.github.io/assets/images/vittominacori.jpg";

module.exports = {
  title: title,
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "image", property: "og:image", content: image }],
    ["meta", { property: "og:image", content: image }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "twitter:image", content: image }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: vars.googleSite,
      },
    ],
    [
      "meta",
      {
        name: "facebook-domain-verification",
        content: vars.fbSite,
      },
    ],
    ["meta", { name: "msvalidate.01", content: vars.msSite }],
  ],
  markdown: {
    anchor: { permalink: false, permalinkBefore: false },
    externalLinks: { target: "_self" },
  },
  plugins: [
    [
      "vuepress-plugin-gtag",
      {
        gtagId: vars.gaId,
      },
    ],
  ],
};
