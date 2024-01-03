import Image from 'next/image'
import HeroSection from './components/heroSection'
import AboutMe from './components/aboutMe'
import Tecnologies from './components/Tecnologies'

export default function Home() {
  return (
    <div >
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Tecnologies></Tecnologies>

    </div>
  )
}
