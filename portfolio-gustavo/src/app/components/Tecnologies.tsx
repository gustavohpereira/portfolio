"use client";

import { useMemo, useState } from "react";
import Reveal from "./reveal";

const categories = ["Todos", "Front-end", "Back-end", "Banco de Dados", "DevOps", "IA & Outros"];

const categoryStyles: Record<
  string,
  {
    card: string;
    icon: string;
    badge: string;
  }
> = {
  "Front-end": {
    card: "bg-tech-frontend-surface/20 border-tech-frontend/10 hover:border-tech-frontend/30",
    icon: "bg-tech-frontend/10",
    badge: "text-tech-frontend",
  },

  "Back-end": {
    card: "bg-tech-backend-surface/20 border-tech-backend/10 hover:border-tech-backend/30",
    icon: "bg-tech-backend/10",
    badge: "text-tech-backend",
  },

  "Banco de Dados": {
    card: "bg-tech-database-surface/20 border-tech-database/10 hover:border-tech-database/30",
    icon: "bg-tech-database/10",
    badge: "text-tech-database",
  },

  DevOps: {
    card: "bg-tech-devops-surface/20 border-tech-devops/10 hover:border-tech-devops/30",
    icon: "bg-tech-devops/10",
    badge: "text-tech-devops",
  },

  "IA & Outros": {
    card: "bg-tech-ai-surface/20 border-tech-ai/10 hover:border-tech-ai/30",
    icon: "bg-tech-ai/10",
    badge: "text-tech-ai",
  },
};

const technologies = [
  // FRONT-END
  { name: "React", icon: "react", category: "Front-end" },
  { name: "Next.js", icon: "nextjs", category: "Front-end" },
  { name: "Vue.js", icon: "vue", category: "Front-end" },
  { name: "React Native", icon: "react", category: "Front-end" },
  { name: "Angular", icon: "angular", category: "Front-end" },
  { name: "TypeScript", icon: "ts", category: "Front-end" },
  { name: "JavaScript", icon: "js", category: "Front-end" },
  { name: "TailwindCSS", icon: "tailwind", category: "Front-end" },
  { name: "Bootstrap", icon: "bootstrap", category: "Front-end" },
  { name: "CSS3", icon: "css", category: "Front-end" },
  { name: "HTML5", icon: "html", category: "Front-end" },

  // BACK-END
  { name: "Node.js", icon: "nodejs", category: "Back-end" },
  { name: "NestJS", icon: "nestjs", category: "Back-end" },
  { name: "Express.js", icon: "express", category: "Back-end" },
  { name: "Python", icon: "python", category: "Back-end" },
  { name: "Django", icon: "django", category: "Back-end" },
  { name: "Flask", icon: "flask", category: "Back-end" },
  { name: "Java", icon: "java", category: "Back-end" },
  { name: "Spring Boot", icon: "spring", category: "Back-end" },
  { name: "PHP", icon: "php", category: "Back-end" },

  // DATABASE
  { name: "PostgreSQL", icon: "postgres", category: "Banco de Dados" },
  { name: "MySQL", icon: "mysql", category: "Banco de Dados" },
  { name: "MongoDB", icon: "mongodb", category: "Banco de Dados" },
  { name: "Firebase", icon: "firebase", category: "Banco de Dados" },
  { name: "SQL Server", icon: "sqlite", category: "Banco de Dados" },

  // DEVOPS
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "AWS", icon: "aws", category: "DevOps" },
  { name: "Git", icon: "git", category: "DevOps" },
  { name: "RabbitMQ", icon: "rabbitmq", category: "DevOps" },
  { name: "Jest", icon: "jest", category: "DevOps" },

  // IA & OUTROS
  { name: "Pandas", icon: "python", category: "IA & Outros" },
  { name: "LangChain", icon: "python", category: "IA & Outros" },
  { name: "LangGraph", icon: "python", category: "IA & Outros" },
  { name: "OCR", icon: "opencv", category: "IA & Outros" },
  { name: "Power BI", icon: "azure", category: "IA & Outros" },
  { name: "Scrum", icon: "github", category: "IA & Outros" },
];

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredTechnologies = useMemo(() => {
    if (selectedCategory === "Todos") return technologies;

    return technologies.filter(
      (tech) => tech.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="technologies"
      className="relative w-full overflow-hidden py-24 px-6"
    >
      <Reveal name="technologies">
        <div className="flex flex-col items-center">
          {/* HEADER */}
          <span className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-app-accent">
            habilidades
          </span>

          <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight">
            Tecnologias
          </h2>

          <p className="mt-4 max-w-2xl text-center text-app-muted leading-relaxed">
            Tecnologias e ferramentas utilizadas no desenvolvimento de aplicações
            modernas, APIs escaláveis, microsserviços e soluções com IA.
          </p>

          {/* FILTERS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "border-app-accent bg-app-accent/10 text-app-accent-strong"
                        : "border-app-border bg-app-surface/40 text-app-muted hover:border-app-subtle hover:text-app-text-strong"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          <div className="mt-14 grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredTechnologies.map((tech) => {
              const style = categoryStyles[tech.category];

              return (
                <div
                  key={tech.name}
                  className={`
                    group relative overflow-hidden rounded-2xl border p-5
                    backdrop-blur-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                    ${style.card}
                  `}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-app-text-strong/[0.03] to-transparent" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* ICON */}
                    <div
                      className={`
                        mb-4 flex h-16 w-16 items-center justify-center rounded-2xl
                        transition-transform duration-300 group-hover:scale-110
                        ${style.icon}
                      `}
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.icon}`}
                        alt={tech.name}
                        className="h-10 w-10"
                        loading="lazy"
                      />
                    </div>

                    {/* NAME */}
                    <h3 className="text-sm font-medium text-app-text-strong">
                      {tech.name}
                    </h3>

                    {/* CATEGORY */}
                    <span
                      className={`mt-2 text-xs font-medium ${style.badge}`}
                    >
                      {tech.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
