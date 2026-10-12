import "./Button.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string; // se vier, renderiza como link (ex.: GitHub)
  onClick?: () => void;
  variant?: "solid" | "outline";
}

export default function Button({ children, href, onClick, variant = "solid" }: ButtonProps) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
