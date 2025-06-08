
import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    console.log("CV download triggered");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-4">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Habib <span className="text-primary">Kadiri</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Software Developer
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Building scalable, user-focused solutions with modern technologies and clean architecture.
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground pt-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Berlin, Germany</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
              <Button onClick={downloadCV} className="flex items-center gap-2 shadow-lg">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" onClick={scrollToContact} className="shadow-sm">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 shadow-2xl overflow-hidden border border-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Habib Kadiri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary rounded-full shadow-xl flex items-center justify-center border-4 border-background">
                <span className="text-primary-foreground font-bold text-sm">3+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
