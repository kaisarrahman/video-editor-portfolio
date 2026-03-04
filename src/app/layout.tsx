import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/context/VideoContext";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Kaisar | Video Editor Portfolio",
  description: "High-converting video editing portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${instrumentSerif.variable} antialiased bg-[#050505] text-[#EFECE6] font-sans selection:bg-white/20 selection:text-white cursor-none overflow-x-hidden`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,15,17,1)_0%,rgba(5,5,5,1)_100%)] -z-20 pointer-events-none" />
        <NoiseOverlay />
        <CustomCursor />
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
