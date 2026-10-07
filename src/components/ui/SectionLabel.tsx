import type { HTMLAttributes } from "react";

interface SectionLabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionLabel({
  children,
  className = "",
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={`text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}