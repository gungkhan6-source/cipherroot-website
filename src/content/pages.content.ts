export interface ListingPageContent {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  title: string;
  description: string;
}

export interface AppsPageContent extends ListingPageContent {
  /** Immersive apps hero CTA; jumps to the app list below the hero. */
  heroCta: {
    label: string;
    href: string;
  };
  /** Heading of the app list when the immersive hero holds the page title. */
  listTitle: string;
}

export const appsPageContent: AppsPageContent = {
  metaTitle: "Applications",
  metaDescription:
    "Explore CipherRoot Android applications, including Gunner DNS and NovaRec Studio.",
  badge: "Products",
  title: "Applications",
  description: "Explore CipherRoot Android Applications.",
  heroCta: {
    label: "Explore apps",
    href: "#apps-list",
  },
  listTitle: "All apps",
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

export interface BlogPageContent extends ListingPageContent {
  /** Immersive blog hero CTA; jumps to the article list below the hero. */
  heroCta: {
    label: string;
    href: string;
  };
  /** Heading of the article list when the immersive hero holds the page title. */
  listTitle: string;
}

export const blogPageContent: BlogPageContent = {
  metaTitle: "Blog",
  metaDescription:
    "News, development updates, Android applications, indie games and technology articles.",
  badge: "Blog",
  title: "Insights & Development",
  description:
    "Technical articles, development diaries and engineering notes from CipherRoot Software.",
  heroCta: {
    label: "Read articles",
    href: "#articles",
  },
  listTitle: "All articles",
};
