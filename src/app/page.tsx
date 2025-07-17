import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FirstFoldBottomSection from '@/components/sections/FirstFoldBottomSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PaymentMethodsSection from '@/components/sections/PaymentMethodsSection';

const bgImage = '/assets/First%20Fold%20Pic.png';

export default function Home() {
  return (
    <div
      className="min-h-screen w-full font-inter"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <HeroSection />
      <FirstFoldBottomSection />
      <PartnersSection />
      <PaymentMethodsSection />
      <Footer />
    </div>
  );
}