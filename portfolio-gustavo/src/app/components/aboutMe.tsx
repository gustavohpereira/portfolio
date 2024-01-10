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


    const buttonColor = "border-2 border-cyan-200 rounded-full w-4/5 lg:w-1/2 hover:bg-cyan-200 hover:border-black hover:text-black ease-in-out duration-1000 flex  items-center"


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
        

            <div className="w-full flex justify-between bg-zinc-900 dark:bg-background-general/10 px-10" id="about">
                <Reveal className="flex flex-col lg:flex-row w-full justify-center items-center " name="about">

                  <div className="lg:hidden w-full flex justify-center items-center">
                    <div className="flex flex-col items-center text-center">
                          <h1 className="text-4xl m-6">SOBRE MIM</h1>
                          <p className="text-lg mb-6">
                            Olá! Meu nome é Gustavo Henrique e sou apaixonado por tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FATEC-SJC, onde entrei em 2022 e mergulhei de cabeça na fascinante área da programação.
                          </p>
                          <p className="text-lg mb-6">
                            Desde que ingressei na FATEC, tenho trabalhado incansavelmente para aprimorar minhas habilidades de desenvolvimento. Em 2023, tive a oportunidade de estagiar na área, o que ampliou ainda mais meu conhecimento prático e minha compreensão do campo.
                          </p>
                          <p className="text-lg mb-6">
                            Tenho especial interesse em colaborar em projetos inovadores. Acredito que a tecnologia pode ser uma força poderosa para transformar ideias em realidade, e estou sempre ansioso para enfrentar novos desafios.
                          </p>
                          <p className="text-lg mb-6">
                            Além das habilidades técnicas, considero a comunicação uma parte vital do desenvolvimento de projetos. Minha abordagem é não apenas entender os códigos, mas também compreender as pessoas. Sou conhecido por minha habilidade em colaborar efetivamente em equipe e por buscar soluções criativas para os problemas.
                          </p>
                      </div>
                  </div>



                  <div className="flex flex-col lg:flex-col justify-center items-center lg:gap-20 lg:w-1/2 gap-10 my-6 p-1 w-full">
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
                          {isCopied ? 'Copiado!' : 'Copiar email'}
                        </button>
                  </div>

                

                  <div className=" hidden w-1/2  justify-center items-center py-20 lg:flex">
                    <div className="flex flex-col items-center">
                        <h1 className="text-6xl m-6">SOBRE MIM</h1>
                        <p className="text-xl mb-6">
                          Olá! Meu nome é Gustavo Henrique e sou apaixonado por tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FATEC-SJC, onde entrei em 2022 e mergulhei de cabeça na fascinante área da programação.
                        </p>
                        <p className="text-xl mb-6">
                          Desde que ingressei na FATEC, tenho trabalhado incansavelmente para aprimorar minhas habilidades de desenvolvimento. Em 2023, tive a oportunidade de estagiar na área, o que ampliou ainda mais meu conhecimento prático e minha compreensão do campo.
                        </p>
                        <p className="text-xl mb-6">
                          Tenho especial interesse em colaborar em projetos inovadores. Acredito que a tecnologia pode ser uma força poderosa para transformar ideias em realidade, e estou sempre ansioso para enfrentar novos desafios.
                        </p>
                        <p className="text-xl mb-6">
                          Além das habilidades técnicas, considero a comunicação uma parte vital do desenvolvimento de projetos. Minha abordagem é não apenas entender os códigos, mas também compreender as pessoas. Sou conhecido por minha habilidade em colaborar efetivamente em equipe e por buscar soluções criativas para os problemas.
                        </p>
                    </div>
                  </div>
                </Reveal>

            </div>
    
    )
}