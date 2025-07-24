"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "ExpenseTracker",
      description:
        "Application web de gestion financière personnelle. Elle permet aux utilisateurs de suivre leurs revenus et dépenses, d'analyser leurs habitudes financières avec des graphiques interactifs, et de gérer leurs transactions de manière intuitive.",
      image: "/images/expense-tracker-logo.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/Patrick17-ui/expense-dashboard",
      category: "Web App",
      year: "2025",
    },
    {
      title: "Gestion de Produits",
      description:
        "Application de gestion de produits développée avec Next.js 15 et une API REST documentée avec OpenAPI. Elle permet de gérer un catalogue de produits avec toutes les opérations CRUD (Créer, Lire, Modifier, Supprimer) dans une interface moderne et responsive.",
      image: "/images/product-management-logo.png",
      tags: ["React", "Next.js", "Tailwind CSS", "OpenAPI"],
      githubUrl: "https://github.com/Patrick17-ui/product-management-app",
      category: "Web App",
      year: "2025",
    },
    {
      title: "Portfolio Personnel",
      description:
        "Site personnel moderne et responsive présentant mon profil, mon parcours, mes compétences et mes projets. Développé avec Next.js et Tailwind CSS, il inclut des animations fluides et un design adaptatif.",
      image: "/images/portfolio-hero.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Patrick17-ui/portfolio_ac",
      category: "Web App",
      year: "2024",
    },
    {
      title: "Transport Express",
      description:
        "Une application complète de gestion de transport permettant de suivre les livraisons, d'optimiser les itinéraires et de gérer efficacement les dépenses liées aux trajets des véhicules.",
      image: "/images/connexion.png",
      tags: ["React", "Electron JS", "PostgreSQL","Node JS", "Tailwind CSS"],
      githubUrl: "https://github.com/Patrick17-ui/Truck_Expenss",
      category: "Web App",
      year: "2025",
    },
    {
      title: "Gestion d'Auto-École",
      description:
        "Application de gestion complète pour auto-écoles permettant de suivre les élèves, planifier les leçons de conduite et gérer les examens. Interface intuitive pour instructeurs et élèves.",
      image: "/images/AutoEcole.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "Java EE", "MySQL"],
      githubUrl: "https://github.com/Patrick17-ui/Gestion-Auto-Ecole-Java-EE",
      category: "Enterprise App",
      year: "2023",
    },
    {
      title: "Prédiction de Température",
      description:
        "Projet d'intelligence artificielle utilisant des techniques de Machine Learning pour prédire les températures. Traitement avancé des données climatiques et modélisation prédictive avec Python.",
      image: "/images/temperature-prediction.jpg",
      tags: ["Python", "Machine Learning", "Data Science", "Pandas"],
      githubUrl: "https://github.com/Patrick17-ui/IA-prediction-Temperature",
      category: "AI/ML",
      year: "2024",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes réalisations</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets récents. Chaque projet représente un défi unique que j'ai relevé avec passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 max-h-40"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="outline" className="bg-white/90 border-white/20">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardContent>

                <CardFooter className="flex justify-between pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
