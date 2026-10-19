import { ArrowDownRight, FolderKanban } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectCaseStudy from "./ProjectCaseStudy";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projects" className="scroll-mt-24 bg-page py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Featured Work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Projects that turn data into decisions.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted">
              A selection of my work in business intelligence, data analysis,
              and dashboard development. Each project starts with a question and
              works toward a clearer understanding of the data.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-border bg-page px-4 py-2.5 md:self-auto">
            <FolderKanban size={17} className="text-brand" />
            <span className="text-sm font-medium text-ink">
              Selected projects
            </span>
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        <ProjectCaseStudy
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand/15 bg-brand/5 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-ink">
              Have a data problem to solve?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              I'm interested in opportunities where I can apply analytical
              thinking, build practical solutions, and continue learning.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-dark"
          >
            Get in touch
            <ArrowDownRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
