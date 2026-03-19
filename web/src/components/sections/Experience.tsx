"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { ClipboardList, Stethoscope, Target, CheckCircle } from "lucide-react";

export const Experience = () => {
  const steps = [
    {
      icon: <ClipboardList className="text-accent" size={24} />,
      title: "Evaluación Personalizada",
      description: "Comenzamos escuchando sus necesidades en un entorno privado, realizando un levantamiento clínico completo."
    },
    {
      icon: <Stethoscope className="text-accent" size={24} />,
      title: "Diagnóstico Claro",
      description: "Utilizamos examen clínico detallado e interconsultas para establecer con precisión el estado actual de su salud bucal."
    },
    {
      icon: <Target className="text-accent" size={24} />,
      title: "Planificación Cuidadosa",
      description: "Diseñamos un plan de tratamiento secuenciado, fundamentando las opciones terapéuticas y los tiempos involucrados."
    },
    {
      icon: <CheckCircle className="text-accent" size={24} />,
      title: "Excelencia Clínica",
      description: "Ejecutamos el plan con especialistas enfocados en devolver función y estética duradera, priorizando su confort."
    }
  ];

  return (
    <Section id="experience" className="bg-surface overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 px-4">
        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Experiencia Dentax</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6">
          Un Proceso Diseñado en Torno a Usted
        </h2>
        <p className="text-muted text-lg font-light leading-relaxed">
          Desde el primer contacto hasta el alta clínica, garantizamos una atención médica sin prisas y basada en la evidencia científica.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2" />
        
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-20 last:mb-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className={`md:w-1/2 flex flex-col ${idx % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"} pl-20 md:pl-0`}>
              <h3 className="font-heading text-2xl text-primary font-semibold mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed font-light text-balance">{step.description}</p>
            </div>
            
            <div className="absolute left-6 md:left-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full glass border border-white/50 -translate-x-1/2 bg-white/80 z-10 shadow-lg shadow-primary/5">
              {step.icon}
            </div>

            <div className="md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
