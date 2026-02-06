import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <h3>
        Hey, I’m <strong>Erin Ballinger</strong>{" "}
        <p style={{ display: "inline", fontSize: 18 }}>[AKA Apollo]</p>
      </h3>
      <p>Full-stack developer in Indianapolis.</p>
      <p>
        I build accessible, responsive web apps with clean design and scalable backend architecture.
      </p>
      <strong style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href="/projects">■ View My Work</Link>
        <Link href="/contact">■ Get in Touch</Link>
      </strong>
      <hr />
      <p>
        I’m a full-stack developer based in Indianapolis who loves building web applications that feel just as good as they function. My work lives at the intersection of design and engineering; creating products that are intuitive, inclusive, and built to scale.
      </p>
      <p>
        Whether I’m fine-tuning micro-interactions, architecting real-time systems, or designing dashboards for mission-critical data, I bring the same goals to every project: clarity, performance, and accessibility.
      </p>
      <p>
        Technology is always evolving — and so am I. I enjoy learning new tools, experimenting with ideas, and turning complex problems into thoughtful, human-centered solutions.
      </p>
      <hr />
      <Marquee speed={20}>
        <strong style={{ textDecoration: "none", fontWeight: "bold" }}>
          Code with clarity. Design with empathy. Build for everyone.
        </strong>
      </Marquee>
      <hr />
    </>
  );
}
