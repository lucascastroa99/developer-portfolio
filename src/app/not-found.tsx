import { Button } from "@/libraries/shadcn/components/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center p-6 text-center">
      <h1 className="text-7xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-6">
        The page or resource you are looking for does not exist.
      </p>
      <Link href="/" passHref>
        <Button variant="default" size="lg" aria-label="Go back to homepage">
          Go back to homepage
        </Button>
      </Link>
    </main>
  );
}
