import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface LinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "default", size = "md", href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2",
          {
            "bg-brand-primary text-white hover:bg-brand-primary/90":
              variant === "default",
            "bg-surface-elevated text-text-primary hover:bg-surface-overlay":
              variant === "secondary",
            "border border-border bg-transparent hover:bg-surface-elevated":
              variant === "outline",
            "hover:bg-surface-elevated": variant === "ghost",
          },
          {
            "h-9 px-3 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "md",
            "h-11 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
