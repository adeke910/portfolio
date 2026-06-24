import { getCurrentYear } from "@/shared/hooks/get-current-year";
// import { Button } from "../shared/components/ui/button";
import { PROFILE } from "../shared/lib/data";

import { Button } from "@/shared/components/ui/button";

const Footer = () => {
  return (
    <section id="contact">
      <div className="relative overflow-hidden border-t border-accent/20  h-20 md:h-30 items-center flex ">
        <div className="flex justify-between md:justify-center gap-10 w-full">
          <div className="flex items-center ">
            <p className="text-center text-xs leading-5 text-primary-foreground">
              {` © ${getCurrentYear()}.`}
              <span className="font-medium ml-1 md:ml-3  text-accent  text-base">
                Adekemi Bamiteko
              </span>
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
