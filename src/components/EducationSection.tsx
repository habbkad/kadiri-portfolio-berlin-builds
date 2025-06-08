
import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "MSc Computer Science (Cybersecurity)",
      institution: "SRH University, Berlin",
      location: "Berlin, Germany",
      period: "2024 – Present",
      description: "Specializing in cybersecurity with focus on secure software development",
      status: "In Progress"
    },
    {
      degree: "BSc Computer Engineering", 
      institution: "Ghana Communication Technology University",
      location: "Accra, Ghana",
      period: "2016 – 2020",
      description: "Foundation in computer engineering and software development principles",
      status: "Completed"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Continuous learning journey in computer science and cybersecurity
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6 group fade-in-delay" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                {index < education.length - 1 && (
                  <div className="w-0.5 h-20 bg-gradient-to-b from-primary to-border mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <div className="p-6 rounded-2xl border border-border/50 shadow-lg hover-lift glass-effect group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <GraduationCap className="h-4 w-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2 mt-3 lg:mt-0">
                      <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full text-muted-foreground">
                        {edu.period}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-green-500/10 text-green-600 dark:text-green-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
