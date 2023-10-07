import { IProject } from "@/interfaces";
import Image from "next/image";
import { Paragraphy } from "./Paragraphy";

const Project = ({ project }: IProject) => {
  return (
    <a
      href={project.link}
      target="_blank"
      className="w-full h-408 p-2 border border-solid border-gray-7 rounded-def duration-300 hover:bg-gray-8"
    >
      <Image
        priority
        src={project.img}
        alt={project.title}
        className="rounded-def"
      />

      <div className="py-4 px-2">
        <h3 className="font-normal text-xl text-gray-1">{project.title}</h3>

        <Paragraphy
          text={project.description}
          style="w-full h-58 leading-1.8 text-sm mt-2"
        />

        <div className="flex flex-wrap gap-3 pt-5 pb-3">
          {project.stacks.map((Icon, index) => (
            <Icon key={index} size={22} color="#D4D4D4" />
          ))}
        </div>
      </div>
    </a>
  );
};

export { Project };
