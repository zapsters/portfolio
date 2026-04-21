import { BlimpIcon, BracesContent, InputStackLogo, PixelArtIconsBox, PixelArtIconSunglasses } from "../components/icons";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>
        A collection of my work showcasing design, engineering, and problem-solving in action. These projects range from real-time SaaS platforms to multiplayer games and productivity tools — all built with a focus on usability, performance, and creativity.
      </p>
      <p>I typically build web applications using React and Next.js, with a strong emphasis on performance and accessibility.</p>
      <p><strong>Thank you for checking out my work &mdash; :3</strong></p>
      {/* <p style={{ display: "block" }}>
        This site was built with React and Next.js
        <br />
        <a
          style={{ display: "inline" }}
          href="https://github.com/zapsters/portfolio"
          target="_blank">
          [View the source code]
        </a>
      </p> */}
      <div className="projectCards">
        <ProjectCard
          href="projects/BLIMP"
          label="BLIMP"
          status={<><p style={{ fontSize: "inherit" }}>Constantly updated</p><hr /><p style={{ fontSize: "inherit" }}>Used in production by Conner Prairie since 2026</p></>}
          url="https://blimpview.app"
          icon={<BlimpIcon style={{ width: "100%", maxWidth: "220px", padding: "5px 0px" }} alignmentBaseline="central" />}>
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            Balloon Live Instrumentation Monitoring Platform
          </h1>
          <p>
            A real-time monitoring platform built for AEROPHILE 30NG Tethered Balloons. First developed for Conner Prairie, a non-profit museum in Fishers Indiana, with Conner Prairie being the first site to implement BLIMP officially in daily operations in 2026. BLIMP tracks critical flight data including pressure, wind speed, lift, temperature, voltage, and battery status — and makes it securely accessible remotely anywhere.
          </p>

          <p><strong>Impact: </strong>Supported safer balloon operations through continuous remote monitoring and offsite visibility, reducing reliance on on-site-only instrumentation access
          </p>

          <span><strong>Key Features</strong></span>
          <ul style={{ marginBottom: "14px" }} className="customLiIcon">
            <li><PixelArtIconsBox />Live and historical data visualization</li>
            <li><PixelArtIconsBox />Automated alerts for unsafe readings</li>
            <li><PixelArtIconsBox />Secure authentication and access control</li>
          </ul>

          <span><strong>Tech Stack</strong></span>
          <ul className="customLiIcon">
            <li><BracesContent />Frontend: React, Next.js</li>
            <li><BracesContent />Backend: Cloudflare Workers</li>
            <li><BracesContent />Database: Cloudflare D1 (SQLite)</li>
          </ul>
        </ProjectCard>

        <ProjectCard
          href="projects/inputStack"
          github="https://github.com/zapsters/InputStack"
          url="https://zapsters.github.io/inputstack/"
          label="Input Stack"
          status="Finished 2025"
          icon={<InputStackLogo style={{ width: "100%", padding: "5px 0px" }} alignmentBaseline="central" />}
        >
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            Multiplayer, chaos causing, friendship destroying web game
          </h1>
          <p>
            A frantic, browser-based multiplayer game where players collaborate to manage an ever-growing stack of timed challenges - from math problems and word scrambles to sliders, buttons, and color pickers. Inspired by Keep Talking and Nobody Explodes, InputStack blends teamwork with chaos in real time, inside of your browser.
          </p>

          <span><strong>Inspiration</strong></span>
          <ul style={{ marginBottom: "14px" }} className="customLiIcon">
            <li><PixelArtIconSunglasses />Jackpot Games</li>
          </ul>

          <span><strong>Key Features</strong></span>
          <ul className="customLiIcon" style={{ marginBottom: "14px" }}>
            <li><PixelArtIconsBox />Real-time multiplayer powered by Firebase</li>
            <li><PixelArtIconsBox />Wide variety of task modules and input types</li>
            <li><PixelArtIconsBox />Instant browser play, no downloads required</li>
          </ul>

          <span><strong>Tech Stack</strong></span>
          <ul className="customLiIcon">
            <li><BracesContent />Firebase Realtime Database & Auth</li>
            <li><BracesContent />JavaScript, HTML, CSS</li>
          </ul>
        </ProjectCard>
        <ProjectCard
          href="projects/sporeganizer"
          github="https://github.com/zapsters/Sporeganizer"
          label="Sporeganizer"
          status="Open source, not being actively developed"
          icon={<img src="/Sporeganizer/Sporeganizer.png" alt="Sporeganizer Logo" style={{ width: "100%", padding: "5px 0px" }} />}
        >
          <h1
            style={{ display: "block", textAlign: "center", fontWeight: "500", fontSize: "20px" }}>
            A mushroom themed student homework tracker
          </h1>
          <p>
            A playful productivity app designed to make staying organized more fun. Sporeganizer helps students manage assignments with due dates and descriptions in a colorful, responsive interface that works across devices.
          </p>

          <span><strong>Key Features</strong></span>
          <ul className="customLiIcon" style={{ marginBottom: "14px" }}>
            <li><PixelArtIconsBox />Track assignments with due dates and details</li>
            <li><PixelArtIconsBox />Unique mushroom-inspired design</li>
            <li><PixelArtIconsBox />Cross-device compatibility (mobile, tablet, desktop)</li>
          </ul>

          <span><strong>Tech Stack</strong></span>
          <ul className="customLiIcon">
            <li><BracesContent />SvelteKit</li>
            <li><BracesContent />Firebase Auth & Firestore</li>
            <li><BracesContent />JavaScript, HTML, SASS/CSS</li>
          </ul>
        </ProjectCard>

      </div >
      {/* <hr />
      <p>Below are some notable projects:</p> */}
    </>
  );
}
