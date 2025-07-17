import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
      <Footer />
    </div>
  );
}