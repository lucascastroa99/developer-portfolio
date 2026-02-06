import { Card, CardContent } from "@/libraries/shadcn/components/card";
import { Skeleton } from "@/libraries/shadcn/components/skeleton";

function generateUniqueId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export default function Loading() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 2xl:max-w-7xl">
      <div className="space-y-10 2xl:space-y-12">
        {/* Header */}
        <div className="text-center">
          <Skeleton className="bg-accent/15! mx-auto h-10 w-48 sm:h-12 sm:w-64 2xl:h-14 2xl:w-80" />
        </div>

        {/* Profile Card */}
        <Card className="border-2 py-0">
          <CardContent className="p-6 sm:p-8 2xl:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start 2xl:gap-8">
              <Skeleton className="bg-accent/15! h-32 w-32 rounded-full border-4 sm:h-40 sm:w-40 2xl:h-48 2xl:w-48" />
              <div className="flex-1 space-y-4 text-center sm:text-left 2xl:space-y-5">
                <div className="space-y-2">
                  <Skeleton className="bg-accent/15! mx-auto h-8 w-48 sm:mx-0 sm:h-10 sm:w-56 2xl:h-12 2xl:w-64" />
                  <Skeleton className="bg-accent/15! mx-auto h-6 w-32 sm:mx-0 sm:h-7 sm:w-40 2xl:h-8 2xl:w-48" />
                </div>
                <Skeleton className="bg-accent/15! mx-auto h-20 w-full max-w-md sm:mx-0 sm:h-24 2xl:h-28" />
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {Array.from({ length: 6 }).map(() => (
                    <Skeleton key={generateUniqueId("badge")} className="bg-accent/15! h-8 w-24 2xl:h-9 2xl:w-28" />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Sections */}
        {Array.from({ length: 3 }).map(() => (
          <div key={generateUniqueId("section")} className="space-y-5 2xl:space-y-6">
            <Skeleton className="bg-accent/15! h-8 w-48 border-b border-border pb-2 sm:h-9 sm:w-56 2xl:h-10 2xl:w-64" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 2xl:gap-6">
              {Array.from({ length: 6 }).map(() => (
                <div key={generateUniqueId("skill")} className="flex flex-col items-center gap-3 p-4 rounded-lg">
                  <Skeleton className="bg-accent/15! h-16 w-16 rounded-full" />
                  <Skeleton className="bg-accent/15! h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
