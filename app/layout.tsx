import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "TEMPLEFIT - Centro de Transformación",
  description: "Entrenamiento funcional, nutrición preventiva y desarrollo espiritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${playfair.variable} font-sans min-h-screen flex flex-col custom-scrollbar`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
