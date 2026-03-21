"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

const TEAM = [
  {
    name: "Dr. Luis Gonzalo Urrea Correa",
    title: "Cirujano Dentista",
    university: "Universidad de Concepción",
    role: "Director Clínico",
    image: "/doctores/Dr.gonzalo.png",
  },
  {
    name: "Dr. Jorge Maldonado Aguayo",
    title: "Rehabilitación Oral",
    university: "Universidad de Concepción | Especialista UDD",
    role: "TTM, Dolor Orofacial y Rejuvenecimiento Facial",
    image: "/doctores/Dr.jorge.png",
  },
  {
    name: "Dra. Rosita Urrutia Soto",
    title: "Periodoncia e Implantología",
    university: "Formación UdeC",
    role: "Atención Especializada y Académica",
    image: "/doctores/Dra.rosita.png",
  },
  {
    name: "Dra. Claudia Klattenhoff Reyes",
    title: "Rehabilitación Oral e Implantología",
    university: "",
    role: "Restauración Integral y Estética",
    image: "/doctores/Dra.claudia.png",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, TEAM.length - itemsPerPage);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [itemsPerPage, currentIndex]);

  const maxIndex = Math.max(0, TEAM.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play: only pauses on desktop mouse hover, never blocks touch/scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slidePercent = currentIndex * (100 / itemsPerPage);

  return (
    <Section id="specialists" className="bg-surface relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.4))] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4"
      >
        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Nuestro Equipo</span>
        <h2 className="font-heading text-3xl md:text-5xl text-primary font-semibold mb-6">
          Excelencia y Especialización
        </h2>
        <p className="text-muted text-lg font-light leading-relaxed">
          Dirigidos por especialistas formados en prestigiosas instituciones, nuestro equipo médico asegura un abordaje clínico impecable para casos de alta complejidad.
        </p>
      </motion.div>

      {/* Carousel — no touch handlers, scroll works naturally */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Arrow buttons on sides (desktop only) */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-2 lg:-left-6 z-20">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/90 text-primary shadow-lg border border-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Anterior Especialista"
          >
            <ChevronLeft size={22} />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-2 lg:-right-6 z-20">
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/90 text-primary shadow-lg border border-black/5 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Siguiente Especialista"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex pb-4"
            style={{ 
              transform: `translateX(-${slidePercent}%)`,
              transition: "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          >
            {TEAM.map((member, idx) => (
              <div 
                key={idx} 
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 md:px-4"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group glass rounded-2xl p-5 md:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 bg-white/60 flex flex-col h-full border border-white/50"
                >
                  {/* Foto u Icono */}
                  <div className="w-full aspect-[4/5] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden relative mb-5">
                    {member.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={member.image}
                        alt={member.name.split(' ').slice(0, 2).join(' ')}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <User size={48} className="text-gray-300 transition-transform duration-500 group-hover:scale-110" />
                    )}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-heading text-lg md:text-xl text-primary font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mb-2">{member.title}</p>
                    {member.university && (
                      <p className="text-xs text-muted mb-3 italic break-words">{member.university}</p>
                    )}
                    <div className="mt-auto pt-3 border-t border-primary/10">
                      <p className="text-sm text-muted font-light">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <button 
            onClick={prevSlide}
            className="md:hidden p-2.5 rounded-full bg-white/80 text-primary shadow-sm border border-black/5 hover:bg-accent hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? "bg-accent w-6 h-2.5" 
                    : "bg-primary/20 hover:bg-primary/40 w-2.5 h-2.5"
                }`}
                aria-label={`Diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="md:hidden p-2.5 rounded-full bg-white/80 text-primary shadow-sm border border-black/5 hover:bg-accent hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
};

