import { WebIcon } from "@/app/components/icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="projectPage">
      <h1>BLIMP</h1>
      <h4>The Balloon Live Instrumentation Monitoring Platform</h4>
      <p>
        BLIMP provides secure, remote, real-time access to instrumentation data from AEROPHILE NG30 tethered balloon systems, supporting safer and more efficient operational decision-making.
      </p>
      <p>
        <strong>BLIMP</strong> was originally developed for{" "}
        <strong>Conner Prairie’s 1859 Balloon Voyage</strong> and now has expanded to other sites. It provides real-time, remote monitoring of critical flight instrumentation—ensuring vital safety and performance data is accessible offsite for monitoring the balloon, especially in inclement weather conditions.
      </p>
      <p style={{ marginBottom: 13 }}>
        <strong>Owned and developed by Apollo Digital LLC.</strong>
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

      <h2>Project Overview</h2>
      <p>
        BLIMP enables monitoring of key metrics, including:
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
        <strong>The platform consists of three separate components working together:</strong>
      </p>
      <ol>
        <li>
          <strong>DATA_UPLOADER</strong> – Software installed on a ground-based flight computer that uploads telemetry data from ViewData, AEROPHILE&apos;s flight computer software.
        </li>
        <li>
          <strong>WORKER</strong> – A Cloudflare Worker endpoint that receives, validates, and processes incoming data.
        </li>
        <li>
          <strong>WEB</strong> – A responsive dashboard for live and historical data visualization.
        </li>
      </ol>

      <hr />

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Real-Time Monitoring</strong> – Continuous telemetry streaming to a secure cloud endpoint.
        </li>
        <li>
          <strong>Historical Data Visualization</strong> – Long-term storage enabling graphing, trend analysis, and flight history review.
        </li>
        <li>
          <strong>Notifications & Alerts</strong> – Automatic warnings when readings exceed safety thresholds.
        </li>
        <li>
          <strong>Authentication & Security</strong> – Restricts access to authorized operational personnel.
        </li>
      </ul>

      <hr />

      <h2>Technology Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> Next.js (React), deployed via Cloudflare Pages – Responsive dashboard for data visualization and user interaction.
        </li>
        <li>
          <strong>Backend:</strong> Cloudflare Workers – Serverless compute handling POST
          uploads and GET queries efficiently.
        </li>
        <li>
          <strong>Database:</strong> <em>Cloudflare D1</em> – A serverless SQLite solution for
          low-latency data storage and scalability.
        </li>
      </ul>
      <br />

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
        <li>Enhance operational safety through redundant remote monitoring</li>
        <li>Provide reliable offsite visibility for operators and management</li>
        <li>Maintain historical telemetry across future balloon envelopes (e.g., Sophie and successors)</li>
      </ul>

      <hr />

      <h2>Author</h2>
      <p>Apollo Ballinger</p>
      <p>© 2026 Apollo Digital LLC — All Rights Reserved.</p>
    </div>
  );
}
