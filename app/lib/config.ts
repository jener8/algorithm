// Site configuration
export const siteConfig = {
  name: "AlgoArt Research",
  // Accept HTTP URLs from the environment variable
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://seeingthealgorithm.com",
  ogImage: "/og-image.png",
  description:
    "A research project exploring the intersection of human algorithm visualization and artificial intelligence art generation.",
  links: {
    twitter: "https://twitter.com/algoartresearch",
    github: "https://github.com/algoartresearch",
  },
}
