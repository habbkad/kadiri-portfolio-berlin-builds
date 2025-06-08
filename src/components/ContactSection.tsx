
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 px-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-foreground">
              Let's work together
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:habkad97@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  habkad97@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                <Github className="h-4 w-4 text-primary" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-border/50"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-border/50"
                />
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-border/50"
                />
                <Button type="submit" className="w-full shadow-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
