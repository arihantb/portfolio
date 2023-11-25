import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const navigation = [
  {
    key: "home",
    name: "Home",
    description: "The starting page of my portfolio",
    href: "#home",
  },
  {
    key: "about",
    name: "About",
    description: "Get to know more about me.",
    href: "#about",
  },
  {
    key: "projects",
    name: "Projects",
    description: "Have a look at my projects.",
    href: "#projects",
  },
  {
    key: "programming",
    name: "Programming",
    description: "Solutions to programming problems.",
    href: "#programming",
  },
  {
    key: "contact",
    name: "Contact",
    description: "Contact me for hiring/project.",
    href: "#contact",
  },
];

export const projects = [
  {
    year: "2022",
    projects: [
      {
        key: "cube_ninja",
        title: "Cube Ninja",
        description:
          "A mobile application to track solve times for WCA puzzles. Additionally, practice algorithms and track progress.",
        demoUrl: "/",
        codeUrl: "/",
        imageUrl: "https://via.placeholder.com/300x150",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        key: "abstractive_review_summarization",
        title: "Abstractive Review Summarization",
        description:
          "Implemented an Abstractive Summarization model using Attentional Sequence‑to‑Sequence RNN and Pointer Generator Network, providing sentiment scores and insights for Amazon product reviews. Hosted online with FASTApi.",
        demoUrl: "/",
        codeUrl: "/",
        imageUrl: "https://via.placeholder.com/300x150",
      },
    ],
  },
  {
    year: "2020",
    projects: [
      {
        key: "voice_prescription",
        title: "Voice Prescription",
        description:
          "Real‑time speech‑to‑text tool, incorporating Feature Extraction with Fuzzy Logic, MFCC, and DTW, culminating in automated medical prescription generation.",
        demoUrl: "/",
        codeUrl: "/",
        imageUrl: "https://via.placeholder.com/300x150",
      },
      {
        key: "alzheimers_disease_detection",
        title: "Alzheimer's Disease Detection",
        description:
          "Early detection of disease by assessing users’ navigating skills through mobile game developed using C#, Unity game engine, and Ensemble Learning.",
        demoUrl: "/",
        codeUrl: "/",
        imageUrl: "https://via.placeholder.com/300x150",
      },
    ],
  },
  {
    year: "2019",
    projects: [
      {
        key: "weather_monitoring_station",
        title: "Weather Monitoring Station",
        description:
          "Developed a device using Arduino and ARIMA model for local area weather forecasting, capturing real‑time conditions and hosted on AWS EC2.",
        demoUrl: "/",
        codeUrl: "/",
        imageUrl: "https://via.placeholder.com/300x150",
      },
    ],
  },
];

export const footerIcons = [
  {
    key: "facebook",
    icon: faFacebook,
    href: "https://facebook.com/arihantb1998",
  },
  {
    key: "instagram",
    icon: faInstagram,
    href: "https://instagram.com/arihantbedagkar",
  },
  {
    key: "twitter",
    icon: faTwitter,
    href: "https://twitter.com/arihantbedagkar",
  },
  {
    key: "github",
    icon: faGithub,
    href: "https://github.com/arihantb",
  },
  {
    key: "linkedin",
    icon: faLinkedin,
    href: "https://linkedin.com/in/arihantbedagkar",
  },
];

export const title = "Hey! I'm Arihant Bedagkar";

export const subtitle =
  "I'm a Research Engineer sculpting solutions at the intersection of";

export const subSubtitle = "Software Engineering and Data Science";

export const authorEmail = "arihantbedagkar@gmail.com";

export const authorName = "Arihant Bedagkar";
