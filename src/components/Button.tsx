import Link from "next/link";

type ButtonVariant = "primary" | "dark" | "ghost";

export function Button({
  href,
  children,
  variant = "ghost",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const classes =
    variant === "primary"
      ? "btn btn-primary"
      : variant === "dark"
      ? "btn btn-dark"
      : "btn";

  return (
    <Link href={href} className={`${classes} ${className}`}>
      {children}
    </Link>
  );
}
