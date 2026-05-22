import HeroSection from "./components/heroSection";
import AboutMe from "./components/aboutMe";
import Tecnologies from "./components/Tecnologies";
import ProjetosComponent from "./components/Projetos";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="relative">
      <GoogleTagManager gtmId="GTM-MFNZNVX6" />


      {/* Conteúdo */}
      <div className="relative z-10">
        <HeroSection />
        <AboutMe />
        <Tecnologies />
        <ProjetosComponent />
      </div>
    </div>
  );
}