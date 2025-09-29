import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <h3>
        Hey, I’m <span>Erin Ballinger.</span>
      </h3>
      <p>Full-stack developer in Indianapolis.</p>
      <p>
        I build accessible, responsive web apps with clean design and scalable backend architecture.
      </p>
      <span style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href="/projects">■ View My Work</Link>
        <Link href="/contact">■ Get in Touch</Link>
      </span>
      <hr />
      <p>
        I craft digital solutions that blend thoughtful design with performance-focused engineering.
        From intuitive interfaces to robust backend logic, my work centers on accessibility,
        responsiveness, and seamless user experience. I’m always looking for new problems to solve
        and ways to bring ideas to life — accessible to anyone, anywhere.
      </p>
      <Marquee speed={20}>
        <p>Code with clarity. Design with empathy. Build for everyone.</p>
      </Marquee>
    </>
  );
}
