import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import "./Home.css";
import "./Projetos.css";

import imagemInicio from "../assets/EcoBalance1.png";
import imagemModulo from "../assets/EcoBalance2.png";
import imagemGrafico from "../assets/EcoBalance3.png";
import { useState } from "react";

const featuredProject = {
  title: "EcoBalance",
  stack: ["HTML", "CSS", "JavaScript"],
  repoUrl: "https://github.com/littlerichard01/EcoBalance",
  description:
    "Plataforma de rastreamento de carbono desenvolvida para auxiliar empresas e indivíduos a monitorar e reduzir sua pegada de carbono. O objetivo é fornecer informações sobre as emissões de gases de efeito estufa, permitindo que os usuários adotem práticas mais sustentáveis e contribuam para a preservação do meio ambiente.",
};

const imagens = [
  {
    src: imagemInicio,
    legenda: "Página inicial do EcoBalance",
  },
  {
    src: imagemModulo,
    legenda: "Tela de cadastro de alimentos",
  },
  {
    src: imagemGrafico,
    legenda: "Tela de gráficos de desempenho",
  },
];

export default function EcoBalance() {
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
    aria-label="Imagens do EcoBalance"
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