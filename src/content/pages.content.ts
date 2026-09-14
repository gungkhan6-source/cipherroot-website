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

export const gamesPageContent: ListingPageContent = {
  metaTitle: "Indie Games",
  metaDescription:
    "Explore indie games currently in development at CipherRoot Software.",
  badge: "Games",
  title: "Indie Games",
  description: "Explore our indie games currently in development.",
};

export const servicesPageContent: ListingPageContent = {
  metaTitle: "Services",
  metaDescription: "Services offered by CipherRoot Software.",
  badge: "Services",
  title: "Services",
  description: "Explore the services we offer.",
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
