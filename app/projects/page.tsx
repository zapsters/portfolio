import Marquee from "react-fast-marquee";
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
      <p style={{ display: "block" }}>
        The site you currently are viewing was made in Typescript and NextJS.{" "}
        <a
          style={{ display: "inline" }}
          href="https://github.com/zapsters/portfolio"
          target="_blank">
          Look at the source code here :3
        </a>
      </p>
      <div className="projectCards">
        <ProjectCard href="projects/BLIMP" label="BLIMP" status="In development">
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            Balloon Live Instrumentation Monitoring Platform
          </h1>
          <p>
            A real-time monitoring system built for Conner Prairie’s 1859 Balloon Voyage, BLIMP
            tracks critical flight data for Aerophile NG30 Tethered Balloons — including pressure,
            wind speed, lift, temperatures, and battery status — and makes it accessible securely
            offsite.
          </p>

          <span>Key Features</span>
          <ul style={{ marginBottom: "14px" }}>
            <li>Live and historical data visualization</li>
            <li>Automated alerts for unsafe readings Secure</li>
            <li>authentication and access control</li>
          </ul>

          <span>Tech Stack</span>
          <ul>
            <li>Next.js (frontend)</li>
            <li>Cloudflare Workers (backend)</li>
            <li>Cloudflare D1 (SQLite database)</li>
          </ul>
        </ProjectCard>
        <ProjectCard href="projects/inputStack" label="Input Stack" status="V2">
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            Multiplayer, chaos causing, friendship destroying web game
          </h1>
          <p>
            A frantic, browser-based multiplayer game where players work together to manage an
            ever-growing stack of timed challenges — from math problems and word scrambles to
            sliders, buttons, and color pickers. Inspired by Keep Talking and Nobody Explodes,
            InputStack blends collaboration with chaos in real time.
          </p>

          <span>Key Features</span>
          <ul style={{ marginBottom: "14px" }}>
            <li>Real-time multiplayer powered by Firebase</li>
            <li>Wide variety of task modules and input types</li>
            <li>Instant browser play, no downloads required</li>
          </ul>

          <span>Tech Stack</span>
          <ul>
            <li>Realtime Databases</li>
            <li>Google Firebase & Auth</li>
            <li>Non-SQL Databases</li>
          </ul>
        </ProjectCard>
        <ProjectCard href="projects/sporeganizer" label="Sporeganizer" status="V1">
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            A mushroom themed student homework tracker
          </h1>
          <p>
            A playful, mushroom-themed homework tracker designed to make staying organized more fun.
            Sporeganizer helps students manage assignments with due dates and descriptions, all in a
            colorful, responsive interface that works across devices. Made with SvelteKit.
          </p>

          <span>Key Features</span>
          <ul style={{ marginBottom: "14px" }}>
            <li>Track assignments with due dates and details</li>
            <li>Unique mushroom-inspired design</li>
            <li>Cross-device compatibility (mobile, tablet, desktop)</li>
          </ul>
        </ProjectCard>
      </div>
    </>
  );
}
