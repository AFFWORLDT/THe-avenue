import HeroSection from "@/src/view/landing/hero-section";
import Feature from "@/src/view/landing/feature";
import Communities from "@/src/view/landing/Communities";
import Property from "@/src/view/landing/property";
import { InsightsInspiration } from "@/src/view/landing/blog";
import { CallToAction } from "@/src/view/landing/call-to-action";
import PartnersSection from "../../view/landing/PartnersSection";
import Solutions from "../../view/landing/solutions";
import GoogleMapsSection from "@/src/components/common/GoogleMapsSection";
// import LeadCaptureForm from "@/src/components/common/LeadCaptureForm";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <HeroSection />
      <PartnersSection />
      <Solutions/>
      <GoogleMapsSection />
      <Feature />
      <Communities />
      <Property />
      <InsightsInspiration />
      
      {/* Lead Capture Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          {/* <LeadCaptureForm 
            title="Ready to Find Your Dream Property?"
            subtitle="Get personalized property recommendations and expert guidance from our team"
            variant="default"
          /> */}
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
}
