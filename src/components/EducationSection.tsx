
const EducationSection = () => {
  const education = [
    {
      degree: "MSc Computer Science (Cybersecurity)",
      institution: "SRH University, Berlin",
      period: "2024 – Present",
      description: "Specializing in cybersecurity with focus on secure software development"
    },
    {
      degree: "BSc Computer Engineering", 
      institution: "Ghana Communication Technology University",
      period: "2016 – 2020",
      description: "Foundation in computer engineering and software development principles"
    }
  ];

  return (
    <section id="education" className="py-16 px-6 border-b border-border/50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                {index < education.length - 1 && (
                  <div className="w-0.5 h-16 bg-border mt-1"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="bg-card rounded-lg p-4 shadow-lg border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-primary font-medium mb-2 text-sm">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground text-sm">
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
