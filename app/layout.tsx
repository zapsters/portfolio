import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import { ThemeProvider } from "next-themes";
import Marquee from "react-fast-marquee";

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
  description: "Portfolio site for Erin (Apollo) Ballinger",
  icons: {
    icon: "PersonalLogoFox.png",
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
            <aside>Erin Ballinger</aside>
            <main>{children}</main>
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
