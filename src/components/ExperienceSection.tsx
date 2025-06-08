
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Codetrain Africa",
      period: "2020 – 2024",
      description: "Developed full-stack applications and mentored junior developers"
    },
    {
      title: "Bootcamp Instructor", 
      company: "Codetrain Africa",
      period: "2020 – 2024",
      description: "Taught programming fundamentals and web development to aspiring developers"
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      period: "2020 – 2024", 
      description: "Built custom web solutions for various clients across different industries"
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-16 bg-border mt-1"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="bg-card rounded-lg p-4 shadow-lg border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-primary font-medium mb-2 text-sm">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
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

export default ExperienceSection;
