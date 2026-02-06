"use client";

import Footer from "@/components/Footer/index";
import HeaderBody from "@/components/HeaderBody/index";
import type { ReactNode } from "react";

type PageTemplateProps = {
  children: ReactNode;
};

export default function PageTemplate({
  children,
}: Readonly<PageTemplateProps>) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <HeaderBody />
      <main id="main-content" className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
