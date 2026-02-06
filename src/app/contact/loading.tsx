import { Card, CardContent } from "@/libraries/shadcn/components/card";
import { Skeleton } from "@/libraries/shadcn/components/skeleton";

function generateUniqueId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export default function Loading() {
  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-12 md:py-6">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="space-y-10 2xl:space-y-12">
          {/* Header */}
          <div className="text-center">
            <Skeleton className="bg-accent/15! mx-auto h-10 w-48 sm:h-12 sm:w-56 2xl:h-14 2xl:w-64" />
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map(() => (
              <Card key={generateUniqueId("card")} className="border-2 py-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Skeleton className="bg-accent/15! h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="bg-accent/15! h-5 w-24" />
                      <Skeleton className="bg-accent/15! h-4 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form or Additional Content */}
          <div className="space-y-6">
            <Skeleton className="bg-accent/15! h-8 w-48" />
            <div className="grid gap-4">
              {Array.from({ length: 3 }).map(() => (
                <Skeleton key={generateUniqueId("input")} className="bg-accent/15! h-12 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
