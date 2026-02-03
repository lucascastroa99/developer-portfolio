import DownloadResume from "./DownloadResume";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";
import ThemeSelector from "./ThemeSelector";

export default function HeaderBody() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <MobileMenu />

          <div className="hidden md:block">
            <NavigationLinks />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex md:items-center md:gap-2">
              <LanguageSelector />
              <ThemeSelector />
            </div>
            <DownloadResume />
          </div>
        </div>
      </div>
    </header>
  );
}
