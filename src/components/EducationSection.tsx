
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
    <section id="education" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                {index < education.length - 1 && (
                  <div className="w-0.5 h-20 bg-border mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-primary font-medium mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground">
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
