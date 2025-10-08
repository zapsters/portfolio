import Link from "next/link";
import Pixelated from "./components/pixelated";

export default function NotFound() {
  return (
    <div style={{ padding: "4px" }}>
      <h3 style={{ fontFamily: "ft88", fontWeight: 600, marginBottom: "5px" }}>
        {"Whoops, looks like we've encountered an issue."}
      </h3>

      <h3 style={{ fontWeight: 400, marginBottom: 0 }}>Error 404: Not Found</h3>
      <br />
      <Link href="/">■ Escort me back home.</Link>
    </div>
  );
}
