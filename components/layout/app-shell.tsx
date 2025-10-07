import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main id="main-content" className="flex-1">
        {children}
      </main>
    </div>
  );
}
