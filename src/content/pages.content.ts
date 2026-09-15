export interface ListingPageContent {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  description: string;
}

export const appsPageContent: ListingPageContent = {
  metaTitle: "Applications",
  metaDescription:
    "Explore CipherRoot Android applications, including Gunner DNS and NovaRec Studio.",
  badge: "Products",
  title: "Applications",
  description: "Explore CipherRoot Android Applications.",
};

export interface GamesPageContent extends ListingPageContent {
  /** Immersive games hero CTA; jumps to the games list below the hero. */
  heroCta: {
    label: string;
    href: string;
  };
  /** Heading of the games list when the immersive hero holds the page title. */
  listTitle: string;
}

export const gamesPageContent: GamesPageContent = {
  metaTitle: "Indie Games",
  metaDescription:
    "Explore indie games currently in development at CipherRoot Software.",
  badge: "Games",
  title: "Indie Games",
  description: "Explore our indie games currently in development.",
  heroCta: {
    label: "Explore games",
    href: "#games-list",
  },
  listTitle: "All games",
};

export const servicesPageContent: ListingPageContent = {
  metaTitle: "Services",
  metaDescription: "Services offered by CipherRoot Software.",
  badge: "Services",
  title: "Services",
  description: "Explore the services we offer.",
};

export const portfolioPageContent: ListingPageContent = {
  metaTitle: "Portfolio",
  metaDescription: "Selected projects by CipherRoot Software.",
  badge: "Portfolio",
  title: "Portfolio",
  description: "A selection of projects we have worked on.",
};

export const blogPageContent: ListingPageContent = {
  metaTitle: "Blog",
  metaDescription:
    "News, development updates, Android applications, indie games and technology articles.",
  badge: "Blog",
  title: "Insights & Development",
  description:
    "Technical articles, development diaries and engineering notes from CipherRoot Software.",
};
