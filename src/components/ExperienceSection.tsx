
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
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-20 bg-border mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-primary font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground">
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
