"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { MoveRight } from "lucide-react";

const TREATMENTS = [
  {
    title: "Implantología y Rehabilitación Oral",
    description: "Restauración integral de la función masticatoria y estética con implantes de titanio y coronas de alta precisión.",
  },
  {
    title: "Periodoncia y Salud de Encías",
    description: "Tratamiento de enfermedades gingivales y periodontales para asegurar el cimiento de una sonrisa sana.",
  },
  {
    title: "Estética Dental y Blanqueamiento",
    description: "Diseño de sonrisa, carillas cerámicas y aclaramiento dental guiado por especialistas.",
  },
  {
    title: "Endodoncia",
    description: "Tratamiento de conductos con tecnología mecanizada para preservar sus piezas dentales originales sin dolor.",
  },
  {
    title: "Ortodoncia Clínica",
    description: "Alineación clínica y corrección de la mordida mediante sistemas de brackets convencionales o alineadores invisibles.",
  },
  {
    title: "Cirugía Oral",
    description: "Extracciones complejas, exodoncia de muelas del juicio y procedimientos quirúrgicos menores con alto control de ansiedad.",
  },
  {
    title: "Odontología Preventiva General",
    description: "Tratamiento de caries, limpiezas profundas y odontopediatría enfocada en prevención a largo plazo.",
  },
  {
    title: "Armonización Facial",
    description: "Procedimientos médicos mínimamente invasivos para complementar y realzar de manera sobria el marco estético de su sonrisa.",
  },
];

export const Treatments = () => {
  return (
    <Section id="treatments" className="bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div className="max-w-2xl">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Áreas de Práctica</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold leading-tight">
            Tratamientos Odontológicos de Alta Complejidad
          </h2>
        </div>
        <div className="md:text-right hidden md:block">
          <p className="text-muted text-lg font-light max-w-md ml-auto">
            Cobertura integral clínica y estética resuelta bajo el mismo estándar de excelencia médica.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {TREATMENTS.map((treatment, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="h-[2px] w-12 bg-accent/40 mb-6 group-hover:w-full group-hover:bg-accent transition-all duration-500 ease-in-out" />
            <h3 className="font-heading text-xl text-primary font-semibold mb-3 pr-4 group-hover:text-accent transition-colors">
              {treatment.title}
            </h3>
            <p className="text-muted font-light text-sm leading-relaxed mb-6 flex-1">
              {treatment.description}
            </p>
            <div className="mt-auto flex items-center text-primary text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span>Agendar Hora</span>
              <MoveRight size={16} className="ml-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
