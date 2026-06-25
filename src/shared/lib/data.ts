import ReactIcon from "@/shared/assets/icons/react.svg";
import NextJsIcon from "@/shared/assets/icons/nextdotjs.svg";
import TypeScriptIcon from "@/shared/assets/icons/typescript.svg";
import TanStackQueryIcon from "@/shared/assets/icons/tanstack.svg";
import TailwindCssIcon from "@/shared/assets/icons/tailwindcss.svg";
import JavaScriptIcon from "@/shared/assets/icons/javascript.svg";
import Html5Icon from "@/shared/assets/icons/html5.svg";
import NodeJsIcon from "@/shared/assets/icons/nodedotjs.svg";
import PythonIcon from "@/shared/assets/icons/python.svg";
import ReduxIcon from "@/shared/assets/icons/redux.svg";
import GsapIcon from "@/shared/assets/icons/gsap.svg";
import ShadcnUiIcon from "@/shared/assets/icons/shadcnui.svg";
import ReactRouterIcon from "@/shared/assets/icons/reactrouter.svg";
import ReactHookFormIcon from "@/shared/assets/icons/reacthookform.svg";
import ZodIcon from "@/shared/assets/icons/zod.svg";
import MongoDbIcon from "@/shared/assets/icons/mongodb.svg";
import FlaskIcon from "@/shared/assets/icons/flask.svg";
import GitIcon from "@/shared/assets/icons/git.svg";
import GithubPagesIcon from "@/shared/assets/icons/githubpages.svg";
import GithubIcon from "@/shared/assets/icons/github.svg";
import CursorIcon from "@/shared/assets/icons/cursor.svg";
import ChakraIcon from "@/shared/assets/icons/chakraui.svg";
import {
  Users,
  FolderKanban,
  Code2,
  CloudCog,
  LucideIcon,
  DownloadIcon,
} from "lucide-react";
import LinkedInIcon from "@/shared/assets/icons/linkedin.svg";

interface IProject {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  sourceCode?: string;
}
type Metric = {
  value?: string;
  text: string;
  Icon: LucideIcon;
};
type IProfile = {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  initials: string;
  email: string;
  welcomeText: string;
  profileText1: string;
  profileText2: string;
  profileText3: string;
  emailSubject: string;
  emailBody: string;
  links: {
    text: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    url: string;
  }[];
  metrics: Metric[];
};
interface IStack {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
type StackItem = {
  name: string;
  color: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
type StackModel = {
  languages: StackItem[];
  technicalSkills: StackItem[];
  tools: StackItem[];
};
interface INavItem {
  label: string;
  href: string;
}

export const STACKS: IStack[] = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "TanStack", Icon: TanStackQueryIcon },
  { name: "Tailwind", Icon: TailwindCssIcon },
];

