
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 border-t border-border/50 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground mb-1">
              Habib Kadiri
            </h3>
            <p className="text-xs text-muted-foreground">
              © 2024 All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild className="h-8 w-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-8 w-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-3 w-3" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="h-8 w-8">
              <a href="mailto:habkad97@gmail.com">
                <Mail className="h-3 w-3" />
              </a>
            </Button>
          </div>

          <Button onClick={scrollToTop} variant="outline" size="sm" className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
