import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import ThemeCard from '../components/site/ThemeCard';

export default function TradingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/40 bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Aluminum Can Trading
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive trading services for recycled aluminum cans and scrap materials
            </p>
          </div>
        </div>
      </section>

      {/* What We Trade */}
      <section className="container py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Trade</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ARDEE INDUSTRIES specializes in various grades and streams of aluminum can materials
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ThemeCard title="UBC (Used Beverage Cans)">
            <p className="text-muted-foreground">
              Post-consumer aluminum beverage cans, sorted and baled for recycling. The most common 
              grade in the aluminum recycling market.
            </p>
          </ThemeCard>
          <ThemeCard title="Sorted Aluminum Scrap">
            <p className="text-muted-foreground">
              Pre-sorted aluminum materials separated by alloy type and quality grade for efficient 
              processing and melting.
            </p>
          </ThemeCard>
          <ThemeCard title="Baled Aluminum">
            <p className="text-muted-foreground">
              Compressed and baled aluminum cans ready for transport and processing, optimized for 
              logistics efficiency.
            </p>
          </ThemeCard>
          <ThemeCard title="Industrial Aluminum Scrap">
            <p className="text-muted-foreground">
              Manufacturing offcuts, trimmings, and industrial waste aluminum suitable for remelting 
              and reuse.
            </p>
          </ThemeCard>
          <ThemeCard title="Shredded Aluminum">
            <p className="text-muted-foreground">
              Mechanically processed aluminum materials ready for smelting, with contaminants removed 
              and size optimized.
            </p>
          </ThemeCard>
          <ThemeCard title="Clean Aluminum Alloys">
            <p className="text-muted-foreground">
              Segregated aluminum alloys meeting specific composition requirements for high-value 
              manufacturing applications.
            </p>
          </ThemeCard>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How Trading Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our streamlined process ensures efficient transactions from inquiry to delivery
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">1. Submit Inquiry</h3>
              <p className="text-sm text-muted-foreground">
                Provide details about your aluminum materials, including grade, quantity, and location.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">2. Quality Check</h3>
              <p className="text-sm text-muted-foreground">
                Our team reviews specifications and may arrange inspection to verify material quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">3. Quote & Agreement</h3>
              <p className="text-sm text-muted-foreground">
                Receive competitive pricing based on current market rates and material specifications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/10 p-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">4. Logistics</h3>
              <p className="text-sm text-muted-foreground">
                Coordinate pickup or delivery with our logistics partners for seamless transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Needed */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Information Needed for a Quote
          </h2>
          <ThemeCard>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                To provide you with an accurate quote, please include the following details in your inquiry:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Material Type:</strong> UBC, sorted scrap, baled, shredded, or specific alloy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Quantity:</strong> Estimated volume in tons or pounds</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Location:</strong> Where the material is located or needs to be delivered</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Condition:</strong> Sorted, contamination level, moisture content</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Frequency:</strong> One-time transaction or ongoing supply/purchase</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Timeline:</strong> When you need pickup or delivery</span>
                </li>
              </ul>
            </div>
          </ThemeCard>
          <div className="mt-8 text-center">
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
