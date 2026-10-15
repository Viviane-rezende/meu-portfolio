import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import "./Home.css";
import "./Projetos.css";

import imagemInicio from "../assets/EducaHost1.png";
import imagemModulo from "../assets/EducaHost2.png";
import imagemUsuario from "../assets/EducaHost3.png";

import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

const featuredProject = {
  title: "EducaHost",
  stack: ["HTML", "CSS", "JavaScript"],
  repoUrl: "https://github.com/emanuelmartinslima/Projeto-Educahost",
  description:
    "Plataforma educacional desenvolvida como complemento estudantil para crianças refugiadas. O objetivo é auxiliar na adaptação ao território brasileiro e no aprendizado por meio de atividades gamificadas, tornando esse processo leve e divertido.",
};

const imagens = [
  {
    src: imagemInicio,
    legenda: "Página inicial do EducaHost",
  },
  {
    src: imagemModulo,
    legenda: "Tela de módulos educacionais",
  },
  {
    src: imagemUsuario,
    legenda: "Tela de perfil do usuário",
  },
];

export default function EducaHost() {
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
      <Cabecalho/>
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
    aria-label="Imagens do EducaHost"
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

      <a
        href={imagens[indice].src}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel-image-link"
        aria-label={`Ampliar: ${imagens[indice].legenda}`}
      >
        <img
          src={imagens[indice].src}
          alt={imagens[indice].legenda}
          className="carousel-image"
        />
      </a>

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