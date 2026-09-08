export interface ContactContent {
  title: string;
  description: string;
  form: {
    title: string;
    notice: string;
    nameLabel: string;
    namePlaceholder: string;
    nameHint: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailHint: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageHint: string;
    submitLabel: string;
  };
  directChannels: {
    emailTitle: string;
    githubTitle: string;
    youtubeTitle: string;
  };
}

export const contactContent: ContactContent = {
  title: "Contact",
  description: "Feel free to contact CipherRoot Software.",

  form: {
    title: "Send a message",
    notice: "Message sending is coming soon. Until then, please reach us directly at",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    nameHint: "How we should address you.",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    emailHint: "We will only use this to reply to you.",
    subjectLabel: "Subject",
    subjectPlaceholder: "What is this about?",
    messageLabel: "Message",
    messagePlaceholder: "Tell us a little about your idea or question.",
    messageHint: "Required. Please include as much detail as you can.",
    submitLabel: "Coming Soon",
  },

  directChannels: {
    emailTitle: "Email",
    githubTitle: "GitHub",
    youtubeTitle: "YouTube",
  },
};
