
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Med-Hat Support Care Site",
      description: "ReactJS + Chakra UI — 30% increase in user engagement",
      technologies: ["React", "Chakra UI", "JavaScript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop"
    },
    {
      title: "Rewindbar",
      description: "Membership system for a cosmetic agency — improved UX and retention",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
    },
    {
      title: "Tip Calculator",
      description: "Built in React + Redux — used by small businesses for daily billing",
      technologies: ["React", "Redux", "CSS"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 border-b border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow shadow-lg border border-border/50">
              <div className="h-40 bg-muted overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
