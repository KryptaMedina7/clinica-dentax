"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { User } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Luis Gonzalo Urrea Correa",
    title: "Cirujano Dentista",
    university: "Universidad de Concepción",
    role: "Director Clínico",
  },
  {
    name: "Dr. Jorge Maldonado Aguayo",
    title: "Rehabilitación Oral",
    university: "Universidad de Concepción | Especialista UDD",
    role: "TTM, Dolor Orofacial y Rejuvenecimiento Facial",
  },
  {
    name: "Dra. Rosita Urrutia Soto",
    title: "Periodoncia e Implantología",
    university: "Formación UdeC",
    role: "Atención Especializada y Académica",
  },
  {
    name: "Dra. Claudia Klattenhoff Reyes",
    title: "Rehabilitación Oral e Implantología",
    university: "",
    role: "Restauración Integral y Estética",
  },
  {
    name: "Dr. Andrés González Olate",
    title: "Odontología General",
    university: "",
    role: "Atención Odontológica Integral",
  },
  {
    name: "Dr. Javier Esteban Aquevedo Parra",
    title: "Endodoncia y Odontología General",
    university: "",
    role: "Tratamiento de Conductos y Prevención",
  },
  {
    name: "Dra. Sofía Machuca Amira",
    title: "Cirujano Dentista",
    university: "",
    role: "Atención Odontológica General",
  },
];

export const Specialists = () => {
  return (
    <Section id="specialists" className="bg-surface relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.4))] pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Nuestro Equipo</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6">
          Excelencia y Especialización
        </h2>
        <p className="text-muted text-lg font-light leading-relaxed">
          Dirigidos por especialistas formados en prestigiosas instituciones, nuestro equipo médico asegura un abordaje clínico impecable para casos de alta complejidad.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {TEAM.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glass rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 bg-white/60 box-border flex flex-col h-full"
          >
            {/* Foto Placeholder Elegante */}
            <div className="w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden relative mb-6">
              <User size={48} className="text-gray-300 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 font-mono tracking-widest">
                [ FOTO OK ]
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="font-heading text-xl text-primary font-semibold mb-1 group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary/80 mb-2">{member.title}</p>
              {member.university && (
                <p className="text-xs text-muted mb-3 italic break-words">{member.university}</p>
              )}
              <div className="mt-auto pt-4">
                <div className="h-px w-8 bg-accent/30 mb-4" />
                <p className="text-sm text-muted font-light">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
