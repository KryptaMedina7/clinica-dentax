"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { MapPin, Clock } from "lucide-react";
import { Button } from "../ui/Button";

export const Location = () => {
  return (
    <Section id="location" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Ubicación</span>
          <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6">
            En el Corazón de Concepción
          </h2>
          <p className="text-muted text-lg font-light leading-relaxed mb-8">
            Nuestra clínica se presenta como un refugio de tranquilidad profesional en pleno centro de la ciudad, ofreciendo instalaciones modernas y completa privacidad.
          </p>

          <div className="space-y-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                <MapPin className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-primary text-lg mb-1">Dirección Clínica</h4>
                <p className="text-muted font-light">Av. Chacabuco 485<br />Concepción, Biobío, Chile</p>
                <p className="text-xs text-muted/60 mt-1 italic">*Número de consulta se proporcionará al agendar cita</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
                <Clock className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-primary text-lg mb-2">Horarios de Atención</h4>
                <ul className="text-muted font-light text-sm space-y-1">
                  <li className="flex justify-between w-48"><span>Lunes a Viernes</span><span>10:00 - 13:00</span></li>
                  <li className="flex justify-between w-48"><span></span><span>15:00 - 19:30</span></li>
                  <li className="flex justify-between w-48 text-muted/60 mt-1"><span>Sáb y Dom</span><span>Cerrado</span></li>
                </ul>
              </div>
            </div>
          </div>

          <Button variant="primary" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Agendar Visita
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface shadow-xl group"
        >
          {/* Interactive Google Map iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=Av.+Chacabuco+485,+Concepci%C3%B3n,+B%C3%ADo+B%C3%ADo&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Ubicación Clínica Dentax"
          />
        </motion.div>
      </div>
    </Section>
  );
};
