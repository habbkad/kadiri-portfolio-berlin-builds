
import { Building, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Codetrain Africa",
      period: "2020 – 2024",
      description: "Developed full-stack applications and mentored junior developers",
      highlights: ["Full-stack development", "Team mentorship", "Code reviews"]
    },
    {
      title: "Bootcamp Instructor", 
      company: "Codetrain Africa",
      period: "2020 – 2024",
      description: "Taught programming fundamentals and web development to aspiring developers",
      highlights: ["Curriculum development", "Student mentoring", "Technical training"]
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      period: "2020 – 2024", 
      description: "Built custom web solutions for various clients across different industries",
      highlights: ["Client management", "Custom solutions", "Cross-industry experience"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            4+ years of diverse experience in software development and education
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6 group fade-in-delay" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-border mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="p-6 rounded-2xl border border-border/50 shadow-lg hover-lift glass-effect group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 lg:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
