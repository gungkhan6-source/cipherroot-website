/**
 * Short interface text reused across components: actions, accessibility
 * labels, status messages and footer labels. Page copy lives in the other
 * content files; this is only the shared UI vocabulary a client may reword.
 */

export interface UiContent {
  accessibility: {
    skipToContent: string;
    mainNavigation: string;
    mobileNavigation: string;
    openMenu: string;
    closeMenu: string;
    /** Appended to the accessible name of links that open a new tab. */
    newTab: (label: string) => string;
  };
  actions: {
    learnMore: string;
    learnMoreAbout: (name: string) => string;
    contact: string;
    viewProject: string;
    viewProjectLabel: (name: string) => string;
    viewSource: string;
    viewSourceLabel: (name: string) => string;
    watchDevlog: string;
    watchDevlogLabel: (title: string) => string;
    storeLabel: (name: string, store: string) => string;
    backToHome: string;
    backToArticles: string;
    tryAgain: string;
  };
  status: {
    loading: string;
    lastUpdated: string;
    minRead: string;
    notFoundMessage: string;
    errorTitle: string;
    errorMessage: string;
    errorReference: string;
  };
  details: {
    client: string;
    completed: string;
    technologies: string;
  };
  footer: {
    contactTitle: string;
    emailLabel: string;
    legalTitle: string;
    rightsReserved: string;
  };
}

const newTab = (label: string) => `${label} (opens in a new tab)`;

export const uiContent: UiContent = {
  accessibility: {
    skipToContent: "Skip to main content",
    mainNavigation: "Main",
    mobileNavigation: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    newTab,
  },

  actions: {
    learnMore: "Learn More",
    learnMoreAbout: (name) => `Learn more about ${name}`,
    contact: "Contact",
    viewProject: "View Project",
    viewProjectLabel: (name) => newTab(`View ${name}`),
    viewSource: "View Source",
    viewSourceLabel: (name) => newTab(`${name} source code`),
    watchDevlog: "Watch Devlog",
    watchDevlogLabel: (title) => newTab(`Watch devlog: ${title}`),
    storeLabel: (name, store) => newTab(`${name} on ${store}`),
    backToHome: "Back to Home",
    backToArticles: "Back to all articles",
    tryAgain: "Try again",
  },

  status: {
    loading: "Loading…",
    lastUpdated: "Last updated:",
    minRead: "min read",
    notFoundMessage: "The page you are looking for could not be found.",
    errorTitle: "Something went wrong",
    errorMessage:
      "An unexpected error occurred while loading this page. You can try again or return to the homepage.",
    errorReference: "Reference:",
  },

  details: {
    client: "Client",
    completed: "Completed",
    technologies: "Technologies",
  },

  footer: {
    contactTitle: "Contact",
    emailLabel: "Email",
    legalTitle: "Legal",
    rightsReserved: "All rights reserved.",
  },
};
