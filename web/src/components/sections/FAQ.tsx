"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "¿Cómo puedo agendar una hora de evaluación?",
    answer: "Puede agendar su evaluación contactándonos directamente a través de nuestro WhatsApp oficial o llamando a nuestro teléfono de contacto. Un miembro de nuestro equipo coordinará el horario que mejor se adapte a su disponibilidad."
  },
  {
    question: "¿Qué especialidades y tratamientos realizan?",
    answer: "Cubrimos todas las áreas odontológicas esenciales: Implantología, Rehabilitación Oral, Periodoncia, Endodoncia, Ortodoncia, Cirugía Oral, Odontopediatría, Estética Dental y Armonización Facial."
  },
  {
    question: "¿La atención es verdaderamente personalizada?",
    answer: "Sí. Nuestra filosofía se basa en la atención privada e individualizada. Dedicamos el tiempo necesario para escuchar sus inquietudes, realizar un diagnóstico clínico minucioso y explicar cada paso del tratamiento sin prisas comerciales."
  },
  {
    question: "¿Cómo llegar a la clínica?",
    answer: "Nos encontramos ubicados en pleno centro de Concepción, en Av. Chacabuco 485. Existen diversas opciones de estacionamiento cercano y excelente conectividad de transporte. Al confirmar su cita, le indicaremos el número exacto de nuestra dependencia privada."
  },
  {
    question: "¿Cómo se define el plan de tratamiento?",
    answer: "Tras su evaluación inicial y revisión de imagenología, los especialistas diseñan un plan a su medida. Nos tomamos el tiempo de explicarle exhaustivamente las alternativas terapéuticas, los plazos involucrados y los honorarios médicos antes de iniciar cualquier procedimiento."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-surface relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Dudas Frecuentes</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6">Respuestas Claras</h2>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass bg-white/70 border border-white/60 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-primary md:text-lg pr-4">{faq.question}</span>
                <span className="text-accent shrink-0 transition-transform duration-300">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted font-light leading-relaxed border-t border-primary/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
