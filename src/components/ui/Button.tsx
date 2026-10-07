import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "challenge" | "discover" | "reset" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  challenge: "bg-challenge text-[#20231a] hover:brightness-95",
  discover: "bg-discover text-[#2a211b] hover:brightness-95",
  reset: "bg-reset text-[#172321] hover:brightness-95",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-surface-elevated",
};

export function Button({
  variant = "challenge",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}