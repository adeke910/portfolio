import BubbleMenu from "./bubble-menu";
// import SplitText from "./split-text";
import { ModeToggle } from "./ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NAV_ITEMS, PROFILE } from "../lib/data";
import { useLenis } from "lenis/react";

export default function Header() {
  const lenis = useLenis();

  return (
    <div className=" h-16 w-full flex items-center justify-between px-2 md:px-4 lg:px-6 rounded-lg bg-accent/40 sticky">
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
              menuBg="var(--primary)"
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
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-primary-foreground ">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => lenis?.scrollTo(`#${item.href}`)}
              className="hover:text-primary"
            >
              {item.label}
            </button>
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
