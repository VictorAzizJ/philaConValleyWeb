import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AlertProps {
  children: ReactNode;
  variant?: "info" | "warning" | "error" | "success";
  title?: string;
}

export function Alert({ children, variant = "info", title }: AlertProps) {
  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    error: "❌",
    success: "✅",
  };

  return (
    <div
      className={cn("my-6 flex gap-3 rounded-lg border p-4", {
        "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20":
          variant === "info",
        "border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20":
          variant === "warning",
        "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20":
          variant === "error",
        "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20":
          variant === "success",
      })}
    >
      <div className="text-lg">{icons[variant]}</div>
      <div className="flex-1">
        {title && <div className="mb-1 font-semibold">{title}</div>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
}
