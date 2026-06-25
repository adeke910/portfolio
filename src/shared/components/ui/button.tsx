import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex justify-center items-center text-center relative overflow-hidden transition-colors outline-none rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 ",
        banner:
          "gap-2 text-lg uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/80 banner-button gap-2 text-lg uppercase tracking-widest ",
        outline: "border",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary-foreground dark:text-primary  decoration-current hover:text-primary-foreground/70 dark:hover:text-primary/70 transition-colors",
      },
      size: {
        default:
          "gap-1.5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 rounded-md group px-4 py-2 ",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(function Button(
  {
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

function ButtonTextClone({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={cn("button-text-clone", className)} aria-label={text}>
      <span className="button-text-clone__line">{text}</span>
      <span className="button-text-clone__line button-text-clone__line--clone">
        {text}
      </span>
    </span>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants, ButtonTextClone };
