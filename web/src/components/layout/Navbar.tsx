"use client";

import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Clínica", href: "#about" },
  { name: "Especialistas", href: "#specialists" },
  { name: "Tratamientos", href: "#treatments" },
  { name: "Experiencia", href: "#experience" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-3 md:py-4 shadow-sm" : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="flex items-center -ml-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/doctores/logoclinicatexto.png"
            alt="Clínica Dentax Logo"
            className="h-10 sm:h-14 md:h-20 lg:h-24 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-primary/80 hover:text-accent transition-colors block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" size="sm" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Agendar Evaluación
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 -mr-3 text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-white/20 mt-4 overflow-hidden absolute w-full"
          >
            <ul className="flex flex-col px-6 py-6 pb-8 gap-4">
              {LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-primary block py-2 border-b border-white/10"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <Button variant="primary" className="w-full" onClick={() => { setIsOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Agendar Evaluación
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
