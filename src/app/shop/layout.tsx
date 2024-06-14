import { ReactNode } from "react";

import type { Metadata } from "next";

import SideFilters from "./_components/SideFilters";

import BreadCrumbs from "@/components/BreadCrumbs";

export const metadata: Metadata = {
  title: "All Products",
  description: "See all products of Fashion shop.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="px-20">
      <BreadCrumbs />
      <div className="mt-8 grid grid-cols-[1fr_4fr]">
        <SideFilters />
        {children}
      </div>
    </div>
  );
}
