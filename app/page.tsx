import {AboutSection} from "@/components/layout/sections/about";
import {BenefitsSection} from "@/components/layout/sections/benefits";
import {CommunitySection} from "@/components/layout/sections/community";
import {ContactSection} from "@/components/layout/sections/contact";
import {FAQSection} from "@/components/layout/sections/faq";
import {FeaturesSection} from "@/components/layout/sections/features";
import {FooterSection} from "@/components/layout/sections/footer";
import {HeroSection} from "@/components/layout/sections/hero";
import {PricingSection} from "@/components/layout/sections/pricing";
import {ServicesSection} from "@/components/layout/sections/services";
import {SponsorsSection} from "@/components/layout/sections/sponsors";
import {TeamSection} from "@/components/layout/sections/team";
import {TestimonialSection} from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "GranexPh",
  description: "GranexPh Landing Page",
  openGraph: {
    type: "website",
    url: "https://granexph.com/",
    title: "GranexPh",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://granexph.com/",
    title: "GranexPh",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <BenefitsSection />
      <SponsorsSection />
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <AboutSection />
      {/* <PricingSection /> */}
      <ContactSection />
      {/* <FAQSection /> */}
      <FooterSection />
    </>
  );
}
