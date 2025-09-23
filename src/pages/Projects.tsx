import { projects } from "../data/projects";

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="card">
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <p className="muted">{p.tech.join(".")}</p>
      <div className="row">
        {p.link && (
          <a
            className="btn btn-ghost"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {p.repo && (
          <a
            className="btn btn-ghost"
            href={p.link}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
