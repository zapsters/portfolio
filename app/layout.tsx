import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Marquee from "react-fast-marquee";
import NavItem from "./components/NavItem";
import PersonalIcon from "./components/PersonalIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    let space = "     ";
    let separator = "|";
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
            <aside>
              <PersonalIcon
                style={{
                  width: "60%",
                  maxWidth: "220px",
                  padding: "5px 0px",
                  color: "var(--primary-color)",
                }}
                alignmentBaseline="central"
                height={"autoFill"}
              />
              <h1>
                <NavItem label="Erin Ballinger" href="/"></NavItem>
              </h1>
              <hr />
              <nav>
                <NavItem label="Home" href="/" />
                <NavItem
                  href="/projects"
                  label="Projects"
                  children={[
                    { href: "/projects/BLIMP", label: "B.L.I.M.P." },
                    { href: "/projects/inputStack", label: "Input Stack" },
                    { href: "/projects/sporeganizer", label: "Sporeganizer" },
                  ]}
                />
                <NavItem label="About" href="/about" />
                <NavItem label="Contact" href="/contact" />
                <NavItem label="NonExist" href="/hello" />
              </nav>
            </aside>
            <main>{children}</main>
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
