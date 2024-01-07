import Image from 'next/image'
import HeroSection from './components/heroSection'
import AboutMe from './components/aboutMe'
import Tecnologies from './components/Tecnologies'
import ProjetosComponent from './components/Projetos'

export default function Home() {
  return (
    <div className='w-lvw'>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Tecnologies></Tecnologies>
      <ProjetosComponent></ProjetosComponent>

    </div>
  )
}
