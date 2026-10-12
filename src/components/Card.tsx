import "./Card.css";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
}

// Container genérico — use pra projeto, curso, emprego, etc.
export default function Card({ title, children, footer, onClick }: CardProps) {
  return (
    <div className={`card${onClick ? " card-clickable" : ""}`} onClick={onClick}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
