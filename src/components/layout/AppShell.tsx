import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { MobileNavigation } from "./MobileNavigation";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-elsewise-bg text-foreground">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1 pb-20 lg:pb-0">
          <MobileHeader />

          {children}
        </main>
      </div>

      <MobileNavigation />
    </div>
  );
}