import { Mail, Phone, MapPin, Warehouse } from 'lucide-react';
import InquiryForm from '../components/inquiry/InquiryForm';
import ThemeCard from '../components/site/ThemeCard';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b border-border/40 bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch for quotes, partnerships, or any inquiries about aluminum can trading
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to assist you with competitive quotes, material specifications, 
                and logistics coordination.
              </p>
            </div>

            <ThemeCard>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">smengineering8@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>9820790317</p>
                      <p>8956274865</p>
                      <p>8806318531</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      UNIT NO 105, MEGHDHOOT SIGNATURE INDUSTRIAL PARK, NEAR RTO, HDIL VIRAR EAST, MUMBAI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Warehouse className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Warehouse</p>
                    <p className="text-sm text-muted-foreground">
                      We have a warehouse in Wada MIDC
                    </p>
                  </div>
                </div>
              </div>
            </ThemeCard>

            <div className="rounded-lg bg-muted/50 p-4 border border-border">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to inquiries within 24 business hours. For urgent matters, 
                please call our main line.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <ThemeCard title="Submit an Inquiry" description="Fill out the form below and we'll get back to you as soon as possible">
              <InquiryForm />
            </ThemeCard>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-xl font-semibold mb-3">What to Include in Your Inquiry</h3>
            <p className="text-muted-foreground">
              For the most accurate quote, please provide details about material type, quantity, 
              location, and timeline. The more information you share, the better we can serve your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
