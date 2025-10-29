import type { Metadata } from "next";
import "./styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Marquee from "react-fast-marquee";
import NavItem from "./components/NavItem";
import PersonalIcon from "./components/PersonalIcon";
import Link from "next/link";
import Pixelated from "./components/pixelated";

export const metadata: Metadata = {
  title: "< Apollo />",
  description: "Portfolio site for Apollo",
  icons: {
    icon: "PersonalLogoFoxIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function marqueeSpacer() {
    const space = "     ";
    const separator = "|";
    return (
      <>
        {space}
        {separator}
        {space}
      </>
    );
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-bs-theme" enableSystem>
          <Marquee autoFill={true} speed={50} className="marquee">
            <span className="bianzhidai">{marqueeSpacer()}❤ FULL STACK WEB DEVELOPER ❤</span>
            <span className="bianzhidai">
              {marqueeSpacer()}
              {"♨  APOLLO  ♨"}
            </span>
            <span className="bianzhidai">
              {marqueeSpacer()}
              {"</>"}
            </span>
          </Marquee>
          <article className="root">
            <aside className="mainAside">
              <Pixelated>
                <PersonalIcon
                  style={{
                    width: "60%",
                    maxWidth: "220px",
                    padding: "5px 0px",
                    color: "var(--primary-color)",
                  }}
                  alignmentBaseline="central"
                />
                <h1>
                  <Link href="/">
                    Erin
                    <br />
                    Ballinger
                  </Link>
                </h1>
                <hr />
                <nav>
                  <NavItem label="Home" href="/" />
                  <NavItem
                    href="/projects"
                    label="Projects"
                    items={[
                      { href: "/projects/BLIMP", label: "BLIMP" },
                      { href: "/projects/inputStack", label: "Input Stack" },
                      { href: "/projects/sporeganizer", label: "Sporeganizer" },
                    ]}
                  />
                  <NavItem label="About" href="/about" />
                  <NavItem label="Contact" href="/contact" />
                  <NavItem label="404" href="/404" />
                </nav>
              </Pixelated>
            </aside>
            <Pixelated style={{ padding: "8px" }}>
              <main>{children}</main>
            </Pixelated>
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
