export interface ContactContent {
  title: string;
  metaDescription: string;
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
    /** Used when message delivery is configured. */
    activeNotice: string;
    sendLabel: string;
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
    unavailableMessage: string;
    invalidMessage: string;
    honeypotLabel: string;
    /** Prefix of the subject line of the email the site owner receives. */
    deliverySubjectPrefix: string;
    fieldErrors: {
      required: string;
      invalid: string;
      tooShort: string;
      tooLong: string;
    };
  };
  directChannels: {
    emailTitle: string;
    githubTitle: string;
    githubLabel: string;
    youtubeTitle: string;
    youtubeLabel: string;
    whatsappTitle: string;
    whatsappLabel: string;
    addressTitle: string;
    /** Follows the address in the Maps link's accessible name. */
    mapsSuffix: string;
    appointmentTitle: string;
    appointmentLabel: string;
  };
}

export const contactContent: ContactContent = {
  title: "Contact",
  metaDescription:
    "Get in touch with CipherRoot Software by email, GitHub or YouTube.",
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
    activeNotice: "Send us a message below, or reach us directly at",
    sendLabel: "Send Message",
    sendingLabel: "Sending…",
    successMessage: "Thank you. Your message has been sent and we will reply by email.",
    errorMessage: "Your message could not be sent right now. Please try again later or email us directly.",
    unavailableMessage: "Message sending is currently unavailable. Please email us directly.",
    invalidMessage: "Please check the highlighted fields and try again.",
    honeypotLabel: "Leave this field empty",
    deliverySubjectPrefix: "Contact form:",
    fieldErrors: {
      required: "This field is required.",
      invalid: "Please enter a valid value.",
      tooShort: "Please write a little more.",
      tooLong: "This is too long.",
    },
  },

  directChannels: {
    emailTitle: "Email",
    githubTitle: "GitHub",
    githubLabel: "github.com/gungkhan6-source",
    youtubeTitle: "YouTube",
    youtubeLabel: "@CipherRootSoftware",
    whatsappTitle: "WhatsApp",
    whatsappLabel: "Chat on WhatsApp",
    addressTitle: "Address",
    mapsSuffix: "on Google Maps",
    appointmentTitle: "Appointment",
    appointmentLabel: "Book an appointment",
  },
};
