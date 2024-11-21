import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";


const gabriella = localFont({
  src: './fonts/gabriela-regular-webfont.woff',
  variable: '--font-gabriella',
  weight: "400",
})

export const metadata: Metadata = {
  title: "Jonathan Trevino",
  description: "Developer with 2+ years of experience building impactful products that solve real problems. Currently working on webportfolios.dev, platform for developer portfolio inspiration.",
  keywords: "software engineer, web developer, web developer portfolio, dev portfolio, next.js portfolio",
  openGraph: {
    images: {
      url: '/opengraph-image.png'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabriella.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`antialiased max-w-[1440px] mx-auto px-[24px] md:px-[72px] lg:px-[144px] py-[36px]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
