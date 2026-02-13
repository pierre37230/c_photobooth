import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import USP from '@/components/USP';
import PricingPreview from '@/components/PricingPreview';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import FAQPreview from '@/components/FAQPreview';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <USP />
      <Advantages />
      <PricingPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <ContactSection />
    </>
  );
}