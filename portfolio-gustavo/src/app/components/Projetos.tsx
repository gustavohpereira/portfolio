"use client"

import { FaLongArrowAltDown ,FaLongArrowAltRight,FaLongArrowAltLeft} from "react-icons/fa";
import { useState } from "react";
import SliderData from "@/data/SliderData";
import { circIn } from "framer-motion";
import Reveal from "./reveal";


export default function ProjetosComponent(){

    const slides = SliderData

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);

    };

    console.log(SliderData)
    return(
        <Reveal>

            <div className="w-full flex flex-col items-center  my-10 bg-background-general/100" id="project">
                <h1 className="py-2 text-5xl lg:text-6xl my-10">MEUS PROJETOS</h1>
                <div className="flex w-full justify-around items-center ">
                    <button className="rounded-full border-2 text-cyan-200 p-2  border-cyan-200 w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center  hover:bg-cyan-200 hover:text-black ease-in-out duration-500"
                        onClick={nextSlide}>
                        <FaLongArrowAltLeft size={28} />
                    </button>
                    <div className="overflow-hidden relative w-8/12 lg:w-4/12 border-cyan-200 border rounded-lg">
                        <div
                        className={`flex transition ease-out duration-40 `}
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                        >
                        {slides.map((s,index) => {
                            return <img src={s.source} key={index} />;
                        })} 
                        </div>
                
                        
                    </div>
                <button className="rounded-full border-2 text-cyan-200 p-2  border-cyan-200 w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center  hover:bg-cyan-200 hover:text-black ease-in-out duration-500"
                onClick={nextSlide}>
                    <FaLongArrowAltRight size={28} />
                </button>
                </div>
                <div className="flex gap-10 py-4">

                    {slides.map((s:any, i:any) => {
                                return (
                                <div
                                    onClick={() => {
                                    setCurrent(i);
                                    }}
                                    key={"circle" + i}
                                    className={`rounded-full w-3 h-3 lg:w-5 lg:h-5  cursor-pointer  ${
                                    i == current ? "bg-cyan-200" : "bg-gray-500"
                                    }`}
                                ></div>
                                );
                    })}
                </div>
                <div className="flex flex-col py-6 px-10 justify-center items-center text-center">

                    <h1 className="text-3xl lg:text-4xl my-12">{slides[current].name}</h1>
                    <h1 className="text-lg lg:text-xl text-center">{slides[current].description}</h1>
                </div>
            </div>
        </Reveal>
    )
}

// express, aws, mysql, flask,django, firebase, bootstrap, scss