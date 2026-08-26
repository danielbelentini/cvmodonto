import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "sm" | "lg";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  gtmId?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary: "bg-teal text-void hover:bg-teal-bright",
  outline:
    "border border-line text-ink hover:border-teal-bright hover:text-teal-bright bg-transparent",
};

const sizes: Record<string, string> = {
  md: "px-6 py-4 text-[16px]",
  sm: "px-4 py-2 text-sm",
  lg: "px-9 py-5 text-lg",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  gtmId,
  className = "",
  ariaLabel,
  external = true,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        aria-label={ariaLabel} 
        data-gtm-id={gtmId}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {icon}
      {children}
    </Link>
  );
}
