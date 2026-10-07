import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const navigationCards = [
  {
    title: "Challenge",
    description: "Short activities that require active thinking.",
    href: "/challenge",
    className: "bg-challenge text-[#20231a] hover:brightness-95",
  },
  {
    title: "Discover",
    description: "Experiences that encourage curiosity and learning.",
    href: "/discover",
    className: "bg-discover text-[#2a211b] hover:brightness-95",
  },
  {
    title: "Reset",
    description: "Short experiences to help you pause and mentally reset.",
    href: "/reset",
    className: "bg-reset text-[#172321] hover:brightness-95",
  },
];

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 font-display text-4xl tracking-tight text-foreground">
          elsewise
        </span>

        <p className="mb-2 text-lg text-text-muted">
          Make spare minutes mentally meaningful.
        </p>

        <p className="max-w-xl text-base text-text-subtle">
          Welcome to ELSEWISE—a cognitive and knowledge playground for short,
          intentional experiences. Choose a path below to challenge your mind,
          discover something new, or reset your focus.
        </p>
      </div>

      <div className="mb-12 grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-3">
        {navigationCards.map((item) => (
          <Card
            key={item.href}
            className="flex flex-col items-center py-8"
          >
            <SectionLabel>Core Area</SectionLabel>

            <span
              className={`mb-2 font-display text-2xl ${
                item.href === "/challenge"
                  ? "text-challenge"
                  : item.href === "/discover"
                    ? "text-discover"
                    : "text-reset"
              }`}
            >
              {item.title}
            </span>

            <p className="mb-4 text-center text-sm text-text-muted">
              {item.description}
            </p>

            <Link
              href={item.href}
              aria-label={`Go to ${item.title}`}
              className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-200 ${item.className}`}
            >
              Enter
            </Link>
          </Card>
        ))}
      </div>

      <div className="w-full max-w-2xl">
        <Card className="flex flex-col items-center py-6">
          <SectionLabel>Progress</SectionLabel>

          <p className="mb-2 text-sm text-text-muted">
            Your recent activity and progress will appear here.
          </p>

          <Link
            href="/progress"
            aria-label="Go to Progress"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-transparent px-5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-elevated"
          >
            View Progress
          </Link>
        </Card>
      </div>
    </Container>
  );
}