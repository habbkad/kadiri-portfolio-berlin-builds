
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 border-b border-border/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            Dedicated and ambitious software developer with 3+ years of hands-on experience in full-stack development. 
            Proven mentor and team collaborator, passionate about clean code, scalable architecture, and continuous learning.
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <Button variant="outline" size="icon" asChild className="shadow-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="shadow-sm">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="shadow-sm">
              <a href="mailto:habkad97@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
