import { ExternalLinkIcon } from "@/assets/icons";
import { Card, CardDescription, CardLink } from "@/components/ui/card";
import { urlForImage } from "@/sanity/lib/sanityImageUrl";
import { ProjectType } from "@/sanity/types/projects";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="group relative cursor-pointer gap-4 border-none bg-transparent py-6 shadow-none">
      <div className="flex items-center gap-2">
        <div className="relative z-10 w-8 overflow-hidden rounded-md">
          <img
            src={urlForImage(project.icon).width(100).height(100).url()}
            alt={project.name}
            className="aspect-square w-full object-contain"
          />
        </div>
        <h2 className="font-bold text-zinc-800 dark:text-zinc-100">
          <CardLink href={project.url} target="_blank">
            {project.name}
          </CardLink>
        </h2>
      </div>
      <CardDescription>{project.description}</CardDescription>
      <div>
        <div className="z-10 flex items-center gap-2 text-sm text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:text-purple-300 dark:text-zinc-200 group-hover:dark:text-purple-300">
          {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          <ExternalLinkIcon className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
