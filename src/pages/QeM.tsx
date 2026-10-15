import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import "./Home.css";
import "./Projetos.css";

import imagemInicio from "../assets/QeM1.png";
import imagemLogin from "../assets/QeM2.png";
import imagemJogo from "../assets/QeM3.png";

import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

const featuredProject = {
  title: "Q&M",
  stack: ["HTML", "CSS", "JavaScript"],
  repoUrl: "https://github.com/Lucas-Gatto/Questoes-e-Masmorras",
  description:
    "Plataforma de gamificação para estudos desenvolvida com o objetivo de tornar o aprendizado mais envolvente e motivador. O projeto combina elementos de jogos, como desafios, recompensas e progressão, com conteúdo educacional, proporcionando uma experiência interativa que estimula a participação ativa dos usuários e promove a retenção do conhecimento.",
};

const imagens = [
  {
    src: imagemInicio,
    legenda: "Página inicial do Q&M",
  },
  {
    src: imagemLogin,
    legenda: "Tela de login e cadastro",
  },
  {
    src: imagemJogo,
    legenda: "Tela de jogo",
  },
];

export default function QeM() {
  const [indice, setIndice] = useState(0);

  function anterior() {
    setIndice((atual) => (
      atual - 1 + imagens.length
    ) % imagens.length);
  }

  function proxima() {
    setIndice((atual) => (atual + 1) % imagens.length);
  }

  return (
    <main className="pagina-projeto">
      <Cabecalho />
      <Section title={featuredProject.title}>
        <Card
          title="Sobre o projeto"
          footer={
            <Button href={featuredProject.repoUrl}>
              Ver código no GitHub
            </Button>
          }
        >
          <div className="chip-row">
            {featuredProject.stack.map((tech) => (
              <Badge key={tech} variant="pink">
                {tech}
              </Badge>
            ))}
          </div>

          <p>
            <b>Descrição:</b> {featuredProject.description}
          </p>
        </Card>
      </Section>

      <Section title="O projeto em funcionamento">
        <div
          className="project-carousel"
          role="region"
          aria-label="Imagens do Q&M"
          aria-roledescription="carrossel"
        >
          <div className="carousel-stage">
            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={anterior}
              aria-label="Imagem anterior"
            >
              ❮
            </button>

            <div className="carousel-image-link">
              <img
                src={imagens[indice].src}
                alt={imagens[indice].legenda}
                className="carousel-image"
              />
            </div>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={proxima}
              aria-label="Próxima imagem"
            >
              ❯
            </button>
          </div>

          <div className="carousel-caption" aria-live="polite">
            <p>{imagens[indice].legenda}</p>
            <span>
              {indice + 1} / {imagens.length}
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
}