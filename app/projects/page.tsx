import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>
        A collection of my work showcasing design, code, and problem-solving in action. Each project
        reflects my focus on building clean, functional, and creative solutions—ranging from
        interactive web applications to thoughtful experiments. Explore the highlights below to see
        how I approach challenges, craft user experiences, and bring ideas to life.
      </p>
      <div className="projectCards">
        <ProjectCard href="test" label="B.L.I.M.P." status="In development" />
        <ProjectCard href="test" label="B.L.I.M.P." status="In development" />
        <ProjectCard href="test" label="B.L.I.M.P." status="In development" />
      </div>
    </>
  );
}
