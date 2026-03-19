"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "../ui/Section";
import { MapPin, UserCheck, ShieldCheck, Stethoscope } from "lucide-react";

const TRUST_PILLARS = [
  {
    icon: <MapPin size={24} className="text-primary group-hover:text-accent transition-colors" />,
    title: "Centro de Concepción",
    description: "Ubicación privilegiada y de fácil acceso en el corazón de la ciudad.",
  },
  {
    icon: <ShieldCheck size={24} className="text-primary group-hover:text-accent transition-colors" />,
    title: "Atención Privada",
    description: "Un entorno exclusivo, confidencial y enfocado enteramente en el paciente.",
  },
  {
    icon: <UserCheck size={24} className="text-primary group-hover:text-accent transition-colors" />,
    title: "Trato Personalizado",
    description: "Evaluación y diagnóstico minuciosos para planes de tratamiento únicos.",
  },
  {
    icon: <Stethoscope size={24} className="text-primary group-hover:text-accent transition-colors" />,
    title: "Equipo Especializado",
    description: "Profesionales de alto nivel enfocados en la excelencia, resultados funcionales y estéticos.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const TrustBlock = () => {
  return (
    <Section id="trust" className="bg-surface relative -mt-6 rounded-t-3xl z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary font-semibold mb-6">
          La Base de Nuestra Excelencia
        </h2>
        <p className="text-muted text-lg md:text-xl font-light text-balance leading-relaxed">
          Respaldados por una sólida formación clínica, credenciales verificadas y el compromiso inquebrantable con la salud de nuestros pacientes privados.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4"
      >
        {TRUST_PILLARS.map((pillar, idx) => (
          <motion.div key={idx} variants={itemVariants} className="group flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-md shadow-primary/5 transition-transform duration-300 group-hover:-translate-y-2">
              {pillar.icon}
            </div>
            <h3 className="font-medium text-xl text-primary mb-3">{pillar.title}</h3>
            <p className="text-muted leading-relaxed text-sm">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
