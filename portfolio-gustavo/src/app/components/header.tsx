'use client'
import scrollToSection from "../functions/scrollTo"

export default function Header(){

    const buttonColor = "text-xl hover:text-cyan-200 duration-300 bg-background-general"



    return(
        <div className="w-full flex justify-center fixed border-b border-gray-500 py-4 bg-background-general">
            <div className="w-1/2 flex justify-center gap-20 ">
            <button className={buttonColor} onClick={() => scrollToSection("home")}>INICIO</button>
            <button className={buttonColor} onClick={() => scrollToSection("about")}>SOBRE MIM</button>
            <button className={buttonColor} onClick={() => scrollToSection("tecnologies")}>TECNOLOGIAS</button>

            </div>
        </div>
    )
}