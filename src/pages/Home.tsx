import "./Home.css";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import fotoPerfil from "../assets/viviane-foto-perfil.jpg"
import { Link } from "react-router-dom";


const jobs = [
  {
    company: "Binário Net",
    role: "Assistente Q.A.",
    period: "Maio de 2026 - Até o momento",
    description:
      "Criação e manutenção de dashboards no Power BI para as operações de Suporte de Redes. Consultas e aprimoramentos em MySQL/MariaDB. Acompanhamento de KPI's para diretoria e clientes, garantindo a qualidade dos dados e relatórios.",
  },
  {
    company: "Binário Net",
    role: "Estagiária de Redes",
    period: "Junho de 2025 até Maio de 2026",
    description:
      "Suporte às operações de redes, acompanhando chamados, auxiliando na identificação e resolução de problemas de conectividade.\
      Contribuição com o monitoramento de rede e documentações técnicas.",
  },
  {
    company: "Estúdio de Beleza",
    role: "Profissional de Estética",
    period: "Outubro de 2021 até novembro de 2023",
    description:
      "Atendimento e procedimentos estéticos - experiência que hoje molda meu olhar de produto e atenção aos detalhe em QA.",
  },
];

const extensionCourses = [
  {
    name: "Desenvolvimento de Sistemas",
    institution: "SENAC SP - Projeto Gerando Falcões",
    hours: 40,
    period: "Novembro 2024 até maio de 2025",
  }
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Espanhol", level: "Avançado" },
  { name: "Inglês", level: "Intermediário" },
];

const projects = [
  { id: "EducaHost", category: "1º Semestre", title: "EducaHost", link: "/projetos/educahost", summary: "Plataforma educacional - HTML, CSS, JavaScript" },
  { id: "SagradoSistema", link: "/projetos/sagrado-sistema", category: "2º Semestre", title: "Sagrado Sistema", summary: "Plataforma de Gestão - HTML, CSS, JavaScript" },
  { id: "EcoBalance", link: "/projetos/eco-balance", category: "3º Semestre", title: "Eco Balance", summary: "Plataforma de Rastreamento de Carbono - React, TypeScript" },
  { id: "QeM", link: "/projetos/qem", category: "4º Semestre", title: "Questões e Masmorras", summary: "Plataforma de Gamificação para Estudos - React Native, TypeScript" },
  { id: "EcoBalanceMobile", link: "/projetos/eco-balance-mobile", category: "5º Semestre", title: "Eco Balance Mobile", summary: "App mobile de rastreamento de carbono - React Native, TypeScript" },
];

{/*const curso = [
  { chave: "Faculdade", valor: "FATEC Zona Leste" },
  { chave: "Curso", valor: "Desenvolvimento de Software Multiplataforma" },
  { chave: "Ano início", valor: "2024.1" },
  { chave: "Ano término", valor: "2026.12" },

]*/}


export default function Home() {
  return (
    <>
      <Section image={fotoPerfil} imageAlt="Foto de Viviane Rezende Silva">

        <Avatar initials="V">

        </Avatar>
        <h1 className="hero-name">Viviane Rezende Silva</h1>
        <p className="hero-role">
          Da estética à tecnologia, construí uma nova trajetória com coragem e dedicação. Hoje, atuo como Assistente de Garantia da Qualidade (QA) e estou no último semestre de Desenvolvimento de Software Multiplataforma na FATEC Zona Leste.
        </p>

        <div>

          <Badge><Button href="https://github.com/Viviane-Rezende" variant="outline">
            github.com/viviane-rezende ↗
          </Button></Badge>
        </div>
        {/* <div className="hero-facts">
          <span>FATEC Zona Leste</span>
        </div> */}


      </Section>

      <Section title="Acadêmico">
        <div className="academic-info">
          <h3>Desenvolvimento de Software Multiplataforma</h3>
          <p className="academic-institution">FATEC Zona Leste</p>

          <div className="academic-dates">
            <div>
              <span className="academic-label">Início</span>
              <p>1º semestre de 2024</p>
            </div>

            <div>
              <span className="academic-label">Conclusão prevista</span>
              <p>Dezembro de 2026</p>
            </div>
          </div>

          <Badge variant="accent">Cursando o último semestre</Badge>
        </div>
      </Section>



      <Section title="Experiência profissional">
        <div className="stack-list">
          {jobs.map((job) => (
            <Card key={`${job.company}-${job.role}`} title={`${job.role} · ${job.company}`}>
              <p className="muted">{job.period}</p>
              <p>{job.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Formação complementar">
        <div className="stack-list">
          {extensionCourses.map((course) => (
            <Card key={course.name} title={course.name}>
              <p className="muted">
                {course.institution} · {course.hours}h · {course.period}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Idiomas">
        <div className="lang-list">
          {languages.map((lang) => (
            <Card key={lang.name}>
              <div className="lang-row">
                <span>{lang.name}</span>
                <Badge variant="turquoise">{lang.level}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Projetos" count={`${projects.length} projetos`}>
  <div className="projects-grid">
    {projects.map((project) => (
      <Link
        key={project.id}
        to={`/projetos/${project.id}`}
        className="project-link"
      >
        <Card
          title={project.title}
          footer={<Badge variant="accent">{project.category}</Badge>}
        >
          <p>{project.summary}</p>
        </Card>
      </Link>
    ))}
  </div>
</Section>


      <footer className="page-footer">Hospedado via GitHub Pages · © 2026 Viviane Rezende</footer>
    </>
  );
}
