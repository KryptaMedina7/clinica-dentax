"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image / Gradient Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-accent/30 rounded-full text-accent text-xs font-semibold tracking-widest uppercase bg-accent/10 backdrop-blur-sm">
            Clínica Dentax
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
            Odontología de Alto Estándar en Concepción
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Atención clínica privada y especializada. Un espacio donde la excelencia médica, la precisión y la confianza convergen para transformar su sonrisa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Agendar Evaluación
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('specialists')?.scrollIntoView({ behavior: 'smooth' })}>
              Conocer Especialistas
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#trust" aria-label="Scroll down" className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Descubrir</span>
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
};
