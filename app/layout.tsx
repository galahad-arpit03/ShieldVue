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
  title: "ShieldVUE",
  description: "Automated SBOM and CBOM intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${ibmPlexSans.variable} ${manrope.variable} h-full antialiased font-inter overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var currentFont = localStorage.getItem('shieldvue-font');
                if (currentFont) {
                  document.documentElement.classList.remove('font-inter');
                  document.documentElement.classList.add(currentFont);
                }
              } catch (e) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
