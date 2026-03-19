"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const About = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Sobre la Clínica</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6 leading-tight">
            Donde la Precisión Clínica se Encuentra con el Trato Humano
          </h2>
          <div className="space-y-6 text-muted text-lg font-light leading-relaxed">
            <p>
              Clínica Dentax nace con el propósito de elevar el estándar de la odontología privada en Concepción. Entendemos que su sonrisa es su carta de presentación y su salud bucal, una prioridad indiscutible.
            </p>
            <p>
              Nuestro enfoque se centra en la excelencia clínica absoluta. Cada diagnóstico y plan de tratamiento son meticulosamente diseñados combinando especialización técnica, conocimiento avanzado y una genuina dedicación a la atención personalizada.
            </p>
            <p>
              Aquí, la estética dental, la rehabilitación funcional y la salud de sus encías convergen en un espacio clínico vanguardista, confidencial y sumamente profesional.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="outline" size="lg">Conozca Nuestra Visión</Button>
          </div>
        </motion.div>

        {/* Visual Content Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-surface shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 hover:scale-105" />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </div>
          {/* Deep aesthetic accent */}
          <div className="absolute -left-6 -bottom-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </Section>
  );
};
