import React from "react";
import { PROFILE } from "../shared/lib/data";

const Contact = () => {
  return (
    <div className="max-xl:hidden fixed bottom-32 left-0 block" id="contact">
      <a
        href={`mailto:${PROFILE.email}`}
        className="px-3 text-primary tracking-[1px] transition-all bg-bottom! hover:text-foreground hover:bg-center!"
        style={{
          // background:
          //     'linear-gradient(to bottom, hsl(var(--muted-foreground)) 0% 33.33%, hsl(var(--primary)) 33.33% 66.66%, hsl(var(--muted-foreground)) 66.66% 100%)',
          // backgroundSize: '100% 300%',

          // backgroundClip: 'text',
          // color: 'transparent',

          textOrientation: "mixed",
          writingMode: "vertical-rl",
        }}
      >
        {PROFILE.email}
      </a>
    </div>
  );
};

export default Contact;
