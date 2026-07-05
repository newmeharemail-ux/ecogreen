import Hero from '../components/sections/Hero';
import SocialProof from '../components/sections/SocialProof';
import ServicesGrid from '../components/sections/ServicesGrid';
import ProcessStrip from '../components/sections/ProcessStrip';
import BrandLogos from '../components/sections/BrandLogos';
import PortfolioGrid from '../components/sections/PortfolioGrid';
import CTABanner from '../components/sections/CTABanner';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesGrid />
      <ProcessStrip />
      <BrandLogos />
      <PortfolioGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}
