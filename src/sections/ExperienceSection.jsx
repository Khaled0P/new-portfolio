import TitleHeader from '../components/TitleHeader';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const prefersReducedMotion = useMediaQuery({
    query: '(prefers-reduced-motion: reduce)',
  });

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set('.timeline-card, .expText', { opacity: 1, xPercent: 0 });
      gsap.set('.timeline', { scaleY: 0 });
      return;
    }

    gsap.set('.timeline-card', {
      xPercent: -100,
      opacity: 0,
    });

    gsap.set('.expText', {
      opacity: 0,
    });

    ScrollTrigger.batch('.timeline-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          willChange: 'transform, opacity',
          xPercent: 0,
          opacity: 1,
          duration: isMobile ? 0.6 : 1,
          stagger: isMobile ? 0.1 : 0.2,
          ease: 'power2.out',
          onComplete: () => gsap.set(elements, { willChange: 'auto' }),
        });
      },
      start: 'top 60%',
      once: true,
      batchMax: 3,
    });

    gsap.to('.timeline', {
      scaleY: 0,
      willChange: 'transform',
      transformOrigin: 'bottom center',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-wrapper',
        start: 'top 30%',
        end: isMobile ? 'bottom 70%' : 'bottom 50%',
        scrub: 1,
      },
      onComplete: () => gsap.set('.timeline', { willChange: 'auto' }),
    });

    ScrollTrigger.batch('.expText', {
      onEnter: (elements) => {
        gsap.to(elements, {
          willChange: 'opacity',
          opacity: 1,
          duration: isMobile ? 0.6 : 1,
          ease: 'power2.out',
          stagger: isMobile ? 0.05 : 0.1,
          onComplete: () => gsap.set(elements, { willChange: 'auto' }),
        });
      },
      start: 'top 60%',
      once: true,
      batchMax: 3,
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Projessional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div className="max-w-[180px]">
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        width={180}
                        height={65}
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">📅 {card.date}</p>
                        <p className="text-[#839cb5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
