import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katzert.github.io/templefit"),
  title: "TEMPLEFIT - Centro de Transformación Física, Mental & Espiritual",
  description: "Entrenamiento funcional, nutrición preventiva, calistenia, liderazgo y desarrollo espiritual en Tarija - Bolivia. Fundado por Paulo Alberto Gil Cuéllar.",
  keywords: ["TempleFit", "Calistenia", "Nutrición Funcional", "CristoFit Camp", "Entrenamiento Bolivia", "Paulo Gil Cuellar", "Gimnasio Tarija"],
  authors: [{ name: "Paulo Alberto Gil Cuéllar" }],
  creator: "Paulo Alberto Gil Cuéllar",
  publisher: "TEMPLEFIT",
  alternates: {
    canonical: "https://katzert.github.io/templefit/",
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://katzert.github.io/templefit/",
    title: "TEMPLEFIT - Centro de Transformación",
    description: "Entrenamiento funcional, nutrición preventiva y desarrollo espiritual.",
    siteName: "TEMPLEFIT",
    images: [
      {
        url: "/templefit/assets/img/logo-tf-corona.png",
        width: 800,
        height: 600,
        alt: "Logo Oficial TEMPLEFIT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMPLEFIT - Centro de Transformación",
    description: "Entrenamiento funcional, nutrición preventiva y desarrollo espiritual.",
    images: ["/templefit/assets/img/logo-tf-corona.png"],
  },
  manifest: "/templefit/manifest.json",
  icons: {
    icon: "/templefit/assets/img/logo-tf-abreviado.png",
    apple: "/templefit/assets/img/logo-tf-corona.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "TEMPLEFIT",
  "image": "https://katzert.github.io/templefit/assets/img/logo-tf-corona.png",
  "description": "Centro de Transformación: Entrenamiento funcional, nutrición preventiva y desarrollo espiritual.",
  "founder": {
    "@type": "Person",
    "name": "Paulo Alberto Gil Cuéllar",
    "jobTitle": "Head Coach & Fundador"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BO",
    "addressLocality": "Tarija"
  },
  "openingHours": "Mo-Sa 06:00-21:00",
  "url": "https://katzert.github.io/templefit/"
};

import { ThemeProvider } from "../components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col custom-scrollbar bg-temple-cream dark:bg-temple-navy-dark text-temple-navy-dark dark:text-temple-navy dark:text-white transition-colors duration-300 antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
