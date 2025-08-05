import type { Metadata } from "next";
import { Sora, Inter, Frijole, Comic_Neue, Caveat, Permanent_Marker, Gloria_Hallelujah, Andika } from "next/font/google";
import "./globals.css";
import MotionLayout from "./_motion-layout";
import { Toaster } from 'react-hot-toast'

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "700"] });
const frijole = Frijole({ variable: "--font-frijole", subsets: ["latin"], weight: "400" });
const comicNeue = Comic_Neue({ variable: "--font-comic", subsets: ["latin"], weight: ["400", "700"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["400", "700"] });
const permanentMarker = Permanent_Marker({variable: "--font-permanent-marker", subsets: ["latin"], weight: "400",});
const gloriaHallelujah = Gloria_Hallelujah({variable: "--font-gloria", subsets: ["latin"], weight: "400",});
const andika = Andika({variable: "--font-andika", subsets: ["latin"], weight: ["400", "700"],});

export const metadata: Metadata = {
  title: "Phaser Beary",
  description: "This is Phaser Beary – your new favorite digital slacker.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${frijole.variable} ${comicNeue.variable} ${caveat.variable} ${permanentMarker.variable} ${gloriaHallelujah.variable} ${andika.variable}`}>
      <body className="font-sora antialiased">
        <MotionLayout>{children}</MotionLayout>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
