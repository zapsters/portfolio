import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <h3>
        Hey, I’m <span>Erin Ballinger</span>{" "}
        <p style={{ display: "inline", fontSize: 18 }}>[AKA Apollo]</p>
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
        I’m a full-stack developer based in Indianapolis, passionate about building web applications
        that are as inclusive as they are powerful. My work sits at the intersection of design and
        engineering — creating products that don’t just work, but feel intuitive, accessible, and
        enjoyable for every user.
      </p>
      <p>
        I specialize in crafting responsive interfaces backed by scalable, reliable architecture.
        Whether it’s refining user interactions down to the smallest detail or architecting a system
        that can grow with demand, I approach every project with the same goals: clarity,
        performance, and accessibility.
      </p>
      <p>
        Technology is constantly evolving, and I love being part of that evolution — learning new
        tools, experimenting with ideas, and transforming challenges into solutions that make a
        difference. To me, great development isn’t just about code; it’s about empathy for the
        people who will use what I build.
      </p>
      <hr />
      <Marquee speed={20}>
        <span style={{ textDecoration: "none", fontWeight: "bold" }}>
          ❤ Code with clarity. Design with empathy. Build for everyone. ❤
        </span>
      </Marquee>
      <hr />
    </>
  );
}
