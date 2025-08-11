import TitleHeader from '../components/TitleHeader';
import { techStackIcons, techStackImgs } from '../constants';
import TechIcon from '../components/Models/TechLogos/TechIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGLTF } from '@react-three/drei';
import { useEffect, memo, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const TechStack = memo(() => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const prefersReducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  const techStackData = useMemo(
    () => (isMobile ? techStackImgs : techStackIcons),
    [isMobile]
  );

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.tech-card', { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0, willChange: 'transform, opacity' },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        onComplete: () => gsap.set('.tech-card', { willChange: 'auto' }),
        scrollTrigger: { trigger: '#skills', start: 'top center' },
      }
    );

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  });

  useEffect(() => {
    if (!isMobile) {
      techStackIcons.forEach((icon) => {
        useGLTF.preload(icon.modelPath);
      });
    }
  }, [isMobile]);

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackData.map((icon) => (
            <div
              key={icon.name}
              className="card-border relative tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {isMobile ? (
                    <img
                      src={icon.imgPath}
                      alt={icon.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <TechIcon model={icon} />
                  )}
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TechStack.displayName = 'TechStack';

export default TechStack;
