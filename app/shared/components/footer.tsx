const Footer = () => {
  return (
    <footer className="relative mb-10 z-9999 overflow-hidden border-t border-red-500/30  backdrop-blur-xl h-10">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-2 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="">
          <p className="text-center text-base leading-5 text-white/50">
            © 2026.
            <span className="font-medium text-white/80">Adekemi Bamiteko</span>
          </p>
        </div>
        <div>Texts</div>
      </div>
    </footer>
  );
};

export default Footer;

/* <div className="mt-8 flex items-center gap-3">
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
      </div> */
