import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 -ml-2">
            <Image 
              src="/doctores/logoclinicatexto.png" 
              alt="Clínica Dentax Logo" 
              width={200} 
              height={133} 
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Odontología privada de alto estándar en Concepción. Especializados en salud, función y estética dental.
          </p>
        </div>

        {/* Contacto */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-medium mb-4 text-lg">Contacto</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>Av. Chacabuco 485,<br />Concepción, Biobío</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+569 5514 1955 ó<br />
                (41) 273 7130</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>dentax2.0@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Enlaces Rápidos */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-medium mb-4 text-lg">Enlaces</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#about" className="hover:text-accent transition-colors">Sobre la Clínica</a></li>
            <li><a href="#specialists" className="hover:text-accent transition-colors">Especialistas</a></li>
            <li><a href="#treatments" className="hover:text-accent transition-colors">Tratamientos</a></li>
            <li><a href="#experience" className="hover:text-accent transition-colors">Experiencia Dentax</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-medium mb-4 text-lg">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="bg-white/5 p-2 rounded-full hover:bg-accent hover:text-primary transition-all">
              <Facebook size={20} />
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50 space-y-1">
            <p>Lunes a Viernes: 10:00 - 13:00 hrs y 15:00 - 19:30 hrs</p>
            <p>Sábado y Domingo: Cerrado</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
        <p>© {new Date().getFullYear()} Clínica Dentax. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};
