import { ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/app/shared/components/ui/button";
import {
  GitHubIcon,
  LinkedInIcon,
} from "@/app/shared/assets/icons/social-icons";
import {
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TanStackQueryIcon,
  TypeScriptIcon,
} from "@/app/shared/assets/icons/stack-icons";
import { Badge } from "./ui/badge";

const STACKS = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "TanStack", Icon: TanStackQueryIcon },
  { name: "Tailwind", Icon: TailwindCssIcon },
] as const;

const PROFILE = {
  name: "Adekemi",
  title: "Frontend Engineers",
  imageSrc: "/profile.jpeg",
  imageAlt: "Adekemi Bamiteko",
  initials: "BA",
  welcomeText:
    "My professional career spans 3 years now, each of which has further deepened my fondness and respect for the craft.",
  links: {
    github: "https://github.com/adeke910",
    linkedin: "https://www.linkedin.com/in/adekemi-b-8b0809171/",
    cv: "/Adekemi_Bamiteko_CV.pdf",
  },
};

export default function HeroSection() {
  return (
    <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="font-anton font-medium tracking-[-0.08em] leading-[.75] text-6xl sm:text-[80px]">
          <span className=" text-primary">FRONTEND</span>
          <br />
          <span className=" text-primary-foreground pl-12">ENGINEER</span>
        </h1>

        <p className="mt-2 text-base leading-relaxed font-mono text-primary-foreground">
          {PROFILE.welcomeText}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center  gap-2 justify-start">
        {STACKS.map(({ name, Icon }) => (
          <Badge variant="secondary" key={name}>
            <Icon />
            {name}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <Button size="icon-lg">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
        </Button>

        <Button size="icon-lg">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
        </Button>

        <Button size="icon-lg">
          <a href={PROFILE.links.cv} download aria-label="Download resume">
            <Download />
          </a>
        </Button>

        <Button>Say Hello</Button>
      </div>
      <div className="mt-4 flex items-center">
        <Button variant="link" asChild className="p-0 gap-0">
          <a
            href={PROFILE.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="view resume"
          >
            See my resume <ArrowUpRight />
          </a>
        </Button>
      </div>
    </div>
  );
}
