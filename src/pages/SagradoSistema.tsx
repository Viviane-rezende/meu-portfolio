import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import "./Home.css";
import "./Projetos.css";

import imagemInicio from "../assets/SagradoSistema1.png";
import imagemMenu from "../assets/SagradoSistema2.png";
import imagemContratos from "../assets/SagradoSistema3.png";



import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

const featuredProject = {
  title: "Sagrado Sistema",
  stack: ["HTML", "CSS", "JavaScript"],
  repoUrl: "https://github.com/emanuelmartinslima/ProjetoPI2-Sagrado-Sistema",
  description:
    "Plataforma de gestão de contratos e clientes para uma empresa de serviços. O objetivo é facilitar o gerenciamento de informações, permitindo que a empresa acompanhe o status dos contratos, mantenha registros precisos e melhore a comunicação com os clientes.",
};

const imagens = [
  {
    src: imagemInicio,
    legenda: "Página inicial do Sagrado Sistema",
  },
  {
    src: imagemMenu,
    legenda: "Menu",
  },
  {
    src: imagemContratos,
    legenda: "Tela de Contratos",
  },
];

export default function SagradoSistema() {
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
    <main>
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
    aria-label="Imagens do SagradoSistema"
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