"use client";

import BubbleMenu from "./BubbleMenu";
import { ModeToggle } from "./ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PROFILE = {
  name: "Adekemi",
  title: "Frontend Engineers",
  imageSrc: "/profile.jpeg",
  imageAlt: "Adekemi Bamiteko",
  initials: "BA",
};
const NAV_ITEMS = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Skills", href: "#skills" },
  { label: "Contact me", href: "#contact" },
] as const;

export default function Header() {
  return (
    <div className="relative h-16 w-full flex items-center justify-between px-8 md:px-12 lg:px-16 rounded-lg bg-secondary/70">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="md:hidden block">
            <BubbleMenu
              logo="BA"
              // showLogo={false}
              useFixedPosition
              className="md:hidden"
              style={{
                position: "static",
                left: "auto",
                right: "auto",
                top: "auto",
                padding: 0,
              }}
              menuAriaLabel="Toggle mobile navigation"
              menuBg="var(--secondary)"
              menuContentColor="var(--primary-foreground)"
              items={NAV_ITEMS.map((item) => ({
                ...item,
                hoverStyles: {
                  bgColor: "var(--accent)",
                  textColor: "var(--accent-foreground)",
                },
              }))}
            />
          </div>
          <Avatar size="lg" className="hidden md:block">
            <AvatarImage src={PROFILE.imageSrc} alt={PROFILE.imageAlt} />
            <AvatarFallback>{PROFILE.initials}</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-foreground ">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-foreground dark:hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center h-10 w-10  rounded-md text-center bg-primary-foreground text-xl leading-1.5 font-extrabold tracking-tight">
        <span className=" text-primary text-center">BA</span>
      </div>
    </div>
  );
}
