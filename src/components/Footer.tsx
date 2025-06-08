
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-muted/30 relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Habib Kadiri
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Full-Stack Software Developer
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-red-500" /> using React & TypeScript
            </p>
          </div>
          
          <div className="flex gap-3 justify-center">
            <Button variant="outline" size="icon" asChild className="hover-lift glass-effect group">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover-lift glass-effect group">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover-lift glass-effect group">
              <a href="mailto:habkad97@gmail.com">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="text-center md:text-right">
            <Button 
              onClick={scrollToTop} 
              variant="outline" 
              className="group hover-lift glass-effect"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              © 2024 Habib Kadiri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
