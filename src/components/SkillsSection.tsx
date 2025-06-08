
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
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
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
