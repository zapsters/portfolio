import { OpenIcon, WebIcon } from "@/app/components/icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="projectPage">
      <h1>BLIMP</h1>
      <h4>The Balloon Live Instrumentation Monitoring Platform</h4>
      <p>
        BLIMP, AKA the Balloon Live Instrumentation Monitoring Platform, is a custom-built software
        solution designed for Conner Prairie’s 1859 Balloon Voyage. It provides real-time, remote
        monitoring of critical flight instrumentation—ensuring that vital safety and performance
        data is accessible offsite during every launch.
      </p>
      <p>
        <strong>BLIMP</strong> is a custom-built software solution designed for{" "}
        <strong>Conner Prairie’s 1859 Balloon Voyage</strong>. It provides real-time, remote
        monitoring of critical flight instrumentation—ensuring vital safety and performance data is
        accessible offsite during every launch.
      </p>
      <p style={{ marginBottom: 13 }}>
        <strong>This project is currently under development.</strong>
      </p>

      <hr />
      <div
        style={{
          display: "flex",
          gap: 9,
          justifyContent: "space-evenly",
          maxWidth: 400,
          margin: "0 auto",
        }}>
        <Link target="_blank" className="Link" href={"https://blimpview.app"}>
          <WebIcon />
          Open webpage
        </Link>
      </div>

      <hr />

      <h2>Overview</h2>
      <p>
        BLIMP was built to make balloon operations safer, smarter, and more transparent. It
        continuously tracks and reports key telemetry data from the flight computer, including:
      </p>

      <ul>
        <li>Pressure</li>
        <li>Wind Speed</li>
        <li>Lift</li>
        <li>Internal & External Temperature</li>
        <li>Voltage</li>
        <li>Battery Status</li>
      </ul>
      <br />
      <p style={{ marginBottom: 4 }}>
        <strong>The platform is composed of three main components:</strong>
      </p>
      <ol>
        <li>
          <strong>DATA_UPLOADER</strong> – A lightweight client that routinely transmits telemetry
          via API from onboard computers or mirrored software.
        </li>
        <li>
          <strong>WORKER</strong> – The server layer that handles all incoming requests and API
          calls.
        </li>
        <li>
          <strong>WEB</strong> – A responsive dashboard for live and historical data visualization.
        </li>
      </ol>

      <hr />

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Real-Time Monitoring</strong> – Live telemetry streamed directly from the flight
          system to a secure web interface.
        </li>
        <li>
          <strong>Historical Data Visualization</strong> – Access past flight sessions with clear,
          interactive graphs for temperature, wind, lift, and more.
        </li>
        <li>
          <strong>Notifications & Alerts</strong> – Automated warnings for unsafe or abnormal
          readings to assist in safety decisions.
        </li>
        <li>
          <strong>Authentication & Security</strong> – User-protected access ensures flight data
          integrity and confidentiality.
        </li>
      </ul>

      <hr />

      <h2>Technology Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> Next.js (React) – Hosted on <em>Cloudflare Pages</em> for fast,
          global performance.
        </li>
        <li>
          <strong>Backend:</strong> <em>Cloudflare Workers</em> – Serverless compute handling POST
          uploads and GET queries efficiently.
        </li>
        <li>
          <strong>Database:</strong> <em>Cloudflare D1</em> – A serverless SQLite solution for
          low-latency data storage and scalability.
        </li>
      </ul>

      <p>
        This architecture minimizes on-site hardware needs—requiring only a flight computer with
        internet access—while maintaining scalability and reliability.
      </p>

      <hr />

      <h2>Long-Term Vision</h2>
      <p>
        BLIMP was developed not just as a monitoring tool, but as an investment in the{" "}
        <strong>future of balloon operations</strong>:
      </p>
      <ul>
        <li>Redundant, offsite monitoring for increased flight safety.</li>
        <li>Simplified data access for ground crew and operations staff.</li>
        <li>
          Long-term data preservation to benefit future balloon envelopes, including <em>Sophie</em>{" "}
          and her successors.
        </li>
      </ul>

      <hr />

      <h2>License & Ownership</h2>
      <p>
        Ownership of all code and software remains with <strong>Erin Ballinger</strong>, with
        <strong>Conner Prairie</strong> receiving lifetime access to the deployed system upon full
        payment. Source code access is included should future self-hosting be required.
      </p>
      <p>© 2025 Erin Ballinger — All Rights Reserved.</p>

      <hr />

      <h2>Acknowledgments</h2>
      <p>
        Special thanks to <strong>Conner Prairie</strong> and <strong>Chris Greiling</strong> for
        championing innovation in balloon safety and monitoring technology.
      </p>
    </div>
  );
}
