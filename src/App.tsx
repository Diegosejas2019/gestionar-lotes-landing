import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Features from './components/Features';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import CtaFinal from './components/CtaFinal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Features />
        <Steps />
        <Testimonials />
        <CtaFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
