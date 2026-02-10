// src/components/Container.tsx
import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}
