
import type { Metadata } from "next";
import Link from 'next/link';
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
// Sidebar removed globally per request

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "SeedPath | Venture Architecture",
  description:
    "Usa IA de nivel 'Venture Architect' para definir, validar y lanzar tu próximo unicornio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="dark">
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#10131a] text-[#e1e2eb]`}>
        <nav className="fixed top-0 w-full z-[9999] bg-[#0b0e14]/80 backdrop-blur-2xl border-b border-white/5 h-20">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full px-8">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white font-headline">SeedPath</Link>

            <div className="hidden md:flex flex-1 justify-center min-w-0">
              <div className="flex gap-8 items-center min-w-0">
                <Link href="/dashboard" className="text-slate-400 font-medium hover:text-white transition-colors truncate">Ecosistema</Link>
                <Link href="/nuevo-proyecto" className="text-slate-400 font-medium hover:text-white transition-colors truncate">Laboratorio</Link>
                <Link href="/resumen" className="text-slate-400 font-medium hover:text-white transition-colors truncate">Análisis</Link>
                <Link href="/arquitectando" className="text-slate-400 font-medium hover:text-white transition-colors truncate">Arquitectura</Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/registro" className="hidden sm:inline-flex px-4 py-2 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition">Crear cuenta</Link>
              <Link href="/login" className="px-4 py-2 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition">Iniciar sesión</Link>
            </div>
          </div>
        </nav>

        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
