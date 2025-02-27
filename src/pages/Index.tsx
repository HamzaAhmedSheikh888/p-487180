import React from "react";
import HeroSection from "@/components/horse/HeroSection";
import HorseDetails from "@/components/horse/HorseDetails";
import CatalogSection from "@/components/horse/CatalogSection";
import ExperienceSection from "@/components/horse/ExperienceSection";
import Footer from "@/components/horse/Footer";
import SidebarContent from "@/components/horse/SidebarContent";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <div className="w-full max-w-[1350px] max-md:max-w-full mx-auto">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Main Content Column */}
          <div className="w-[62%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <HeroSection />
              <HorseDetails />
              <CatalogSection />
              <ExperienceSection />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
            <SidebarContent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
