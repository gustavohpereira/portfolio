"use client"
import Link from "next/link";

import Image from 'next/image'

import { FaLongArrowAltDown } from "react-icons/fa";
import scrollToSection from "../functions/scrollTo";
import Reveal from "./reveal";




export default function HeroSection(){
    return(
        <div className="h-screen flex flex-col justify-center text-center " id="home">

                <div className=" p-6  h-5/6 flex flex-col lg:flex-row justify-center items-center gap-10 mt-14">
                            
                    <Reveal className="lg:hidden">
                        <div className="lg:border-l-4 lg:border-cyan-200 lg:pl-6 h-2/6 flex items-center justify-center ">
                            <div  className=" rounded-full w-52 h-52 border-cyan-200 border-2 bg-hero-image bg-cover bg-center lg:mx-16 "></div>
                        </div>
                    </Reveal>
    
                    <Reveal>
                        <div className="h-3/5 flex flex-col justify-center items-center">
                            <h1 className="text-5xl lg:text-6xl my-2">OLÁ, MEU NOME É GUSTAVO</h1>
                            <p className=" text3xl lg:text-4xl">Desenvolvedor de Software</p>
                            <div className="flex gap-6 my-6">
                                <Link target="blank" href={"https://github.com/gustavohpereira"}>
                                    <Image src="GitHub.svg" alt="github logo" width={48} height={48}></Image>
                                </Link>
                                <Link target="blank" href={"https://www.linkedin.com/in/gustavohpa/"}>

                                    <Image src="linkedin.svg" alt="linkedin logo" width={48} height={48}></Image>
                                </Link>
                            </div>

                        </div>
                    </Reveal>
                    <Reveal className="hidden lg:block">
                        <div className="border-l-4 border-cyan-200 pl-6  h-3/5 flex items-center justify-center">
                            <div  className=" rounded-full w-80 h-80 border-cyan-200 border-2 bg-hero-image bg-cover bg-center mx-16 "></div>
                        </div>
                    </Reveal>


                </div >
            
            <Reveal>

            <div className="flex justify-center" >
                <button className="rounded-full border-2 text-cyan-200  border-cyan-200 w-16 h-16 flex justify-center items-center  hover:bg-cyan-200 hover:text-black ease-in-out duration-1000"
                onClick={() =>scrollToSection("about")}
                >
                    <FaLongArrowAltDown size={28} />
                </button>
            </div>
            </Reveal>
        </div>
    )
}