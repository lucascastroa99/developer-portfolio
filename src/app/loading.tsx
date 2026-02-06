import { Skeleton } from "@/libraries/shadcn/components/skeleton";

export default function Loading() {
  return (
    <div className="relative flex flex-1 items-center justify-center px-4 py-12 md:py-6">
      <div className="container mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:gap-12 2xl:gap-20">
          <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-16 2xl:gap-24 md:items-center w-full">
            <div className="flex justify-center md:justify-end">
              <Skeleton className="bg-accent/15! rounded-full h-72 w-72 md:w-100 md:h-100 2xl:w-137.5 2xl:h-137.5" />
            </div>

            <div className="space-y-6 2xl:space-y-8 text-center md:text-left w-full">
              <Skeleton className="bg-accent/15! h-12 w-full sm:h-16 2xl:h-20" />
              <div className="space-y-2 2xl:space-y-3">
                <Skeleton className="bg-accent/15! h-6 w-48 mx-auto md:mx-0 sm:h-7 2xl:h-8" />
                <Skeleton className="bg-accent/15! h-10 w-64 mx-auto md:mx-0 sm:h-12 sm:w-80 2xl:h-14 2xl:w-96" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 2xl:gap-8 text-center max-w-3xl 2xl:max-w-4xl">
            <Skeleton className="bg-accent/15! h-6 w-full sm:h-7 2xl:h-8" />

            <div className="flex flex-col items-center gap-4 2xl:gap-6 w-full sm:flex-row sm:w-auto">
              <Skeleton className="bg-accent/15! h-12 w-full sm:w-40 2xl:h-14 2xl:w-44" />
              <Skeleton className="bg-accent/15! h-12 w-full sm:w-40 2xl:h-14 2xl:w-44" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
