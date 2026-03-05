import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LogoCarousel from './sections/LogoCarousel';
import Services from './sections/Services';
import CTA from './sections/CTA';
import CaseStudies from './sections/CaseStudies';
import WorkingProcess from './sections/WorkingProcess';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import './App.css';

// Layout component to wrap pages with transitions
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = ({ locationKey }: { locationKey: string }) => (
  <>
    <Hero key={locationKey} />
    <LogoCarousel />
    <Services />
    <CTA />
    <CaseStudies />
    <WorkingProcess />
    <Team />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<PageLayout><HomePage locationKey={location.key} /></PageLayout>} />
            <Route path="/about" element={<PageLayout><About /></PageLayout>} />
            <Route path="/pricing" element={<PageLayout><Pricing /></PageLayout>} />
            <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
