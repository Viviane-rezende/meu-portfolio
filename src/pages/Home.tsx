import "./Home.css";
import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import fotoPerfil from "../assets/viviane-foto-perfil.jpg"

// --- dados (troque por um arquivo em src/data quando fizer sentido) ---

const jobs = [
  {
    company: "Binário Net",
    role: "Assistente Q.A.",
    period: "out. 2023 — atual",
    description:
      "Monitoramento de indicadores operacionais e KPIs em Power BI para as operações DASA, CLARO/FUST, EACE, RNP e SOC/NOC, com consultas em MySQL/MariaDB.",
  },
  {
    company: "Estúdio de Estética",
    role: "Esteticista",
    period: "2019 — 2023",
    description:
      "Atendimento e procedimentos estéticos — experiência que hoje molda seu olhar de produto e atenção a detalhe em QA.",
  },
];

const extensionCourses = [
  {
    name: "DAX para Power BI — nível avançado",
    institution: "Instituição",
    hours: 40,
    period: "mar. 2025 — abr. 2025",
  },
  {
    name: "Fundamentos de MySQL",
    institution: "Instituição",
    hours: 20,
    period: "nov. 2024",
  },
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];

const projects = [
  { id: "kpi-dashboard", category: "React", title: "Dashboard KPI", summary: "Painel de indicadores em React + TS" },
  { id: "views-manager", category: "SQL", title: "Gestor de Views", summary: "Automação de views MySQL" },
  { id: "multi-app", category: "Mobile", title: "App Multiplataforma", summary: "App híbrido de estudos" },
  { id: "tickets-api", category: "API", title: "API de Tickets", summary: "Integração com Znuny/OTRS" },
  { id: "beauty-landing", category: "Web", title: "Landing Beauty-Tech", summary: "Site institucional" },
];

const curso = [
  { chave: "Faculdade", valor: "FATEC Zona Leste" },
  { chave: "Curso", valor: "Desenvolvimento de Software Multiplataforma" },
  { chave: "Ano início", valor: "2024.1" },
  { chave: "Ano término", valor: "2026.12" },


]

const featuredProject = {
  title: "Dashboard KPI Multi-operação",
  stack: ["React", "TypeScript", "Power BI Embedded", "DAX"],
  repoUrl: "https://github.com/vivi/kpi-dashboard",
  description:
    "Painel único reunindo indicadores das operações DASA, CLARO/FUST, EACE, RNP e SOC/NOC, com filtros por operação e período.",
  contribution:
    "Modelagem de dados, criação das medidas DAX e desenvolvimento da interface em React consumindo os relatórios via Power BI Embedded.",
};

export default function Home() {
  return (
    <>
      <Section image={fotoPerfil} imageAlt="Foto de Viviane Rezende Silva">

        <Avatar initials="V">

        </Avatar>
        <h1>Viviane Rezende Silva</h1>
        <p className="hero-role">
          Da estética a tecnologia. Com coragem, fiz transição de carreira e hoje estou como Assistente Q.A
          e no último semestre do curso superior em Desenvolvimento de Software Multiplataforma.
        </p>
        <div className="hero-facts">
          <span>FATEC Zona Leste</span>
        </div>

        <Section title="Acadêmico">
          <div className="chip-row">
            {curso.map((acad) => (
              <Badge key={acad.valor} variant="accent">
                {acad.valor}
              </Badge>
            ))}
          </div>
        </Section>

        <Button href="https://github.com/Viviane-Rezende" variant="outline">
          github.com/vivi ↗
        </Button>
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

      <Section title="Projetos" count={`0${projects.length} semestres`}>
        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              onClick={() => {
                // navegue até a rota de detalhe, ex.: navigate(`/projetos/${project.id}`)
              }}
              footer={<Badge variant="accent">{project.category}</Badge>}
            >
              <p>{project.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Tela de projeto" count="exemplo">
        <Card
          title={featuredProject.title}
          footer={<Button href={featuredProject.repoUrl}>Ver código no GitHub</Button>}
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
          <p>
            <b>Minha participação:</b> {featuredProject.contribution}
          </p>
        </Card>
      </Section>

      <footer className="page-footer">Hospedado via GitHub Pages · © 2026 Vivi Silva</footer>
    </>
  );
}
