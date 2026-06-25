import { getCurrentYear } from "@/shared/hooks/get-current-year";
import { PROFILE } from "../shared/lib/data";

import { Button } from "@/shared/components/ui/button";

const Footer = () => {
  return (
    <section id="contact">
      <div className="relative overflow-hidden border-t border-accent/20  h-20 items-center flex ">
        <div className="flex justify-between md:justify-center gap-10 w-full">
          <div className="flex items-center text-[10px] gap-5">
            <p className="text-primary-foreground">
              Adekemi Bamiteko
              <span className="font-medium ext-accent">{` © ${getCurrentYear()}.`}</span>
            </p>
          </div>
          <div className=" flex items-center gap-3">
            {PROFILE.links.map((link, i) => (
              <Button key={i} size="icon-lg" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.text} Profile`}
                >
                  <link.Icon />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
