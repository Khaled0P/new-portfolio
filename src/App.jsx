import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import Footer from './sections/Footer';
import { Toaster } from 'sonner';
import { Suspense, lazy } from 'react';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';

const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'));
const LogoSection = lazy(() => import('./sections/LogoSection'));
const FeatureCards = lazy(() => import('./sections/FeatureCards'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));

const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <NavBar />
      <Hero />
      <Suspense
        fallback={
          <div className="w-full flex-center py-20 text-white-50">
            Loading...
          </div>
        }
      >
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
      </Suspense>
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

