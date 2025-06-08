
import { Button } from "@/components/ui/button";
import { MapPin, Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    console.log("CV download triggered");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
                  Full-Stack Software Developer
                </p>
                <h1 className="font-bold text-foreground leading-tight">
                  Habib <span className="gradient-text">Kadiri</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building scalable, user-focused solutions with modern technologies and clean architecture.
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Berlin, Germany</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={downloadCV} 
                size="lg"
                className="group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact} 
                size="lg"
                className="group glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in-delay">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 shadow-2xl overflow-hidden border border-border/50 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Habib Kadiri"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-background hover-lift">
                <span className="text-primary-foreground font-bold text-lg">3+</span>
                <span className="text-primary-foreground text-xs">Years</span>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
