"use client"

import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 px-4 border-t bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Patrick DJOUMBISSIE
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Développeur Full Stack passionné par l'innovation et l'excellence technique. Créons ensemble votre
              prochain projet web !
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Patrick17-ui"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/patrick-raoul-djoumbissie-10ba6a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/Trikepa_17?t=Hbxt8yo6yrTu0JQ3L1iYZw&s=35"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["À propos", "Compétences", "Projets", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase().replace("à propos", "about").replace("compétences", "skills").replace("projets", "projects")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>djoumbissiepatrick0@gmail.com</p>
              <p>+237 696-728-362</p>
              <p>Bafoussam, Cameroun</p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-muted-foreground flex items-center gap-2">
              © {new Date().getFullYear()} Patrick DJOUMBISSIE. Fait avec
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              et beaucoup de café ☕
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="outline" size="sm" onClick={scrollToTop} className="group bg-transparent">
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Retour en haut
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
