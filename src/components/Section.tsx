import "./Section.css";
import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  count?: string; // rótulo à direita do título, ex.: "05 semestres"
  image?: string; // URL da foto — quando presente, divide a seção em duas colunas
  imageAlt?: string;
  imagePosition?: "left" | "right"; // padrão "right"
  children: ReactNode;
}

export default function Section({
  title,
  count,
  image,
  imageAlt = "",
  imagePosition = "right",
  children,
}: SectionProps) {
  return (
    <section className="section">
      {title && (
        <div className="section-head">
          <h2>{title}</h2>
          {count && <span className="section-count">{count}</span>}
        </div>
      )}

      {image ? (
        <div className={`section-split section-split--${imagePosition}`}>
          <div className="section-split-content">{children}</div>
          <img className="section-split-image" src={image} alt={imageAlt} />
        </div>
      ) : (
        children
      )}
    </section>
  );
}
