import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  weight: ['400'],        // Choose available weights
  style: ['normal'],             // Can also be ['normal', 'italic'] if needed
  subsets: ['latin'],  // Choose subsets
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "Sample generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-[765px] min-w-[1240px]`}
      >
        {children}
      </body>
    </html>
  );
}
