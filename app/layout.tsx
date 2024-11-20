import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import React from "react";
import {ShootingStars} from "@/components/ui/shootingstars";
import {StarsBackground} from "@/components/ui/shootingstarsBackground";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "ent Designs | Innovative Web and Graphic Design Solutions",
  description: "Discover Kent Designs, where creativity meets technology. We specialize in responsive web design, user-centric interfaces, and compelling graphic design to elevate your brand's digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${montserrat.variable} antialiased bg-black`}
    >
    <div className="fixed inset-0 z-0">
        <StarsBackground className="w-full h-full"/>
        <ShootingStars className="w-full h-full"/>
    </div>
    <div className="relative z-10">
        {children}
    </div>
    </body>
    </html>
  );
}
