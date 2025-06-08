
import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Placeholder for CV download functionality
    console.log("CV download triggered");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Habib <span className="text-primary">Kadiri</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Software Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Building scalable, user-focused solutions with React and Node.js.
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Berlin, Germany</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={downloadCV} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Habib Kadiri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full shadow-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">3+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
