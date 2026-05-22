"use client";
import scrollToSection from "../functions/scrollTo";

export default function Header() {
  const buttonColor =
    "text-xs font-medium tracking-wide  text-app-text transition-colors duration-300 hover:text-app-accent-soft focus-visible:outline-none focus-visible:text-app-accent-soft sm:text-sm lg:text-lg";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-app-border/40 bg-app-surface/50 py-4 shadow-lg shadow-app-overlay/20 backdrop-blur-md lg:flex lg:justify-center">
      <nav className="flex w-full justify-center gap-3 px-3 sm:gap-5 lg:w-1/2 lg:gap-20">
        <button className={buttonColor} onClick={() => scrollToSection("home")}>
          INICIO
        </button>
        <button
          className={buttonColor}
          onClick={() => scrollToSection("about")}
        >
          SOBRE MIM
        </button>
        <button
          className={buttonColor}
          onClick={() => scrollToSection("technologies")}
        >
          TECNOLOGIAS
        </button>
        <button
          className={buttonColor}
          onClick={() => scrollToSection("project")}
        >
          PROJETOS
        </button>
      </nav>
    </header>
  );
}
