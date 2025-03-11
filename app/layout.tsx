import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import Script from "next/script";
import SideNav from "./components/sideNav";


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
    type: 'website',
    title: 'Jonathan Trevino',
    description: 'Developer with 2+ years of experience building impactful products that solve real problems. Currently working on webportfolios.dev, platform for developer portfolio inspiration.',
    images: {
      url: '/opengraph-image.png'
    },
    siteName: 'jonathantrevino.com',
    locale: 'en_US',
  },
  creator: 'Jonathan Trevino',
  applicationName: 'Jonathan Trevino Portfolio',
  generator: 'Next.js',
  metadataBase: new URL('https://jonathantrevino.com'),
  twitter: {
    card: 'summary_large_image',
    title: "Jonathan Trevino",
    description: "Developer with 2+ years of experience building impactful products that solve real problems. Currently working on webportfolios.dev, platform for developer portfolio inspiration.",
    images: ['/opengraph-image.png'],
    creator: 'Joanthan Trevino'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabriella.variable}`}>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`antialiased max-w-[1440px] mx-auto px-[24px] md:px-[72px]  py-[36px] overflow-x-hidden`}
      >
        <Nav />
        <div className='flex gap-12'>
          <aside className='w-fit xl:block hidden'>
            <SideNav />
          </aside>
          <main className='w-full'>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
