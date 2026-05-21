"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import scrollToSection from "../functions/scrollTo";
import Reveal from "./reveal";

const LINES = [
  { id: "greeting", text: "Olá, eu sou", speed: 55 },
  { id: "name",     text: "Gustavo Henrique", speed: 60 },
  { id: "role",     text: "Desenvolvedor de Software · FATEC-SJC", speed: 30 },
];

function useTypingSequence() {
  const [typed, setTyped] = useState<Record<string, string>>({});
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function typeAll() {
      await new Promise((r) => setTimeout(r, 400));

      for (const line of LINES) {
        if (cancelled) return;
        setVisible((v) => ({ ...v, [line.id]: true }));

        for (let i = 0; i <= line.text.length; i++) {
          if (cancelled) return;
          const slice = line.text.slice(0, i);
          setTyped((t) => ({ ...t, [line.id]: slice }));
          await new Promise((r) => setTimeout(r, line.speed));
        }
        await new Promise((r) => setTimeout(r, 120));
      }
      setDone(true);
    }

    typeAll();
    return () => { cancelled = true; };
  }, []);

  return { typed, visible, done };
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { typed, visible, done } = useTypingSequence();

  // partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;
    type P = { x:number;y:number;r:number;dx:number;dy:number;alpha:number;aDir:number };
    let pts: P[] = [];
    let W = 0, H = 0;
    function resize() { W = canvas!.width = canvas!.offsetWidth; H = canvas!.height = canvas!.offsetHeight; }
    function mkP(): P { return { x:rand(0,W),y:rand(0,H),r:rand(0.8,2.2),dx:rand(-0.18,0.18),dy:rand(-0.22,-0.08),alpha:rand(0.15,0.55),aDir:rand(0.003,0.008) }; }
    function init() { resize(); pts = Array.from({length:80},mkP); }
    function draw() {
      ctx!.clearRect(0,0,W,H);
      for (const p of pts) {
        p.x+=p.dx; p.y+=p.dy; p.alpha+=p.aDir;
        if(p.alpha>=0.55||p.alpha<=0.08) p.aDir*=-1;
        if(p.y<-4){p.y=H+4;p.x=rand(0,W);}
        if(p.x<-4)p.x=W+4; if(p.x>W+4)p.x=-4;
        ctx!.beginPath(); ctx!.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx!.fillStyle=`rgba(34, 211, 238, ${p.alpha})`; ctx!.fill();
      }
      animId=requestAnimationFrame(draw);
    }
    init(); draw();
    const obs = new ResizeObserver(resize); obs.observe(canvas);
    return () => { cancelAnimationFrame(animId); obs.disconnect(); };
  }, []);

  const showCursor = (id: string) =>
    visible[id] && !done && typed[LINES[LINES.length - 1].id] !== LINES[LINES.length - 1].text
      ? typed[id] !== undefined && LINES.findIndex(l => l.id === id) === LINES.findLastIndex((_, i) => visible[LINES[i].id])
      : false;

  // cursor pisca na linha sendo digitada
  const activeLine = done ? null : [...LINES].reverse().find(l => visible[l.id])?.id;

  return (
    <div
      className="h-screen flex flex-col justify-center text-center relative overflow-hidden"
      id="home"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 p-6 h-5/6 flex flex-col lg:flex-row justify-center items-center gap-10 mt-14">

        {/* Foto mobile */}
        <Reveal className="lg:hidden">
          <div className="flex items-center justify-center">
            <div className="rounded-full w-52 h-52 border-app-accent-soft border-2 bg-hero-image bg-cover bg-center" />
          </div>
        </Reveal>

        {/* Título com digitação */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

          {/* Linha 1 — saudação */}
          <div className="h-7 mb-1">
            {visible.greeting && (
              <span className="text-sm lg:text-base font-medium text-app-accent tracking-widest uppercase">
                {typed.greeting}
                {activeLine === "greeting" && (
                  <span className="inline-block w-0.5 h-4 bg-app-accent ml-0.5 align-middle animate-pulse" />
                )}
              </span>
            )}
          </div>

          {/* Linha 2 — nome */}
          <div className="h-16 lg:h-20 mb-1">
            {visible.name && (
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {typed.name}
                {activeLine === "name" && (
                  <span className="inline-block w-1 h-12 lg:h-14 bg-app-accent ml-1 align-middle animate-pulse" />
                )}
              </h1>
            )}
          </div>

          {/* Linha 3 — cargo */}
          <div className="h-8 mb-8">
            {visible.role && (
              <p className="text-xl lg:text-2xl text-app-muted">
                {typed.role}
                {activeLine === "role" && (
                  <span className="inline-block w-0.5 h-5 bg-app-accent ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            )}
          </div>

          {/* Links — aparecem quando tudo termina */}
          <div className={`flex gap-6 transition-opacity duration-700 ${done ? "opacity-100" : "opacity-0"}`}>
            <Link target="_blank" href="https://github.com/gustavohpereira">
              <Image src="GitHub.svg" alt="github logo" width={48} height={48} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/gustavohpa/">
              <Image src="linkedin.svg" alt="linkedin logo" width={48} height={48} />
            </Link>
          </div>
        </div>

        {/* Foto desktop */}
        <Reveal className="hidden lg:block">
          <div className="border-l-4 border-app-accent-soft pl-6 h-3/5 flex items-center justify-center">
            <div className="rounded-full w-80 h-80 border-app-accent-soft border-2 bg-hero-image bg-cover bg-center mx-16" />
          </div>
        </Reveal>
      </div>

      {/* Botão scroll */}
      <div className={`relative z-10 flex justify-center pb-6 transition-opacity duration-700 ${done ? "opacity-100" : "opacity-0"}`}>
        <button
          className="rounded-full border-2 text-app-accent-soft border-app-accent-soft w-16 h-16 flex justify-center items-center hover:bg-app-accent-soft hover:text-app-inverted ease-in-out duration-1000"
          onClick={() => scrollToSection("about")}
          aria-label="Ir para sobre mim"
        >
          <FaLongArrowAltDown size={28} />
        </button>
      </div>
    </div>
  );
}
