import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Badge from "../components/Badge";
import "./Home.css";
import "./Projetos.css";

import imagemLogin from "../assets/EcoBalanceMobile1.png";
import imagemConquista from "../assets/EcoBalanceMobile2.png";
import imagemInicio from "../assets/EcoBalanceMobile3.png";
import { useState } from "react";
import Cabecalho from "../components/Cabecalho";

const featuredProject = {
  title: "EcoBalance Mobile",
  stack: ["React Native", "TypeScript", "JavaScript"],
  repoUrl: "https://github.com/littlerichard01/EcoBalance-mobile",
  description:
    "Plataforma de rastreamento de carbono desenvolvida para auxiliar empresas e indivíduos a monitorar e reduzir sua pegada de carbono. O objetivo é fornecer informações sobre as emissões de gases de efeito estufa, permitindo que os usuários adotem práticas mais sustentáveis e contribuam para a preservação do meio ambiente.",
  contribuition: "Contribuí com o desenvolvimento das interfaces do aplicativo utilizando React Native, trabalhando na construção das telas, na estilização dos componentes e na navegação. Minha atuação foi voltada à adaptação da experiência para dispositivos móveis."
};

const imagens = [
  {
    src: imagemLogin,
    legenda: "Tela de login do EcoBalance Mobile",
  },
  {
    src: imagemConquista,
    legenda: "Tela de conquistas",
  },
  {
    src: imagemInicio,
    legenda: "Tela inicial de conquistas e gráficos de desempenho",
  },
];

export default function EcoBalanceMobile() {
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
          <p className="projeto-contribuicao">
            <b>
              Minha Contribuição:</b> {featuredProject.contribuition}
          </p>
        </Card>
      </Section>

      <Section title="O projeto em funcionamento">
        <div
          className="project-carousel"
          role="region"
          aria-label="Imagens do EcoBalanceMobile"
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