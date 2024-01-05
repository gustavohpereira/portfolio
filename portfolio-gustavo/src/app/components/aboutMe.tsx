"use client"
import Link from "next/link";
import { useState } from "react";
import { SlDocs } from "react-icons/sl";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import Reveal from "./reveal";






export default function AboutMe(){


    const[isCopied, setIsCopied] = useState(false);

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      }


    const buttonColor = "border-2 border-cyan-200 rounded-full  w-1/2 hover:bg-cyan-200 hover:border-black hover:text-black ease-in-out duration-1000 flex  items-center"


    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return(
        

            <div className="w-full flex justify-between my-10 bg-background-general/100" id="about">
                <Reveal className="flex w-full" name="about">
                <div className="flex flex-col justify-center items-center gap-20 w-1/2">
                    <Link href={"/curriculo.pdf"} target="blank" className={buttonColor}>

                            <span className=" border-cyan-200 p-4 mr-2 h-full flex justify-center items-center">

                                <SlDocs size={20} />
                            </span>
                    

                        Ver Curriculo
                    </Link>
                    <button className={buttonColor} onClick={() => copyToClipboard("gustavohpa2003@gmail.com")}>
                    <span className=" border-cyan-200 p-4 mr-2 h-full flex justify-center items-center">

                        {isCopied ? <MdMarkEmailRead size={20}/> :<MdEmail size={20}/>}
                    </span>
                        {isCopied ? 'Copiado!' : 'Copiar Currículo'}
                        </button>
                </div>

                

                    <div className="w-1/2 flex justify-center items-center py-20">
                        <div>
                            <h1 className="text-6xl m-6">SOBRE MIM</h1>
                            <ul className="list-disc text-2xl">
                                    <li>Apaixonado por Tecnologia</li>
                                    <li>Cursando ADS na FATEC-SJC</li>
                                    <li>Tenho experiencia na area de desenvolvimento</li>
                                    <li>desejo sempre me desenvolver e buscar aprendizado</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>

            </div>
    
    )
}