"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Angular"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Next.js", "ASP.NET Core", "Django", "Flask", "Laravel", "Node.js", "Express.js"],
    },
    {
      title: "Base de données",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: ["PostgreSQL", "MySQL", "SQLite", "REST API", "JWT"],
    },
    {
      title: "Outils",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Compétences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon expertise technique</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une palette complète de technologies modernes pour créer des solutions web innovantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
