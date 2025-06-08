
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      category: "Databases",
      skills: ["MongoDB"]
    },
    {
      category: "Tools",
      skills: ["Docker", "Git", "Postman", "CI/CD"]
    },
    {
      category: "Soft Skills",
      skills: ["Mentorship", "Collaboration", "Problem-solving"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-5 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
