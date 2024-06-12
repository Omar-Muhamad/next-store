import { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description: "See all products of Fashion shop.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
