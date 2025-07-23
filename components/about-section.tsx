"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    { icon: GraduationCap, label: "Master 1 IA", value: "Intelligence Artificielle" },
    { icon: Calendar, label: "Expérience", value: "3+ années" },
    { icon: MapPin, label: "Localisation", value: "Douala, Cameroun" },
  ]

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            À propos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui suis-je ?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/avatar1.jpg"
                  alt="Patrick DJOUMBISSIE"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Titulaire d'un{" "}
                    <span className="text-primary font-semibold">
                      Master 1 en Informatique option Intelligence Artificielle
                    </span>
                    , je suis un développeur web passionné avec plus de{" "}
                    <span className="text-primary font-semibold">3 années d'expérience</span>
                    dans la création d'applications web modernes et performantes.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Spécialisé dans les technologies JavaScript modernes comme{" "}
                    <span className="text-primary font-semibold">React, Next.js</span> et
                    <span className="text-primary font-semibold"> ASP.NET Core</span>, je m'efforce de créer des
                    expériences utilisateur exceptionnelles en alliant créativité et expertise technique.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    En dehors du code, j'aime les voyages, écouter de la musique et la lecture. Je suis toujours à la
                    recherche de nouveaux défis techniques et d'opportunités d'apprentissage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow border-primary/10">
                    <CardContent className="p-0">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
