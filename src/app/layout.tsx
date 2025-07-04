import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhvir Singh | Full-Stack Developer - React, Next.js, TypeScript",
  description:
    "Sukhvir Singh is a full-stack developer with expertise in React, Next.js, and TypeScript. Explore modern projects and get in touch.",
  metadataBase: new URL("https://sukhvirportfolio.info"),
  alternates: {
    canonical: "https://sukhvirportfolio.info/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sukhvir Singh | Full-Stack Developer",
    description:
      "Explore Sukhvir Singh’s portfolio built with React, Next.js & TypeScript.",
    url: "https://sukhvirportfolio.info",
    siteName: "Sukhvir Portfolio",
    images: [
      {
        url: "https://sukhvirportfolio.info/og-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sukhvir Portfolio OpenGraph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukhvir Singh | Full-Stack Developer",
    description:
      "Explore Sukhvir Singh’s portfolio built with React, Next.js & TypeScript.",
    images: ["https://sukhvirportfolio.info/og-thumbnail.png"],
    creator: "@your_twitter",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Canonical Tag */}
        <link rel="canonical" href="https://sukhvirportfolio.info/" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative sm:pt-36`}
      >
        <ScrollToTopOnReload />

        {/* Background blurs */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {children}

        <ToastContainer position="top-right" className="!fixed" autoClose={4000} />
      </body>
    </html>
  );
}
