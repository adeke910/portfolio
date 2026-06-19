import { ArrowUpRight, Mail } from "lucide-react";

import { Button, ButtonTextClone } from "@/app/shared/components/ui/button";
import {
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TanStackQueryIcon,
  TypeScriptIcon,
} from "@/app/shared/assets/icons/stack-icons";
import { Badge } from "./ui/badge";
import Link from "next/link";

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
    "My professional career spans 3 years now, each of which has further deepened my fondness and respect for the craft. ",
  links: {
    github: "https://github.com/adeke910",
    linkedin: "https://www.linkedin.com/in/adekemi-b-8b0809171/",
    cv: "/Adekemi_Bamiteko_Résumé.pdf",
  },
};

export default function HeroSection() {
  return (
    <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
      <div className="flex flex-col gap-2 items-start">
        <h1 className="font-stretch-ultra-condensed font-barlow-condensed font-medium tracking-[-0.08em] leading-[.75] text-5xl sm:text-[80px]">
          <span className=" text-primary">FRONTEND</span>
          <br />
          <span className=" text-primary-foreground pl-12">ENGINEERs</span>
        </h1>

        <p className="mt-2 text-base leading-relaxed font-mono text-muted-foreground">
          {PROFILE.welcomeText}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center  gap-2 justify-start">
        {STACKS.map(({ name, Icon }) => (
          <Badge variant="outline" key={name}>
            <Icon />
            {name}
          </Badge>
        ))}
      </div>

      {/* <div className="mt-8 flex items-center gap-3">
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
      </div> */}
      <Button
        variant="banner"
        asChild
        className="mt-9"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
          opacity: 1,
        }}
      >
        <Link href="mailto:adekemibamiteko@gmail.com">
          <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover/button:top-0 transition-all duration-500 scale-150">
            <Mail className="size-4" />
          </span>
          <span className="z-1 flex items-center gap-2">
            Work With Me <Mail className="size-4" />
          </span>
        </Link>
      </Button>
      <div className="flex items-center gap-2 mt-3">
        <Button
          variant="link"
          asChild
          className="p-0 gap-0 text-primary hover:text-primary/80"
        >
          <a
            href={PROFILE.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="view resume"
            className="inline-flex items-center gap-1"
          >
            <ButtonTextClone text="Career Snapshot" />
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
