"use client";
import Link from "next/link";
import { useState } from "react";
import { SlDocs } from "react-icons/sl";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import Reveal from "./reveal";
import { sendGTMEvent } from "@next/third-parties/google";

const highlights = [
  "Cursando Análise e Desenvolvimento de Sistemas na FATEC-SJC desde 2022",
  "Experiência de estágio na área desde 2023",
  "Interesse em projetos inovadores que transformam ideias em realidade",
  "Comunicação clara e colaboração efetiva em equipe",
];

export default function AboutMe() {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  }

  const handleEmailClick = () => {
    copyToClipboard("gustavohpa2003@gmail.com");
    sendGTMEvent({ event: "email_click", value: "email_click" });
  };

  const buttonColor =
    "border-2 border-purple-200 rounded-full w-full hover:bg-purple-200 hover:border-black hover:text-black ease-in-out duration-1000 flex items-center whitespace-nowrap";

  return (
    <div
      className="w-full relative overflow-hidden  px-10 py-20"
      id="about"
    >

      <Reveal
        className="relative z-10 flex flex-col lg:flex-row w-full justify-center items-center gap-12 lg:gap-20 max-w-5xl mx-auto"
        name="about"
      >
        {/* Botões */}
        <div className="flex flex-col justify-center items-center gap-6 w-full lg:w-56 flex-shrink-0 order-2 lg:order-1">
          <Link
            onClick={() => sendGTMEvent({ action: "CVclick", category: "Link", label: "ver-curriculo" })}
            href="/curriculo.pdf"
            target="_blank"
            className={buttonColor}
          >
            <span className="border-r border-purple-200/40 p-4 flex justify-center items-center">
              <SlDocs size={20} />
            </span>
            <span className="px-4">Ver Currículo</span>
          </Link>

          <button className={buttonColor} onClick={handleEmailClick}>
            <span className="border-r border-purple-200/40 p-4 flex justify-center items-center">
              {isCopied ? <MdMarkEmailRead size={20} /> : <MdEmail size={20} />}
            </span>
            <span className="px-4">{isCopied ? "Copiado!" : "Copiar email"}</span>
          </button>
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-1 lg:order-2">
          <span className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-4">
            sobre mim
          </span>

          <h1 className="text-4xl lg:text-6xl font-semibold mb-6">SOBRE MIM</h1>

          <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8">
            Sou apaixonado por tecnologia e acredito que bom código nasce da
            combinação entre lógica e comunicação. Busco sempre criar soluções
            que façam a diferença — tanto para quem usa quanto para quem mantém.
          </p>

          <ul className="flex flex-col gap-4 w-full">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base lg:text-lg text-neutral-400">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}