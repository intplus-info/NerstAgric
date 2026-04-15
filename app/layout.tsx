import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
})

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const urbanist = Urbanist({
//   variable: "--font-urbanist",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "NerstAgric",
  description: "Transforming Agribusiness Concepts into High-Yield Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
