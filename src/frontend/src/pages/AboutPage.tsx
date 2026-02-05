import { Shield, Leaf, Users, Award } from 'lucide-react';
import ThemeCard from '../components/site/ThemeCard';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/40 bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About ARDEE INDUSTRIES
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in aluminum can trading and sustainable recycling solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ARDEE INDUSTRIES is dedicated to facilitating efficient and sustainable aluminum can trading 
            in the global recycling market. We connect buyers and sellers, ensuring quality materials, 
            competitive pricing, and reliable logistics for every transaction.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment extends beyond commerce—we're actively contributing to the circular economy 
            by keeping valuable aluminum materials in productive use, reducing waste, and supporting 
            environmental sustainability.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our operations and relationships
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ThemeCard>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-accent/10 p-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Safety & Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Adhering to all industry regulations and safety standards in every aspect of our operations.
                </p>
              </div>
            </ThemeCard>
            <ThemeCard>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-accent/10 p-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Promoting recycled aluminum use to reduce environmental impact and conserve natural resources.
                </p>
              </div>
            </ThemeCard>
            <ThemeCard>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-accent/10 p-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  Building long-term relationships based on trust, transparency, and mutual success.
                </p>
              </div>
            </ThemeCard>
            <ThemeCard>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-accent/10 p-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Maintaining rigorous quality standards for materials, service, and every transaction.
                </p>
              </div>
            </ThemeCard>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Commitment to Sustainability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aluminum is infinitely recyclable without loss of quality, making it one of the most sustainable 
            materials in industrial use. Recycling aluminum cans saves 95% of the energy required to produce 
            new aluminum from raw materials.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At ARDEE INDUSTRIES, we facilitate this crucial recycling loop by connecting sources of used 
            aluminum cans with manufacturers who can transform them into new products. Every transaction 
            we facilitate contributes to:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Reduced energy consumption in aluminum production</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Lower greenhouse gas emissions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Conservation of natural bauxite resources</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Reduced landfill waste</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Support for the circular economy</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Operating Principles
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Clear communication about pricing, quality standards, and transaction terms at every step.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Consistent service delivery, on-time logistics, and dependable follow-through on commitments.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of aluminum grades, market dynamics, and industry best practices.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Tailored solutions that meet the specific needs of each buyer and seller we work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
