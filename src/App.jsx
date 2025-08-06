import ExperienceSection from './sections/ExperienceSection';
import Contact from './sections/Contact';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import LogoSection from './sections/LogoSection';
import NavBar from './sections/NavBar';
import ShowcaseSection from './sections/ShowcaseSection';
import TechStack from './sections/TechStack';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </>
  );
};

export default App;

