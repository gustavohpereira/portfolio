'use client'
import scrollToSection from "../functions/scrollTo"

export default function Header(){

    const buttonColor = " text-base hover:text-cyan-200 duration-300 bg-background-general lg:text-xl"



    return(
        <div className="fixed border-b border-gray-500 py-4 bg-background-general w-lvw lg:flex lg:justify-center">
            <div className=" gap-4 flex justify-center lg:gap-20 w-full lg:w-1/2 ">
                <button className={buttonColor} onClick={() => scrollToSection("home")}>INICIO</button>
                <button className={buttonColor} onClick={() => scrollToSection("about")}>SOBRE MIM</button>
                <button className={buttonColor} onClick={() => scrollToSection("tecnologies")}>TECNOLOGIAS</button>
                <button className={buttonColor} onClick={() => scrollToSection("project")}>PROJETOS</button>

            </div>
        </div>
    )
}