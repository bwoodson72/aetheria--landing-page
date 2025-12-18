
import Nav from "@/components/nav";
import HeroSection from "@/components/heroSection";
import VisionSection from "@/components/visionSection";
import ShowcaseGrid from "@/components/showcaseGrid";
import CtaFooterSection from "@/components/ctaFooterSection";
import StudioSection from "@/components/studioSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footerSection";

export default function Home() {
  return (
      <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">

        {/* 1. Navigation */}
       <Nav />

        {/* 2. Hero Section */}
       <HeroSection />

        {/* 3. Stats / Features Section */}
       <VisionSection />
       {/*   <StudioSection />*/}

        {/* 4. Showcase Grid */}
      <ShowcaseGrid />

          {/*5. Studio Section*/}
        <StudioSection />
        {/* 6. CTA Footer Section */}
       <CtaFooterSection />

         {/*Contact Section */}
          <ContactSection/>


          <Footer />
      </main>
  );

}
