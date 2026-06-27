import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OverOnsSection from "../components/OverOnsSection";
import DienstenSection from "../components/DienstenSection";
import ProjectenSection from "../components/ProjectenSection";
import WerkwijzeSection from "../components/WerkwijzeSection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { HomeStructuredData } from "../components/StructuredData";

export default function HomePage() {
  useEffect(() => {
    document.title =
      "NexStuc – Stukadoor voor heel Nederland | Strak Vakmanschap";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "NexStuc – Professionele stukadoor voor heel Nederland. Stucwerk, latexspuiten, spackspuiten, schilderwerk, beton ciré en badkamerrenovatie. Vraag een vrijblijvende offerte aan."
      );
    }
    // Scroll to top when arriving at homepage
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeStructuredData />
      <Header />
      <main>
        <HeroSection />
        <OverOnsSection />
        <DienstenSection />
        <ProjectenSection />
        <WerkwijzeSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
