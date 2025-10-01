import { Button } from "@/components/ui/button";
import ProcessAnimation from "@/components/ProcessAnimation";

export default function HeroSection() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-semibold text-[#000000] leading-tight" data-testid="text-hero-headline">
                <div className="lg:text-5xl text-[#262626] text-[36px]">We Help Companies Build</div>
                <div className="text-6xl lg:text-7xl mt-2" style={{ color: 'hsl(25 95% 53%)' }}>Predictable Pipeline</div>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-hero-subhead">Our SDR-as-a-Service model combines AI-enabled SDR teams with 10+ layers of support functions, 28+ data sources and a full GTM tech stack so our clients can focus on selling.
</p>
            </div>
          </div>
          <div className="relative">
            <ProcessAnimation />
          </div>
        </div>
        
        {/* Centered CTAs under the hero section */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" data-testid="button-talk-to-tpg-hero">
            Talk to TPG
          </Button>
          <Button variant="outline" size="lg" data-testid="button-see-how-it-works">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}