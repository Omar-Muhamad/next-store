import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";

import favicon from "@/assets/icons/favicon.ico";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const urbanist = Urbanist({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Fashion Plus",
  description: "Home of your favorite fashion",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} tracking-wide font-medium`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
