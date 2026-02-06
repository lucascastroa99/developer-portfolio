import { Skeleton } from "@/libraries/shadcn/components/skeleton";

function generateUniqueId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export default function Loading() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 2xl:max-w-5xl">
      <div className="space-y-8 2xl:space-y-10">
        {/* Title */}
        <div className="text-center">
          <Skeleton className="bg-accent/15! mx-auto h-10 w-64 sm:h-12 sm:w-80 2xl:h-14 2xl:w-96" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {Array.from({ length: 5 }).map(() => (
            <div key={generateUniqueId("section")} className="space-y-4">
              <Skeleton className="bg-accent/15! h-8 w-48 sm:h-9 sm:w-56 2xl:h-10 2xl:w-64" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map(() => (
                  <Skeleton key={generateUniqueId("line")} className="bg-accent/15! h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
