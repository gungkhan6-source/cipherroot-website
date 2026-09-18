/**
 * Inferno Pool showcase copy on /games (English, like the rest of the site).
 *
 * Platforms are not listed here: they come from the Inferno Pool releases in
 * src/data/offerings.ts, so the card, the showcase and the detail page always
 * agree on what is released and what is still coming soon.
 */

export interface InfernoPoolImage {
  src: string;
  alt: string;
  caption: string;
}

export interface InfernoPoolContent {
  name: string;
  /** In-page anchor of the showcase section (without "#"). */
  anchor: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  featuresTitle: string;
  features: string[];
  chat: {
    badge: string;
    title: string;
    description: string;
  };
  gallery: {
    title: string;
    main: InfernoPoolImage;
    side: InfernoPoolImage[];
  };
  platforms: {
    title: string;
    description: string;
    comingSoon: string;
    moreComingSoon: string;
    platformsLabel: string;
  };
  /**
   * Public URL of the web version (the live game server, which also hosts
   * the game's WebSocket). "Play on Web" and the in-page player are only
   * shown when it is set.
   */
  webUrl?: string;
  playOnWeb: string;
  /** Detail page with the in-page player. */
  detailHref: string;
  player: {
    /** In-page anchor of the player (without "#"). */
    anchor: string;
    title: string;
    description: string;
    start: string;
    iframeTitle: string;
    fullscreen: string;
    exitFullscreen: string;
    openInNewTab: string;
    posterAlt: string;
  };
  /** Card additions on the /games list. */
  card: {
    badge: string;
    showcaseLabel: string;
  };
}

export const infernoPoolContent: InfernoPoolContent = {
  name: "Inferno Pool",
  anchor: "inferno-pool",
  eyebrow: "Featured game",
  title: "INFERNO POOL",
  subtitle: "Real-Time Multiplayer Pool",
  description:
    "Inferno Pool is a fast-paced online multiplayer 8-ball pool game built around real-time matches, responsive controls and social interaction. Challenge other players, play against the bot, invite friends to private rooms and chat with players in the global community.",
  featuresTitle: "Features",
  features: [
    "Real-Time Multiplayer",
    "Global Chat",
    "Private Rooms",
    "Bot Matches",
    "3D Billiard Balls",
    "Responsive Mobile Controls",
    "Player Progression",
    "Cue Customization",
  ],
  chat: {
    badge: "Live",
    title: "Global Chat Server is Live",
    description:
      "Our global chat server is now online. Players can chat with the community, meet other players and find new opponents before and between matches.",
  },
  gallery: {
    title: "Inferno Pool gallery",
    main: {
      src: "/images/inferno-pool/inferno-pool-gameplay.webp",
      alt: "Inferno Pool multiplayer 8-ball pool gameplay",
      caption: "8-ball on a full table, with an aim guide for every shot.",
    },
    side: [
      {
        src: "/images/inferno-pool/inferno-pool-multiplayer.webp",
        alt: "Inferno Pool multiplayer game with global chat next to the pool table",
        caption: "Play and chat side by side: the table and the global chat in one view.",
      },
      {
        src: "/images/inferno-pool/inferno-pool-global-chat-room.webp",
        alt: "Inferno Pool global chat",
        caption: "The Inferno Pool Community global chat room.",
      },
    ],
  },
  platforms: {
    title: "Play Anywhere",
    description: "Inferno Pool is being prepared for multiple platforms.",
    comingSoon: "Coming Soon",
    moreComingSoon: "More platforms coming soon",
    platformsLabel: "Platforms",
  },
  webUrl: "https://inferno-pool-server.onrender.com/",
  playOnWeb: "Play on Web",
  detailHref: "/games/inferno-pool",
  player: {
    anchor: "play",
    title: "Play in Browser",
    description:
      "The live web version of Inferno Pool, running on our game server. Play against the bot, join an online match or open the global chat right here.",
    start: "Play in Browser",
    iframeTitle: "Inferno Pool web game",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    openInNewTab: "Open in new tab",
    posterAlt: "Inferno Pool pool table, ready to play in the browser",
  },
  card: {
    badge: "Global Chat Live",
    showcaseLabel: "View Showcase",
  },
};
