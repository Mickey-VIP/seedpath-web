
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../context/SidebarContext";

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

  // Sidebar should not appear on landing (/) or /login
  // Move pathname logic to Sidebar component
  const showSidebar = true;

  return (
    <html lang="es" className="dark">
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#10131a] text-[#e1e2eb]`}
      >
        {showSidebar ? (
          <SidebarProvider>
            <div className="h-screen flex">
              <Sidebar />
              <main
                className="flex-1 min-h-0 h-screen"
                style={{
                  marginLeft: 'var(--sidebar-width, 260px)',
                  width: '100%',
                  transition: 'margin-left 0.25s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {children}
              </main>
            </div>
          </SidebarProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
