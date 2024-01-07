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
                <Reveal className="flex flex-col w-full justify-center items-center" name="about">

                  <div className="lg:hidden w-full flex justify-center items-center">
                      <div className="text-center">
                          <h1 className="text-5xl m-10">SOBRE MIM</h1>
                          <ul className="list-disc text-xl">
                                  <li>Apaixonado por Tecnologia</li>
                                  <li>Cursando ADS na FATEC-SJC</li>
                                  <li>Tenho experiencia na area de desenvolvimento</li>
                                  <li>desejo sempre me desenvolver e buscar aprendizado</li>
                          </ul>
                      </div>
                  </div>



                  <div className="flex lg:flex-col justify-center items-center lg:gap-20 lg:w-1/2 gap-2 my-10 p-1">
                      <Link href={"/curriculo.pdf"} target="blank" className={buttonColor}>

                              <span className=" border-cyan-200 p-4 lg:mr-2 lg:h-full flex justify-center items-center">

                                  <SlDocs size={20} />
                              </span>
                      

                          Ver Curriculo
                      </Link>
                      <button className={buttonColor} onClick={() => copyToClipboard("gustavohpa2003@gmail.com")}>
                      <span className=" border-cyan-200 p-4 lg:mr-2 lg:h-full flex justify-center items-center">

                          {isCopied ? <MdMarkEmailRead size={20}/> :<MdEmail size={20}/>}
                      </span>
                          {isCopied ? 'Copiado!' : 'Copiar endereço de email'}
                          </button>
                  </div>

                

                  <div className=" hidden w-1/2 flex justify-center items-center py-20 lg:block">
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