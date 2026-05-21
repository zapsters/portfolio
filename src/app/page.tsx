import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="homepage">

      {/* <h3>
        <strong>Apollo Ballinger</strong>{" "}
      </h3> */}

      {/* <p style={{ display: "inline", fontSize: 18 }}>[AKA Apollo]</p> */}

      <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 39, textAlign: "center", marginTop: 30 }} className="pixel-text">&lt;Apollo&gt;</span>
      </div>


      {/* <div className="homepage-card border-1">
        <div className="label-value-pair">
          <span className="label ">name</span>
          <span className="value">Erin Apollo Ballinger</span>
        </div>
      </div> */}

      {/* <section style={{ color: "#ffffff5d", margin: "16px auto" }} className="slant-text pixel-text-center" >
        <div id="one" className="tilt-l">Full</div>
        <div id="one" className="tilt-r">Stack</div>
        <div id="two" className="tilt-l">Dev</div>
        <div id="two" className="tilt-r">exploring</div>
        <div id="three" className="tilt-l">a</div>
        <div id="four" className="tilt-l2x">digital</div>
        <div id="four" className="tilt-r">world.</div>
      </section> */}

      <p>Hey, my name is Apollo, I’m a Full-stack developer in Indianapolis.</p>
      <p>
        I am passionate about a blend of web and game design and development, and I am always looking for new ways to push the boundaries of what is possible on the web. The web can be so much more than just a medium for displaying information, it can be a canvas for creativity and expression.
      </p>
      <strong style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href="/projects">■ View My Work</Link>
        <Link href="/contact">■ Get in Touch</Link>
      </strong>
      <hr />
      <p>
        I am always looking for new opportunities to collaborate and create, so if you have an idea or project in mind, please don't hesitate to reach out. Whether you're a fellow developer, designer, or just someone who shares my passion for the web, I would love to connect and see how we can work together to create something amazing.
      </p>
      <hr />
      <Marquee speed={20}>
        <strong style={{ textDecoration: "none", fontWeight: "bold" }}>
          Code with clarity. Design with empathy. Build for everyone.
        </strong>
      </Marquee>
      <hr />
      {/* <p style={{ textAlign: "center" }}><svg style={{ position: "relative", top: "5px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--primary)" d="M13 22h-2v-2h2zm-2-2H9v-2h2zm4 0h-2v-2h2zm-6-2H7v-2h2zm8 0h-2v-2h2zM7 16H5v-2h2zm12 0h-2v-2h2zM5 14H3v-2h2zm16 0h-2v-2h2zM3 12H1V6h2zm20 0h-2V6h2zM13 8h-2V6h2zM5 6H3V4h2zm6 0H9V4h2zm4 0h-2V4h2zm6 0h-2V4h2zM9 4H5V2h4zm10 0h-4V2h4z" /></svg>
        {" "}Made with love{" "}
        <svg style={{ position: "relative", top: "5px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--primary)" d="M13 22h-2v-2h2zm-2-2H9v-2h2zm4 0h-2v-2h2zm-6-2H7v-2h2zm8 0h-2v-2h2zM7 16H5v-2h2zm12 0h-2v-2h2zM5 14H3v-2h2zm16 0h-2v-2h2zM3 12H1V6h2zm20 0h-2V6h2zM13 8h-2V6h2zM5 6H3V4h2zm6 0H9V4h2zm4 0h-2V4h2zm6 0h-2V4h2zM9 4H5V2h4zm10 0h-4V2h4z" /></svg></p> */}
    </div>
  );
}
