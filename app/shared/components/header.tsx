"use client";

import BubbleMenu from "./bubble-menu";
import SplitText from "./split-text";
import { ModeToggle } from "./ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NAV_ITEMS, PROFILE } from "../lib/data";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="relative h-16 w-full flex items-center justify-between px-8 md:px-12 lg:px-16 rounded-lg bg-accent/70">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="md:hidden block">
            <BubbleMenu
              logo="BA"
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
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-primary/90 ">
          {NAV_ITEMS.map((item) => (
            <SplitText
              key={item.label}
              text={item.label}
              tag="a"
              href={item.href}
              trigger="hover"
              splitType="chars"
              delay={18}
              duration={0.4}
              from={{ yPercent: 110, opacity: 0 }}
              to={{ yPercent: 0, opacity: 1 }}
              ease="power3.out"
              className="hover:text-primary dark:hover:text-primary transition"
              onClick={() => {
                router.push(item.href);
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-10 w-10  rounded-md text-center bg-primary-foreground text-xl leading-1.5 font-extrabold tracking-tight">
          <span className=" text-primary text-center">BA</span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
