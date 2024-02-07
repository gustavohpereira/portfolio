"use client";

import {
  FaLongArrowAltDown,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { useState } from "react";
import SliderData from "@/data/SliderData";
import { circIn } from "framer-motion";
import Reveal from "./reveal";
import Link from "next/link";

export default function ProjetosComponent() {
  const slides = SliderData;

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
      <div
      className="w-full flex flex-col items-center  my-10 bg-neutral-900  dark:bg-neutral-900 dark:bg-background-general/10"
      id="project"
      >
        <h1 className="py-2 text-5xl lg:text-6xl my-10 text-center">
          MEUS PROJETOS
        </h1>
          <Reveal>
        <div className="flex w-full justify-around items-center ">
          <button
            className="rounded-full border-2 text-cyan-200 p-2  border-cyan-200 w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center  hover:bg-cyan-200 hover:text-black ease-in-out duration-500"
            onClick={nextSlide}
          >
            <FaLongArrowAltLeft size={28} />
          </button>
          <div className="overflow-hidden  w-8/12 lg:w-4/12 border-cyan-200 border rounded-lg">
            <div className={`flex transition ease-out duration-40 `}>
              <img src={slides[current].source} />;
            </div>
          </div>
          <button
            className="rounded-full border-2 text-cyan-200 p-2  border-cyan-200 w-8 h-8 lg:w-16 lg:h-16 flex justify-center items-center  hover:bg-cyan-200 hover:text-black ease-in-out duration-500"
            onClick={nextSlide}
          >
            <FaLongArrowAltRight size={28} />
          </button>
        </div>
        <div className="flex gap-10 py-4 justify-center">
          {slides.map((s: any, i: any) => {
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
        <div className="flex flex-col py-6 px-10 justify-center items-center text-center w-full">
          <h1 className="text-3xl lg:text-4xl my-4">{slides[current].name}</h1>
          <h1 className="text-xl lg:text-2xl">
            Tecnologias usadas: {slides[current].technologies}
          </h1>
          <hr className="w-full my-10"></hr>
          <h1 className="text-lg lg:text-xl text-center px-6">
            {slides[current].description}
          </h1>
          <Link
            target="_blank"
            className="border-2 border-cyan-200 rounded-full justify-center text-xl  p-4 m-10 w-3/4 hover:bg-cyan-200 hover:border-black hover:text-black ease-in-out duration-1000 flex lg:w-1/4 lg:text-center  "
            href={slides[current].gitLink}
          >
            Codigo do projeto
          </Link>
        </div>
    </Reveal>
      </div>
  );
}
