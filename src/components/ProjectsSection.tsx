import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { url } from "inspector";
import ai_recipe from "@/assets/ai_recipe.png"; // Placeholder for AI Recipe image
import TipCal from "@/assets/tipCal.png"; // Placeholder for Tip Calculator image
import space from "@/assets/space.png"; // Placeholder for Space Tourism image

const ProjectsSection = () => {
  const projects = [
    {
      title: "Space Tourism",
      description: "ReactJS + Chakra UI ",
      technologies: ["React", "Chakra UI", "JavaScript"],
      image: space,
      metrics: "30% ↑ engagement",
      url: "https://space-app-nine.vercel.app",
      github: "https://github.com/habbkad/space_app",
    },
    {
      title: "Rewindbar",
      description:
        "Membership system for a cosmetic agency — improved UX and retention",
      technologies: ["React", "Gasby", "CSS"],
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjE0IDI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNLTAuMDAwMjQ0MTQxIDAuNTIwMjY0SDQuODcyNDNDNy40NDIxIDAuNTIwMjY0IDkuNDM2MDEgMS4wNjg5NSAxMC44NTQyIDIuMTY1OThDMTIuMjcyMyAzLjI2MyAxMi45ODE0IDQuNzk3NDcgMTIuOTgxNCA2Ljc2OTY1QzEyLjk4MTQgOC4yOTgwOCAxMi41Mzg5IDkuNTY3NzQgMTEuNjU0MSAxMC41Nzg1QzEwLjc2OTMgMTEuNTg5MiA5LjQ5MDUxIDEyLjI2NzEgNy44MTc4IDEyLjYxMjJWMTIuODM0MUM5LjQxNzc4IDEzLjE1NDYgMTAuNzI2OCAxMy45MTg5IDExLjc0NSAxNS4xMjY5QzEyLjc2MzIgMTYuMzM0OCAxMy41MjY4IDE3LjgyNjIgMTQuMDM1OSAxOS42MDExQzE0LjQ5NjUgMjEuMjI4MiAxNC45NTExIDIyLjQ5MTcgMTUuMzk5NiAyMy4zOTE1QzE1Ljg0ODEgMjQuMjkxMyAxNi4zNDQ5IDI0LjkzODMgMTYuODkwNCAyNS4zMzI3QzE3LjQzNTggMjUuNzI3MiAxOC4wODQ0IDI2LjAxMDcgMTguODM1OSAyNi4xODMyVjI2LjQwNTJIMTcuMzQ1QzE2LjI3ODMgMjYuNDA1MiAxNS4zOTk2IDI2LjIwNzkgMTQuNzA4NyAyNS44MTM1QzE0LjAxNzggMjUuNDE5IDEzLjQyOTkgMjQuNzUzNiAxMi45NDUxIDIzLjgxNjhDMTIuNDYwMiAyMi44OCAxMS45OTk1IDIxLjU4NTcgMTEuNTYzMiAxOS45MzRDMTAuODYwMiAxNy4zOTQ5IDkuOTI2OSAxNS41OTUyIDguNzYzMjggMTQuNTM1MkM3LjU5OTY2IDEzLjQ3NTEgNi4xODE0MyAxMi45NDUxIDQuNTA4NzIgMTIuOTQ1MUg0LjI5MDU3VjEyLjI3OTVINC41MDg3MkM4LjQxMTcgMTIuMjc5NSAxMC4zNjMyIDEwLjQ1NTIgMTAuMzYzMiA2LjgwNjdDMTAuMzYzMiAzLjIwNzQ3IDguNTMyOTkgMS40MDc4MiA0Ljg3MjQzIDEuNDA3ODJIMi40NzIzOVYyNi40MDUySC0wLjAwMDI0NDE0MVYwLjUyMDI2NFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44OTA0IDI2LjQwNTJWMC41MjAyNjRIMzIuOTgxMlYyLjMzMjI0TDI2LjYxNzYgMS40ODE3NEMyNS41MDI1IDEuMzMzODIgMjQuNzUwOSAxLjI1OTk5IDI0LjM2MyAxLjI1OTk5VjEyLjUzODNDMjQuNjc4MiAxMi41MzgzIDI1LjQyOTcgMTIuNTAxMyAyNi42MTc2IDEyLjQyNzNMMzIuNTgxMSAxMi4wNTc2VjEzLjc1ODZMMjYuNjE3NiAxMy4zODg4QzI1LjQyOTcgMTMuMzE0OCAyNC42NzgyIDEzLjI3NzggMjQuMzYzIDEzLjI3NzhWMjUuNjY1NkMyNC43OTk0IDI1LjY2NTYgMjUuNTYzIDI1LjU5MTYgMjYuNjUzOSAyNS40NDM3TDMzLjA5MDIgMjQuNTkzMlYyNi40MDUySDIxLjg5MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzYuOTUyNiAwLjI2MTEwOEgzOS42MDcyTDQ4LjUxNjIgMjIuODkySDQ4LjczNDNMNTQuNTUyNCA4LjI0ODU1TDUxLjM4ODkgMC4yNjExMDhINTQuMDQzM0w2Mi45MTU5IDIyLjgxNzlINjMuMTM0MUw3MC40Nzk1IDAuMjYxMTA4SDczLjEzNEw2Mi42NjE0IDI2LjY2MzhINjEuODYxNEw1NS4wNjE2IDkuNDY4ODJMNDguMjI1MiAyNi42NjM4SDQ3LjQyNTJMMzYuOTUyNiAwLjI2MTEwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05Mi40NTYxIDI2LjQwNTJMOTMuMzY1MiAwLjAwMjY4NTU1SDkzLjgwMTVMMTEyLjA5MiAyMi40ODU2SDExMi4zMUwxMTEuNTEgMC41MjAyODZIMTEzLjk4M0wxMTMuMDc0IDI2LjkyM0gxMTIuNjM4TDk0LjM0NyA0LjQ0MDA5SDk0LjEyODhMOTQuOTI4OCAyNi40MDUySDkyLjQ1NjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIxLjAyMyAyNi40MDUyVjAuNTIwMjY0SDEyOS4wMjNDMTMxLjgzNSAwLjUyMDI2NCAxMzQuMjg0IDEuMDYyNjYgMTM2LjM2OSAyLjE0NzM2QzEzOC40NTQgMy4yMzIwNSAxNDAuMDc4IDQuNzQyMSAxNDEuMjQxIDYuNjc3M0MxNDIuNDA1IDguNjEyNSAxNDIuOTg3IDEwLjg3NDIgMTQyLjk4NyAxMy40NjI3QzE0Mi45ODcgMTYuMDUxMiAxNDIuNDA1IDE4LjMxMzEgMTQxLjI0MSAyMC4yNDgzQzE0MC4wNzggMjIuMTgzNSAxMzguNDU0IDIzLjY5MzQgMTM2LjM2OSAyNC43NzgxQzEzNC4yODQgMjUuODYyOCAxMzEuODM1IDI2LjQwNTIgMTI5LjAyMyAyNi40MDUySDEyMS4wMjNaTTEyOS4wMjMgMS40MDc4MkgxMjMuNDk2VjI1LjUxNzZIMTI5LjAyM0MxMzIuNTM4IDI1LjUxNzYgMTM1LjI4NCAyNC40NTc2IDEzNy4yNiAyMi4zMzc1QzEzOS4yMzUgMjAuMjE3NCAxNDAuMjIzIDE3LjI1OTIgMTQwLjIyMyAxMy40NjI3QzE0MC4yMjMgOS42NjYyNyAxMzkuMjM1IDYuNzA3OTkgMTM3LjI2IDQuNTg3OUMxMzUuMjg0IDIuNDY3ODEgMTMyLjUzOCAxLjQwNzgyIDEyOS4wMjMgMS40MDc4MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNDkuOTMxIDI2LjQwNTJWMC41MjAyNjRIMTU0Ljk4NkMxNTcuNjA0IDAuNTIwMjY0IDE1OS42NCAxLjA3NTA2IDE2MS4wOTUgMi4xODQ0MUMxNjIuNTQ5IDMuMjkzNzYgMTYzLjI3NyA0LjgzNDUyIDE2My4yNzcgNi44MDY3QzE2My4yNzcgOC4yNjExOCAxNjIuODUyIDkuNDk5OTMgMTYyLjAwNCAxMC41MjNDMTYxLjE1NiAxMS41NDYxIDE1OS45NjggMTIuMjQyNCAxNTguNDQgMTIuNjEyMlYxMi44MzQxQzE2MC41MjUgMTMuMTA1MyAxNjIuMTU1IDEzLjgzODcgMTYzLjMzMSAxNS4wMzQzQzE2NC41MDcgMTYuMjMgMTY1LjA5NSAxNy43NCAxNjUuMDk1IDE5LjU2NDNDMTY1LjA5NSAyMS43MDkgMTY0LjI4MyAyMy4zODUyIDE2Mi42NTkgMjQuNTkzMkMxNjEuMDM0IDI1LjgwMTEgMTU4Ljc1NiAyNi40MDUyIDE1NS44MjIgMjYuNDA1MkgxNDkuOTMxWk0xNTUuMDIyIDEuNDA3ODJIMTUyLjQwNFYxMi41MDEySDE1NC45ODZDMTU4LjgxNiAxMi41MDEyIDE2MC43MzEgMTAuNjUyNCAxNjAuNzMxIDYuOTU0NTNDMTYwLjczMSAzLjI1NjcgMTU4LjgyOCAxLjQwNzgyIDE1NS4wMjIgMS40MDc4MlpNMTU1LjgyMiAxMy4zODg4SDE1Mi40MDRWMjUuNTE3NkgxNTUuODIyQzE2MC4yNTkgMjUuNTE3NiAxNjIuNDc3IDIzLjQ5NjMgMTYyLjQ3NyAxOS40NTMzQzE2Mi40NzcgMTUuNDEwMyAxNjAuMjU5IDEzLjM4ODggMTU1LjgyMiAxMy4zODg4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE2OS4wNzUgMjYuNDA1MkwxNzguODU2IDAuNTIwMjY0SDE4MS4xMTFMMTkwLjg5MyAyNi40MDUySDE4OC4yMzhMMTgzLjcyOSAxNC4yNzY0SDE3NS40NzVMMTcxLjcyOSAyNi40MDUySDE2OS4wNzVaTTE3OS4xMTEgMi40NDMyMUwxNzUuNzI5IDEzLjM4ODhIMTgzLjQwMkwxNzkuMzI5IDIuNDQzMjFIMTc5LjExMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOTQuODA3IDAuNTIwMjY0SDE5OS42OEMyMDIuMjUgMC41MjAyNjQgMjA0LjI0NCAxLjA2ODk1IDIwNS42NjIgMi4xNjU5OEMyMDcuMDggMy4yNjMgMjA3Ljc4OSA0Ljc5NzQ3IDIwNy43ODkgNi43Njk2NUMyMDcuNzg5IDguMjk4MDggMjA3LjM0NyA5LjU2Nzc0IDIwNi40NjIgMTAuNTc4NUMyMDUuNTc3IDExLjU4OTIgMjA0LjI5OCAxMi4yNjcxIDIwMi42MjYgMTIuNjEyMlYxMi44MzQxQzIwNC4yMjUgMTMuMTU0NiAyMDUuNTM1IDEzLjkxODkgMjA2LjU1MyAxNS4xMjY5QzIwNy41NzEgMTYuMzM0OCAyMDguMzM1IDE3LjgyNjIgMjA4Ljg0NCAxOS42MDExQzIwOS4zMDQgMjEuMjI4MiAyMDkuNzU5IDIyLjQ5MTcgMjEwLjIwNyAyMy4zOTE1QzIxMC42NTYgMjQuMjkxMyAyMTEuMTUzIDI0LjkzODMgMjExLjY5OCAyNS4zMzI3QzIxMi4yNDQgMjUuNzI3MiAyMTIuODkyIDI2LjAxMDcgMjEzLjY0NCAyNi4xODMyVjI2LjQwNTJIMjEyLjE1M0MyMTEuMDg2IDI2LjQwNTIgMjEwLjIwNyAyNi4yMDc5IDIwOS41MTYgMjUuODEzNUMyMDguODI1IDI1LjQxOSAyMDguMjM4IDI0Ljc1MzYgMjA3Ljc1MyAyMy44MTY4QzIwNy4yNjggMjIuODggMjA2LjgwNyAyMS41ODU3IDIwNi4zNzEgMTkuOTM0QzIwNS42NjggMTcuMzk0OSAyMDQuNzM1IDE1LjU5NTIgMjAzLjU3MSAxNC41MzUyQzIwMi40MDcgMTMuNDc1MSAyMDAuOTg5IDEyLjk0NTEgMTk5LjMxNiAxMi45NDUxSDE5OS4wOThWMTIuMjc5NUgxOTkuMzE2QzIwMy4yMTkgMTIuMjc5NSAyMDUuMTcxIDEwLjQ1NTIgMjA1LjE3MSA2LjgwNjdDMjA1LjE3MSAzLjIwNzQ3IDIwMy4zNDEgMS40MDc4MiAxOTkuNjggMS40MDc4MkgxOTcuMjhWMjYuNDA1MkgxOTQuODA3VjAuNTIwMjY0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04My42NDQxIDEzLjQ1OThMODUuMzU5MiAxNi45NDc4Qzg1LjQxMjMgMTcuMDU1OCA4NS40Mzk5IDE3LjE3NDggODUuNDM5OSAxNy4yOTU1VjI2LjEzMTRDODUuNDM5OSAyNi41NjA4IDg1LjA5NzYgMjYuOTA5MSA4NC42NzU0IDI2LjkwOTFIODAuOTAzNUM4MC40ODEyIDI2LjkwOTEgODAuMTM4OSAyNi41NjA4IDgwLjEzODkgMjYuMTMxNFYxNy4yOTU1QzgwLjEzODkgMTcuMTc0OCA4MC4xNjY2IDE3LjA1NTggODAuMjE5NiAxNi45NDc4TDgxLjkzNDYgMTMuNDU5OEw4MC4yMTk2IDkuOTcxOTVDODAuMTY2NiA5Ljg2NDAxIDgwLjEzODkgOS43NDQ5NCA4MC4xMzg5IDkuNjI0MjRWMC43ODg1MzNDODAuMTM4OSAwLjM1OTIxNyA4MC40ODEyIDAuMDExMTA4NCA4MC45MDM1IDAuMDExMTA4NEg4NC42NzU0Qzg1LjA5NzYgMC4wMTExMDg0IDg1LjQzOTkgMC4zNTkyMTcgODUuNDM5OSAwLjc4ODUzM1Y5LjYyNDI0Qzg1LjQzOTkgOS43NDQ5NCA4NS40MTIzIDkuODY0MDEgODUuMzU5MiA5Ljk3MTk1TDgzLjY0NDEgMTMuNDU5OFpNODIuNzg5NCAxNS4xOTg0TDgxLjY2OCAxNy40NzkxVjI1LjM1MzhIODMuOTEwOFYxNy40NzkxTDgyLjc4OTQgMTUuMTk4NFpNODMuOTEwOCA5LjQ0MDY3VjEuNTY2MDZIODEuNjY4VjkuNDQwNjdMODIuNzg5NCAxMS43MjE0TDgzLjkxMDggOS40NDA2N1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
      metrics: "Enhanced user experience",
      url: "https://rewind-bar.com/",
      github: "",
    },

    {
      title: "Tip Calculator",
      description:
        "Built in React + Redux — used by small businesses for daily billing",
      technologies: ["React", "Redux", "CSS"],
      image: TipCal,
      metrics: "Business ready",
      url: "https://tip-calculator-mocha-chi.vercel.app/",
      github: "https://github.com/habbkad/tip_calculator",
    },
    {
      title: "Ai Recipe Generator",
      description:
        "Built in React + Redux — generates recipes based on user preferences (backend not deployed yet, available in github)",
      technologies: ["React", "Redux", "node.js", "openAI", "Tailwind", "CSS"],
      image: ai_recipe,
      metrics: "In development",
      url: "https://space-app-nine.vercel.app",
      github: "https://github.com/habbkad/recipe-rendezvous-kitchen-creator",
    },
    {
      title: "Med-Hat Support Care Site",
      description: "ReactJS + Chakra UI — site for healthcare support",
      technologies: ["React", "Chakra UI", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      metrics: "In development",
      url: "https://medhat-supports-care.vercel.app/",
      github: "https://github.com/habbkad/medhat_support_care.git",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing real-world applications with measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift border-border/50 glass-effect fade-in-delay"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground"
                  >
                    {project.metrics}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live
                      </Button>
                    </a>
                  )}
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
