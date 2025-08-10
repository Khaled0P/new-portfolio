import { useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = memo(() => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const prefersReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.set(sectionRef.current, { opacity: 0 });
    gsap.set(projects, { y: 50, opacity: 0 });

    if (prefersReducedMotion) {
      gsap.set([sectionRef.current, ...projects], { 
        opacity: 1, y: 0 
      });
      return;
    }

    gsap.set([sectionRef.current, ...projects], {
      willChange: 'transform, opacity'
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: isMobile ? 0.6 : 1,
        onComplete: () => {
          sectionRef.current.style.willChange = 'auto';
        }
      }
    );

    ScrollTrigger.batch(projects, {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.6 : 1,
            stagger: isMobile ? 0.15 : 0.3,
            ease: 'power2.out',
            force3D: true,
            onComplete: () => {
              elements.forEach(el => {
                el.style.willChange = 'auto';
              });
            }
          }
        );
      },
      start: 'top bottom-=100',
      once: true,
      batchMax: 3
    });

    return () => {
      [sectionRef.current, ...projects].forEach(el => {
        if (el) el.style.willChange = 'auto';
      });
    };
  }, [isMobile, prefersReducedMotion]);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/project1.webp"
                alt="Task Flow"
                srcSet="/images/project1-480.webp 480w, /images/project1-768.webp 768w, /images/project1.webp 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={1200}
                height={900}
                loading="lazy"
              />
            </div>
            <div className="text-content">
              <h2>
                Streamlining Education: Task Flow Empowers Students and
                Institutions with Unified Academic Management.
              </h2>
              <p className="text-white-50 md:text-xl">
                {' '}
                Led the frontend development of Task Flow, a large-scale SaaS
                platform for academic operations in schools and universities.
                Architected a scalable, SSR-optimized frontend using the MERN
                stack with Next.js, Redux Toolkit, RTK Query, and Tailwind CSS.
                Designed dynamic dashboards and role-based interfaces (admin,
                teacher, student, super admin), built reusable components like
                tables, modals, and assignment flows, and collaborated closely
                with backend teams to ensure performance, maintainability, and
                seamless API integration.{' '}
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.webp"
                  alt="Hola Mexico"
                  srcSet="/images/project2-480.webp 480w, /images/project2-768.webp 768w, /images/project2.webp 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
              <h2>
                Vitori Sales-stream: Headless Shopify Integration with
                Full-Stack Custom Features
              </h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.webp"
                  alt="Vitori"
                  srcSet="/images/project3-480.webp 480w, /images/project3-768.webp 768w, /images/project3.webp 1200w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
              <h2>
                Hola Mexico: Custom Shopify Theme Built for Performance and
                Flexibility
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ShowcaseSection.displayName = 'ShowcaseSection';

export default ShowcaseSection;
