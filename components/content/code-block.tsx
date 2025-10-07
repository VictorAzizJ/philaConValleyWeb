import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border bg-surface-elevated">
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
