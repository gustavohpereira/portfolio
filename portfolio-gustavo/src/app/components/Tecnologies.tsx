"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "./reveal";

export default function Tecnologies() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const tecnologies = [
    { name: "git", category: "Outros" },
    { name: "docker", category: "Outros" },
    { name: "figma", category: "Outros" },
    { name: "power BI", category: "Outros" },
    { name: "jest", category: "Outros" },
    { name: "aws", category: "Outros" },
    { name: "desenvolvimento agil (scrum)", category: "Outros" },
    { name: "java", category: "Back-end" },
    { name: "python", category: "Back-end" },
    { name: "php", category: "Back-end" },
    { name: "node", category: "Back-end" },
    { name: "express", category: "Back-end" },
    { name: "django", category: "Back-end" },
    { name: "flask", category: "Back-end" },
    { name: "mysql", category: "Back-end" },
    { name: "firebase", category: "Back-end" },
    { name: "postgree", category: "Back-end" },
    { name: "golang", category: "Back-end" },
    { name: "nestjs", category: "Back-end" },
    {name: "pandas", category: "Back-end"},
    { name: "Next", category: "Front-end" },
    { name: "typeScript", category: "Back-end" },
    { name: "javaScript", category: "Back-end" },
    { name: "bootstrap", category: "Front-end" },
    { name: "Tailwind css", category: "Front-end" },
    { name: "Angular", category: "Front-end" },
    { name: "css", category: "Front-end" },
    { name: "React", category: "Front-end" },
    { name: "React Native", category: "Front-end" },
    
  ];

  const capitalizeFirstLetter = (string:String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const categories = ["Todos", "Front-end", "Back-end", "Outros"];

  const filteredTecnologies =
    selectedCategory === "Todos"
      ? tecnologies
      : tecnologies.filter((tecnology) => tecnology.category === selectedCategory);

  return (
    <div className="w-full flex justify-center my-10" id="tecnologies">
      <Reveal name="tecnologies" className="flex justify-center">
        <div className="flex flex-col items-center p-10 ">
          <h1 className="text-5xl ">TECNOLOGIAS</h1>
          <div className="py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 m-2 ${selectedCategory === category ? "border-b-2 border-white text-white" : ""
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="py-10 w-full flex gap-12 flex-wrap justify-center content-center">
            {filteredTecnologies.map((tecnology, index) => (
              <div
                className="flex flex-col justify-between items-center"
                key={index}
              >
                <Image
                  src={tecnology.name + ".svg"}
                  alt={tecnology.name + " logo"}
                  width={64}
                  height={64}
                ></Image>
                <h4 className="text-l">{capitalizeFirstLetter(tecnology.name)}</h4>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}