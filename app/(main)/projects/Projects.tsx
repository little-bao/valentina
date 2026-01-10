import { ProjectType } from "@/sanity/types/projects";

import ProjectCard from "./ProjectCard";

const Projects = ({ data }: { data: ProjectType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
      {data.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
