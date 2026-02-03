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
      <main className="flex-1">{children}</main>
    </div>
  );
}
