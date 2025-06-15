import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Wrench, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "React Native",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Next.js",
      ],
      icon: Code,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", " GraphQL", "FastAPI", ,],
      icon: Server,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
      icon: Database,
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      category: "Tools",
      skills: ["Docker", "Git", "Postman", "CI/CD", "Api Dog"],
      icon: Wrench,
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      category: "Soft Skills",
      skills: ["Mentorship", "Collaboration", "Problem-solving"],
      icon: Users,
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-border/50 shadow-lg hover-lift fade-in-delay glass-effect bg-gradient-to-br ${category.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
