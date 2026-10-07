import Link from "next/link";
import { Navigation } from "./Navigation";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-border bg-elsewise-bg px-5 py-8 lg:flex lg:flex-col">
      <Link
        href="/"
        className="mb-10 px-4 font-display text-2xl tracking-tight text-foreground"
      >
        elsewise
      </Link>

      <Navigation />

      <div className="mt-auto px-4 pt-8">
        <p className="text-xs leading-5 text-text-subtle">
          Make spare minutes mentally meaningful.
        </p>
      </div>
    </aside>
  );
}