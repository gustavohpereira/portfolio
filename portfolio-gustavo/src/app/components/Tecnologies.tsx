"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "./reveal";

const categories = ["Todos", "Front-end", "Back-end", "Outros"];

const categoryStyles: Record<string, { card: string; icon: string }> = {
  "Front-end": {
    card: "bg-purple-950/20 border-purple-400/15 hover:border-purple-400/35",
    icon: "bg-purple-400/10 text-purple-300",
  },
  "Back-end": {
    card: "bg-violet-950/20 border-violet-400/15 hover:border-violet-400/35",
    icon: "bg-violet-400/10 text-violet-300",
  },
  Outros: {
    card: "bg-orange-950/20 border-orange-400/15 hover:border-orange-400/35",
    icon: "bg-orange-400/10 text-orange-300",
  },
};

const tecnologies = [
  { name: "git",                        category: "Outros"    },
  { name: "docker",                     category: "Outros"    },
  { name: "figma",                      category: "Outros"    },
  { name: "power BI",                   category: "Outros"    },
  { name: "jest",                       category: "Outros"    },
  { name: "aws",                        category: "Outros"    },
  { name: "desenvolvimento agil (scrum)", category: "Outros"  },
  { name: "java",                       category: "Back-end"  },
  { name: "python",                     category: "Back-end"  },
  { name: "php",                        category: "Back-end"  },
  { name: "node",                       category: "Back-end"  },
  { name: "golang",                     category: "Back-end"  },
  { name: "typeScript",                 category: "Back-end"  },
  { name: "javaScript",                 category: "Back-end"  },
  { name: "express",                    category: "Back-end"  },
  { name: "nestjs",                     category: "Back-end"  },
  { name: "django",                     category: "Back-end"  },
  { name: "flask",                      category: "Back-end"  },
  { name: "typeORM",                    category: "Back-end"  },
  { name: "pandas",                     category: "Back-end"  },
  { name: "mysql",                      category: "Back-end"  },
  { name: "firebase",                   category: "Back-end"  },
  { name: "postgree",                   category: "Back-end"  },
  { name: "Next",                       category: "Front-end" },
  { name: "bootstrap",                  category: "Front-end" },
  { name: "axios",                      category: "Front-end" },
  { name: "Tailwind css",               category: "Front-end" },
  { name: "Angular",                    category: "Front-end" },
  { name: "css",                        category: "Front-end" },
  { name: "React",                      category: "Front-end" },
  { name: "React Native",               category: "Front-end" },
];

export default function Tecnologies() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filtered =
    selectedCategory === "Todos"
      ? tecnologies
      : tecnologies.filter((t) => t.category === selectedCategory);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div
      className="w-full relative overflow-hidden  py-20 px-6"
      id="tecnologies"
    >

      <Reveal name="tecnologies" className="relative z-10 flex flex-col items-center">
        {/* Cabeçalho */}
        <span className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-3">
          habilidades
        </span>
        <h1 className="text-5xl font-semibold mb-8 text-center">TECNOLOGIAS</h1>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                selectedCategory === cat
                  ? "border-purple-400 text-purple-400 bg-purple-400/10"
                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full max-w-5xl">
          {filtered.map((tech, i) => {
            const style = categoryStyles[tech.category];
            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${style.card}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.icon}`}>
                  <Image
                    src={`${tech.name}.svg`}
                    alt={`${tech.name} logo`}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xs text-neutral-300 text-center leading-tight">
                  {capitalize(tech.name)}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}