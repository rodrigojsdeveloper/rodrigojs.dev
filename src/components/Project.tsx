import { Paragraphy } from "./Paragraphy";
import { IProject } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }: IProject) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      className="w-full min-h-408 p-2 border border-solid border-gray-5 rounded-def hover:bg-link-1 hover:border-link-1 active:bg-link-2"
    >
      <Image
        priority={true}
        src={project.img}
        alt={project.title}
        className="rounded-def"
      />

      <div className="py-4 px-2">
        <h3 className="font-normal text-xl text-gray-1">{project.title}</h3>

        <Paragraphy
          text={project.description}
          style="w-full min-h-58 leading-1.8 text-sm mt-2"
        />

        <div className="flex flex-wrap gap-3 pt-5 pb-3">
          {project.stacks.map((Icon, index) => (
            <Icon key={index} size={22} color="#D4D4D4" />
          ))}
        </div>
      </div>
    </Link>
  );
};

export { Project };
