"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const FinalCTA = () => {
  return (
    <Section id="contacto" className="bg-primary relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32 -mb-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05]" aria-hidden="true" />
      <div className="absolute inset-0 bg-primary/95" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-4 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-semibold mb-6 leading-tight text-white">
            Excelencia Clínica para una Sonrisa Insuperable
          </h2>
          <p className="text-white/80 text-lg font-light leading-relaxed mb-10 text-balance">
            Da el primer paso hacia una salud bucal impecable. Envíanos tus datos y nos pondremos en contacto para agendar tu evaluación diagnóstica en nuestra consulta privada.
          </p>
          <div className="space-y-4 text-white/80">
            <p><strong>Ubicación:</strong> Av. Chacabuco 485, Concepción</p>
            <p><strong>Teléfonos:</strong> +569 5514 1955 / (41) 273 7130</p>
            <p><strong>Email:</strong> dentax2.0@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-dark p-8 md:p-10 rounded-2xl shadow-2xl relative"
        >
           <form action="mailto:dentax2.0@gmail.com" method="post" encType="text/plain" className="space-y-5 flex flex-col items-stretch">
             <div>
               <label className="text-white/90 text-sm font-medium mb-1.5 block">Nombre Completo</label>
               <input type="text" name="Nombre" placeholder="Su nombre" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all" required />
             </div>
             <div>
               <label className="text-white/90 text-sm font-medium mb-1.5 block">Teléfono / WhatsApp</label>
               <input type="tel" name="Telefono" placeholder="+56 9 0000 0000" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all" required />
             </div>
             <div>
               <label className="text-white/90 text-sm font-medium mb-1.5 block">Mensaje (Opcional)</label>
               <textarea name="Mensaje" rows={3} placeholder="¿En qué podemos ayudarle?" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"></textarea>
             </div>
             <Button variant="secondary" className="w-full mt-2 h-12 text-base font-semibold" type="submit">
               Enviar Solicitud
             </Button>
           </form>
        </motion.div>
      </div>
    </Section>
  );
};