export const NAV_ITEMS: INavItem[] = [
  { label: "Home", href: "home" },
  { label: "Profile", href: "profile" },
  { label: "Catalogue", href: "catalogue" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Contact me", href: "contact" },
];

export const PROFILE: IProfile = {
  name: "Adekemi",
  title: "Frontend Engineers",
  imageSrc: "./profile.jpeg",
  imageAlt: "Adekemi Bamiteko",
  initials: "BA",
  email: "adekemibamiteko@gmail.com",
  welcomeText:
    "My professional career spans 3 years now, each of which has further deepened my fondness and respect for the craft. ",
  profileText1: "I am Adekemi.",
  profileText2:
    "A Frontend Engineer with a passion for building thoughtful digital experiences.",
  profileText3:
    "I specialize in React, Next.js, TypeScript, and modern frontend architecture. My work centers on creating products that feel simple for users. I enjoy turning complex ideas into intuitive interfaces and collaborating with teams to deliver products that are both technically sound and visually refined.",
  emailSubject: "Let's collaborate on a project",
  emailBody: "Hello Adekemi, I am reaching out to you because...",
  links: [
    { text: "GitHub", Icon: GithubIcon, url: "https://github.com/adeke910" },
    {
      text: "LinkedIn",
      Icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/adekemi-b-8b0809171/",
    },
    {
      text: "CV",
      Icon: DownloadIcon,
      url: "/Adekemi_Bamiteko_Résumé.pdf",
    },
  ],
  metrics: [
    {
      value: "3+",
      text: "Years Experience",
      Icon: CloudCog,
    },
    {
      value: "8+",
      text: " Projects Delivered",
      Icon: FolderKanban,
    },
    {
      value: "10+",
      text: " Technologies Mastered",
      Icon: Code2,
    },
    {
      text: "Cross-functional Collaboration",
      Icon: Users,
    },
  ],
};
export const MY_STACK: StackModel = {
  languages: [
    {
      name: "JavaScript",
      color: "#F7DF1E",
      Icon: JavaScriptIcon,
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      Icon: TypeScriptIcon,
    },
    {
      name: "HTML5",
      color: "#E34F26",
      Icon: Html5Icon,
    },
    {
      name: "Node.js",
      color: "#5FA04E",
      Icon: NodeJsIcon,
    },
    {
      name: "Python",
      color: "#3776AB",
      Icon: PythonIcon,
    },
  ],
  technicalSkills: [
    {
      name: "React",
      color: "#61DAFB",
      Icon: ReactIcon,
    },
    {
      name: "Next.js",
      color: "#000000",
      Icon: NextJsIcon,
    },
    {
      name: "Redux",
      color: "#764ABC",
      Icon: ReduxIcon,
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      Icon: TailwindCssIcon,
    },
    {
      name: "GSAP",
      color: "#0AE448",
      Icon: GsapIcon,
    },

    {
      name: "Shadcn",
      color: "#000000",
      Icon: ShadcnUiIcon,
    },
    {
      name: "Chakra UI",
      color: "#1BB2A9",
      Icon: ChakraIcon,
    },
    {
      name: "TanStack",
      color: "#FF4154",
      Icon: TanStackQueryIcon,
    },
    {
      name: "React Router",
      color: "#CA4245",
      Icon: ReactRouterIcon,
    },
    {
      name: "React Hook Form",
      color: "#EC5990",
      Icon: ReactHookFormIcon,
    },
    {
      name: "Zod",
      color: "#408AFF",
      Icon: ZodIcon,
    },
    {
      name: "MongoDB",
      color: "#47A248",
      Icon: MongoDbIcon,
    },
    {
      name: "Flask",
      color: "#3BABC3",
      Icon: FlaskIcon,
    },
  ],

  tools: [
    {
      name: "Git",
      color: "#F03C2E",
      Icon: GitIcon,
    },
    {
      name: "GitHub Pages",
      color: "#222222",
      Icon: GithubPagesIcon,
    },
    {
      name: "GitHub",
      color: "#181717",
      Icon: GithubIcon,
    },

    {
      name: "AWS",
      color: "#FF9900",
      Icon: CloudCog,
    },
    {
      name: "Cursor AI",
      color: "#000000",
      Icon: CursorIcon,
    },
  ],
};
export const PROJECTS: IProject[] = [
  {
    title: "NFT Marketplace",
    liveUrl: "https://adeke910.github.io/Sample-NFT-Project/home",
    sourceCode: "https://github.com/adeke910/Sample-NFT-Project",
    description: `
    A modern NFT marketplace interface designed for discovering, browsing, and showcasing digital collectibles. The platform features curated collections, creator profiles, trending assets, and responsive layouts focused on delivering a seamless user experience`,

    techStack: [
      "React",
      "Tailwind",
      "Shadcn",
      "React Hook Form",
      "Github Pages",
    ],

    image: "./nft_marketplace.png",
  },
  {
    title: "xTractify",
    techStack: [
      "AWS",
      "Chakra UI",
      "MongoDB",
      "Tailwind ",
      "GSAP",
      "Api Integration",
    ],

    image: "./xtractify.png",
    liveUrl: "https://d1k20s9xwxm93g.cloudfront.net/auth/signin",
    sourceCode: "https://github.com/adeke910/pnpm-monorepo",
    description:
      "XTracker is a responsive expense tracking web app built with React, designed for simplicity and clarity. It enables users to manage expenses, categorize spending, and gain insights through real-time data visualizations. The app features secure JWT-based authentication, a Node.js-powered API, and is deployed on AWS for scalability and reliability.",
  },
  {
    title: "Helper Apps",
    techStack: ["Typescript", "Pnpm Workspaces", "Chakra UI"],
    image: "./helper.png",
    sourceCode: "https://github.com/Muhammad-Tahir-S/helper-apps",
    description:
      "This monorepo contains the frontend and backend services for a suite of collaborative applications, including a Task Manager and a Notes app. It's configured with pnpm workspaces, TypeScript, and a full suite of development tools to ensure code quality and consistency.",
  },
];

export const MY_EXPERIENCE: {
  title: string;
  company: string;
  duration: string;
  location: string;
  color: string;
  model: "Hybrid" | "Onsite" | "Remote";
  stack: StackItem[];
}[] = [
  {
    title: "Software Engineer - (Frontend)",
    company: "KPMG Nigeria",
    duration: "Sep 2023 - Present",
    location: "Lagos,Nigeria",
    model: "Hybrid",
    color: "#00338d",
    stack: [
      {
        name: "JavaScript",
        color: "#F7DF1E",
        Icon: JavaScriptIcon,
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        Icon: TypeScriptIcon,
      },

      {
        name: "React Router",
        color: "#CA4245",
        Icon: ReactRouterIcon,
      },
      {
        name: "React Hook Form",
        color: "#EC5990",
        Icon: ReactHookFormIcon,
      },
      {
        name: "Zod",
        color: "#408AFF",
        Icon: ZodIcon,
      },
      {
        name: "Redux",
        color: "#764ABC",
        Icon: ReduxIcon,
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Bexxle Technologies",
    duration: "Jan 2022 - Jan 2023",
    location: "Lagos,Nigeria",
    model: "Remote",
    color: "#6366F1",
    stack: [
      {
        name: "Next.js",
        color: "#000000",
        Icon: NextJsIcon,
      },
      {
        name: "Chakra UI",
        color: "#1BB2A9",
        Icon: ChakraIcon,
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
        Icon: TailwindCssIcon,
      },
    ],
  },
];
