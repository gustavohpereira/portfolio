"use client";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaGithub } from "react-icons/fa";
import SliderData from "@/data/SliderData";
import Reveal from "./reveal";
import Link from "next/link";

export default function ProjetosComponent() {
  const slides = SliderData;
  const [current, setCurrent] = useState(0);

  const previousSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const slide = slides[current];
  const isVideo = slide.source.toLowerCase().endsWith(".mp4");

  return (
    <div
      className="w-full relative overflow-hidden py-20 px-6"
      
      id="project"
    >


      <Reveal className="relative z-10 flex flex-col items-center">
        {/* Cabeçalho */}
        <span className="text-xs font-medium text-app-accent tracking-widest uppercase mb-3">
          portfólio
        </span>
        <h1 className="text-5xl lg:text-6xl font-semibold mb-12 text-center">
          MEUS PROJETOS
        </h1>

        <div className="w-full max-w-3xl">
          {/* Slider */}
          <div className="flex items-center gap-4">
            <button
              onClick={previousSlide}
              className="flex-shrink-0 rounded-full border-2 text-app-accent-soft border-app-accent-soft/40 w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center hover:bg-app-accent-soft hover:text-app-inverted hover:border-app-accent-soft ease-in-out duration-500"
              aria-label="Projeto anterior"
            >
              <FaLongArrowAltLeft size={20} />
            </button>

            {/* Imagem */}
            <div className="flex-1 border border-app-accent-soft/20 rounded-2xl overflow-hidden bg-app-surface-soft aspect-video relative">
              {isVideo ? (
                <video
                  src={slide.source}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={slide.name}
                />
              ) : (
                <img
                  src={slide.source}
                  alt={slide.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              )}
              <div className="absolute top-3 right-3 bg-app-overlay/60 backdrop-blur-sm text-app-accent-strong text-xs px-3 py-1 rounded-full border border-app-accent/20">
                {current + 1} / {slides.length}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="flex-shrink-0 rounded-full border-2 text-app-accent-soft border-app-accent-soft/40 w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center hover:bg-app-accent-soft hover:text-app-inverted hover:border-app-accent-soft ease-in-out duration-500"
              aria-label="Próximo projeto"
            >
              <FaLongArrowAltRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-5">
            {slides.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-app-accent-strong w-6"
                    : "bg-app-subtle w-2 hover:bg-app-muted"
                }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>

          {/* Info do projeto */}
          <div className="mt-8 flex flex-col items-center text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-3">{slide.name}</h2>

            <div className="flex items-center gap-2 bg-app-accent/10 border border-app-accent/20 rounded-full px-4 py-1.5 text-sm text-app-accent-strong mb-6">
              <span>🛠</span>
              <span>{slide.technologies}</span>
            </div>

            <hr className="w-full border-app-border/50 mb-6" />

            <p className="text-base lg:text-lg text-app-muted leading-relaxed max-w-xl mb-8 px-2">
              {slide.description}
            </p>

            <Link
              target="_blank"
              href={slide.gitLink}
              className="flex items-center gap-3 border-2 border-app-accent-soft/50 rounded-full px-8 py-3 text-app-accent-soft font-medium hover:bg-app-accent-soft hover:text-app-inverted hover:border-app-accent-soft ease-in-out duration-700 transition-all"
            >
              <FaGithub size={18} />
              Ver código no GitHub
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
