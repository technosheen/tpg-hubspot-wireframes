import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold text-foreground">
              TPG
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-solutions">
                Solutions
              </a>
              <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-results">
                Results
              </a>
              <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-process">
                How It Works
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button data-testid="button-talk-to-tpg">
              Talk to TPG
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}