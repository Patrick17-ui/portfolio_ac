"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-10 hidden lg:block z-0"
      >
        <div className="relative w-96 h-64 opacity-20">
          <Image src="/images/portfolio-hero.png" alt="Portfolio Development" fill className="object-contain" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            👋 Bienvenue sur mon portfolio
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Bonjour, je suis{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Patrick Raoul DJOUMBISSIE
          </span>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-3xl text-muted-foreground mb-8 font-light"
        >
          Développeur Web Full Stack & Junior IA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Je crée des expériences web modernes et intuitives avec les dernières technologies, spécialisé en intelligence
          artificielle et développement full-stack.
        </motion.p>

        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="mb-2 text-sm">Découvrir plus</span>
          <ArrowDown className="animate-bounce group-hover:scale-110 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}
