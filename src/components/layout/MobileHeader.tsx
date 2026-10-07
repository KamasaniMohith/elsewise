import Link from "next/link";

export function MobileHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-5 lg:hidden">
      <Link
        href="/"
        className="font-display text-xl tracking-tight text-foreground"
      >
        <span className="mr-1 text-challenge">✦</span>
        elsewise
      </Link>

      <div className="flex items-center gap-5 text-xs text-text-subtle">
        <Link
          href="/progress"
          className="transition-colors hover:text-foreground"
        >
          Progress
        </Link>

        <Link
          href="/settings"
          className="transition-colors hover:text-foreground"
        >
          Settings
        </Link>
      </div>
    </header>
  );
}