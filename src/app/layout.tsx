import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";

import favicon from "@/assets/icons/favicon.ico";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import cn from "@/lib/utils";

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
      <body
        className={cn(
          "flex flex-col tracking-wide font-medium min-h-screen",
          urbanist.className,
        )}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex-1 p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
