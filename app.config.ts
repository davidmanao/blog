export default defineAppConfig({
  head: {
      meta: [
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "msapplication-TileColor", content: "#000000" },
          { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#fff" },
          { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#000" },
      ],
      link: [
          { rel: "apple-touch-icon", sizes: "76x76", href: "/favicons/apple-touch-icon.png" },
          { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" },
          { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" },
          { rel: "manifest", href: "/favicons/site.webmanifest" },
          { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      style: [],
      script: [],
      noscript: [],
      title: "DAVID MANAO",
      htmlAttrs: {
        lang: "en",
      },
  },
  metadata: {
      title: "Manao Blog",
      author: "David",
      headerTitle: "David Manao",
      description: "David Manao Personal Page",
      language: "en-us",
      theme: "system", // system, dark or light
      siteUrl: "https://davidmanao.com",
      siteLogo: "/images/logo.png",
      image: "/images/avatar.png",
      socialBanner: "/images/twitter-card.png",
      email: "email@davidmanao.com",
      github: "https://github.com",
      twitter: "https://twitter.com/Twitter",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      linkedin: "https://www.linkedin.com",
      locale: "en-US",
  },
  analytics: {},
  newsletter: {},
  comment: {},
});
