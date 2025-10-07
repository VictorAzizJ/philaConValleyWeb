import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          size === "default" ? "container" : "container-narrow",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
