import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children: ReactNode;
  type?: "default" | "warning" | "danger" | "success";
}

export function Callout({ children, type = "default" }: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-lg border p-4", {
        "border-border bg-surface-elevated": type === "default",
        "border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20":
          type === "warning",
        "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20":
          type === "danger",
        "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":
          type === "success",
      })}
    >
      <div className="flex-1 text-sm">{children}</div>
    </div>
  );
}
