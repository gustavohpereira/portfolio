"use client";
import { FaGitAlt } from "react-icons/fa";
import Image from "next/image";
import Reveal from "./reveal";

export default function Tecnologies() {
  const tecnologies = [
    "git",
    "java",
    "node",
    "Next",
    "typeScript",
    "javaScript",
    "python",
    "bootstrap",
    "django",
    "express",
    "aws",
    "flask",
    "mysql",
    "firebase",
    "Tailwind css",
  ];

  return (
    <div className="w-full  flex justify-center my-10" id="tecnologies">
      <Reveal name="tecnologies" className="flex justify-center">
        <div className="   flex flex-col items-center  p-10 ">
          <h1 className="text-5xl ">TECNOLOGIAS</h1>
          <div className="py-10 w-full flex gap-12 flex-wrap justify-center content-center">
            {tecnologies.map((tecnology, index) => (
              <div
                className="flex flex-col justify-between items-center"
                key={index}
              >
                <Image
                  src={tecnology + ".svg"}
                  alt={tecnology + " logo"}
                  width={64}
                  height={64}
                ></Image>
                <h4 className="text-l">{tecnology}</h4>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
