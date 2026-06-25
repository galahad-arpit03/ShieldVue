import type { Metadata } from "next";
import { Inter, Sora, IBM_Plex_Sans, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShieldVUE | Intelligent Open Source & Supply Chain Security",
    template: "%s | ShieldVUE"
  },
  description: "Enterprise-grade automated SBOM and CBOM intelligence. Secure your software supply chain, manage open-source risks, and ensure continuous compliance with ShieldVUE.",
  keywords: [
    "SBOM",
    "CBOM",
    "Software Supply Chain Security",
    "Open Source Risk Management",
    "Vulnerability Management",
    "Continuous Compliance",
    "DevSecOps"
  ],
  authors: [{ name: "ApMoSys" }],
  creator: "ApMoSys",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shieldvue.com",
    title: "ShieldVUE | Intelligent Open Source & Supply Chain Security",
    description: "Enterprise-grade automated SBOM and CBOM intelligence. Secure your software supply chain, manage open-source risks, and ensure continuous compliance.",
    siteName: "ShieldVUE",
    images: [
      {
        url: "/brand_logo/shieldvue_logo.png",
        width: 1200,
        height: 630,
        alt: "ShieldVUE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShieldVUE | Intelligent Open Source & Supply Chain Security",
    description: "Enterprise-grade automated SBOM and CBOM intelligence. Secure your software supply chain, manage open-source risks, and ensure continuous compliance.",
    images: ["/brand_logo/shieldvue_logo.png"],
  },
};


import Navbar from "@/Common/NavBar/NavBar";
import Footer from "@/Common/Footer/Footer";

import MotionProvider from "@/providers/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${ibmPlexSans.variable} ${manrope.variable} h-full antialiased font-['Clash_Grotesk'] overflow-x-clip`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip font-light" suppressHydrationWarning>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
