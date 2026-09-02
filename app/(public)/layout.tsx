import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-temple-gold focus:text-black focus:px-4 focus:py-2.5 focus:rounded-xl focus:font-black focus:text-xs focus:uppercase focus:tracking-wider focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </>
  );
}
