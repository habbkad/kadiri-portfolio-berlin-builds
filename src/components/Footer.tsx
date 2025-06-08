
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Habib Kadiri
            </h3>
            <p className="text-muted-foreground">
              © 2024 All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:habkad97@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <Button onClick={scrollToTop} variant="outline">
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
