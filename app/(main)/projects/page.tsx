import { Container } from "@/components/ui/Container";
import { client } from "@/sanity/client";
import type { ProjectType } from "@/sanity/types/projects";

import Projects from "./Projects";

const options = { next: { revalidate: 60 * 60 * 24 } };

const PROJECTS_QUERY = `*[
_type == "project"
] | order(publishedAt desc) {
  _id,
  name,
  url,
  description,
  icon,
  category
  }`;

const page = async () => {
  const projects = await client.fetch<ProjectType[]>(
    PROJECTS_QUERY,
    {},
    options
  );
  const projects_work = projects.filter(
    (project) => project.category === "work"
  );
  return (
    <Container className="mt-16 sm:mt-32">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        工作上的项目
      </h2>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        在创业公司两年，我主导开发的项目，前端技术栈:
        React、Next.js、TypeScript、Tailwind CSS。
      </p>
      <div className="mt-8 sm:mt-16">
        <Projects data={projects_work} />
      </div>
    </Container>
  );
};

export default page;
