import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Recycle, TrendingUp, Shield } from 'lucide-react';
import ThemeCard from '../components/site/ThemeCard';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 pattern-aluminum opacity-5" />
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Aluminum Can Trading
                <span className="block text-accent">Simplified</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                ARDEE INDUSTRIES connects buyers and sellers in the aluminum can market. 
                Reliable sourcing, competitive pricing, and sustainable solutions for your business.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/trading">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border shadow-industrial">
              <img
                src="/assets/generated/hero-aluminum-trading.dim_1920x900.png"
                alt="Aluminum can trading operations"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose ARDEE INDUSTRIES
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Industry expertise meets sustainable practices
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <ThemeCard>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Recycle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Sustainable Solutions</h3>
              <p className="text-muted-foreground">
                Supporting the circular economy through efficient aluminum can recovery and reuse programs.
              </p>
            </div>
          </ThemeCard>
          <ThemeCard>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                Market-driven rates and transparent pricing for both buyers and sellers in the aluminum market.
              </p>
            </div>
          </ThemeCard>
          <ThemeCard>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous quality checks and compliance with industry standards for every transaction.
              </p>
            </div>
          </ThemeCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Trading?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're looking to buy or sell aluminum cans, our team is ready to help you 
              with competitive quotes and reliable service.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
