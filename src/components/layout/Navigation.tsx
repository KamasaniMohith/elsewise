import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Challenge", href: "/challenge" },
  { label: "Discover", href: "/discover" },
  { label: "Reset", href: "/reset" },
  { label: "Progress", href: "/progress" },
  { label: "Settings", href: "/settings" },
];

export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm text-text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}