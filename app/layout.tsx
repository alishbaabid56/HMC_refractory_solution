import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:
    "HMC Refractory Solution | Industrial Insulation & Metal Supplies",
  description:
    "HMC Refractory Solution specializes in insulation works and metal supplies for industrial solutions.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-white text-black antialiased">
           <Navbar />
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}