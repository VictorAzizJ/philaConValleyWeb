export const siteConfig = {
  name: "PhilaConValley",
  description:
    "A Philly-grown, community-powered launchpad for creative technologists, organizers, and open-source builders.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://philaconvalley.com",
  ogImage: process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/og`
    : "https://philaconvalley.com/api/og",
  social: {
    instagram: "https://www.instagram.com/phlconvalley/",
    twitter: "https://twitter.com/phlconvalley",
    github: "https://github.com/philaconvalley",
  },
  features: {
    slack: {
      enabled: process.env.NEXT_PUBLIC_ENABLE_SLACK === "true",
      inviteUrl: process.env.NEXT_PUBLIC_SLACK_INVITE_URL || "",
    },
    airtable: {
      enabled: process.env.NEXT_PUBLIC_ENABLE_AIRTABLE === "true",
      formUrl: process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "",
    },
  },
};
