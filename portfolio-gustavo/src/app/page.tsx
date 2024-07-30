import Image from "next/image";
import HeroSection from "./components/heroSection";
import AboutMe from "./components/aboutMe";
import Tecnologies from "./components/Tecnologies";
import ProjetosComponent from "./components/Projetos";
import Footer from "./components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div>
      <GoogleTagManager gtmId="GTM-MFNZNVX6" />
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Tecnologies></Tecnologies>
      <ProjetosComponent></ProjetosComponent>
    </div>
  );
}
