import "./Badge.css";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "turquoise" | "pink"; // roxo | turquesa | rosa arroxeado
}

// Chip pequeno — tags de tecnologia, nível de idioma, categoria de projeto...
export default function Badge({ children, variant = "accent" }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
