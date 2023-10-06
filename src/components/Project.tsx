import { IProject } from "@/interfaces";
import Image from "next/image";

const Project = ({ project }: IProject) => {
  return (
    <div className="w-full p-2 border border-solid border-gray-7 rounded-def duration-300 hover:bg-gray-8">
      <Image src={project.img} alt={project.title} className="rounded-def" />

      <div className="py-4 px-2">
        <h3 className="font-normal text-xl text-gray-1">{project.title}</h3>

        <p className="w-full font-normal text-gray-3 text-sm leading-[1.8] mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-5 pb-3">
          {project.stacks.map((Stack) => (
            <Stack icon={20} color="#D4D4D4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Project };
