import { Card, CardContent, CardHeader } from "@/libraries/shadcn/components/card";
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
          <Skeleton className="bg-accent/15! mx-auto h-10 w-64 sm:h-12 sm:w-80 2xl:h-14 2xl:w-96" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 2xl:space-y-10">
          {/* Timeline line */}
          <div className="absolute left-1 top-0 h-full w-0.5 bg-border sm:left-6 2xl:left-7" />

          {Array.from({ length: 4 }).map(() => (
            <div key={generateUniqueId("experience")} className="relative pl-6 sm:pl-16 2xl:pl-20">
              {/* Timeline dot */}
              <Skeleton className="bg-accent/15! absolute left-0 top-6 h-3 w-3 rounded-full border-2 sm:left-4.5 2xl:left-5.5 2xl:h-4 2xl:w-4" />

              <Card className="border-2 py-0">
                <CardHeader className="p-4 pb-0! sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between 2xl:gap-3">
                    <div className="space-y-2 2xl:space-y-3">
                      <Skeleton className="bg-accent/15! h-7 w-48 sm:h-8 sm:w-64 2xl:h-9 2xl:w-72" />
                      <Skeleton className="bg-accent/15! h-5 w-56 sm:h-6 sm:w-72 2xl:h-7 2xl:w-80" />
                      <Skeleton className="bg-accent/15! h-4 w-40 sm:h-5 sm:w-48 2xl:h-6 2xl:w-56" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Skeleton className="bg-accent/15! h-4 w-32 sm:w-40 2xl:h-5 2xl:w-48" />
                      <Skeleton className="bg-accent/15! h-3 w-24 sm:w-32 2xl:h-4 2xl:w-40" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 p-4 pt-0! sm:p-6">
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map(() => (
                      <Skeleton key={generateUniqueId("desc")} className="bg-accent/15! h-4 w-full" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 2xl:gap-3 pt-2">
                    {Array.from({ length: 4 }).map(() => (
                      <Skeleton key={generateUniqueId("tag")} className="bg-accent/15! h-6 w-20 2xl:h-7 2xl:w-24" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
