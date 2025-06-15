import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted/30 relative">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <h2 className="font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-delay">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Dedicated and ambitious software developer with{" "}
            <span className="text-primary font-semibold">3+ years</span> of
            hands-on experience in full-stack development. Proven mentor and
            team collaborator, passionate about clean code, scalable
            architecture, and continuous learning.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover-lift glass-effect"
            >
              <a
                href="https://github.com/habbkad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover-lift glass-effect"
            >
              <a
                href="www.linkedin.com/in/habib-kadiri-b1237a188"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group hover-lift glass-effect"
            >
              <a href="mailto:habkad97@gmail.com">
                <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
