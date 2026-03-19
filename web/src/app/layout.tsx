import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Dentax | Odontología de Alto Estándar en Concepción",
  description: "Clínica dental privada en el centro de Concepción. Especialistas en implantología, rehabilitación oral y estética con enfoque personalizado y excelencia clínica.",
  keywords: ["clínica dental en Concepción", "implantología en Concepción", "rehabilitación oral", "odontología premium", "dentista privado Concepción"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-accent/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
