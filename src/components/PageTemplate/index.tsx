"use client";

import Footer from "@/components/Footer/index";
import HeaderBody from "@/components/HeaderBody/index";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type PageTemplateProps = {
  children: ReactNode;
};

export default function PageTemplate({
  children,
}: Readonly<PageTemplateProps>) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <HeaderBody />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer pathname={pathname} />
    </div>
  );
}
