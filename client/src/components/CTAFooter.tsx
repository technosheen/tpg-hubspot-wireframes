import { Button } from "@/components/ui/button";

export default function CTAFooter() {
  return (
    <section className="py-24 px-8 bg-foreground text-background">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-medium" data-testid="text-cta-headline">
          Never Compromise Your Pipeline. Start Today.
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed" data-testid="text-cta-description">
          Join 125+ companies that have transformed their go-to-market operations with TPG's proven approach.
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-background text-foreground border-background hover:bg-background/90"
          data-testid="button-schedule-meeting"
        >
          Schedule a Meeting
        </Button>
      </div>
    </section>
  );
}