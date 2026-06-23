import { getCurrentYear } from "@/shared/hooks/get-current-year";
// import { Button } from "../shared/components/ui/button";
import { PROFILE } from "../shared/lib/data";

import { Button } from "@/shared/components/ui/button";

const Footer = () => {
  return (
    <section id="contact">
      <div className="relative mb-10 overflow-hidden border-t border-accent/40 backdrop-blur-xl h-30 items-center flex ">
        <div className="mx-auto gap-5 flex max-w-7xl flex-col px-6 py-2 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center ">
            <p className="text-center text-xs leading-5 text-white/50">
              {` © ${getCurrentYear()}.`}
              <span className="font-medium ml-3 text-accent  text-base">
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
