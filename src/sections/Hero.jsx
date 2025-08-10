import { useGSAP } from '@gsap/react';
import Button from '../components/ScrollButton';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { words } from '../constants';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const [enableControls, setEnableControls] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
  if (!isMobile) {
    setEnableControls(true);
  }
}, [isMobile]);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="Background"
          width={420}
          height={330}
          srcSet="/images/bg.png 480w, /images/bg.png 768w, /images/bg.png 1200w"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={word.text + i}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that deliver results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Khaled, a developer based in Egypt with a passion for
              code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="see my work"
            />
            {isMobile && (
              <button
                className="border-1 text-sm border-[var(--color-white-50)] rounded-full md:w-80 md:h-16 w-35 h-8 relative z-20 cursor-pointer"
                onClick={() => setEnableControls((prev) => !prev)}
              >
                {enableControls ? 'Disable Controls' : 'Enable Controls'}
              </button>
            )}
          </div>
        </header>
        {/* Right: 3D model */}
        <figure>
          <div className="hero-3d-layout group group-hover:visible">
            <HeroExperience enableControls={enableControls}  />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
