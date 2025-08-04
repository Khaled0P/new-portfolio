import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ryde" />
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
                  src="/images/project2.png"
                  alt="Library management platform"
                />
              </div>
              <h2>
                Vitori Sales-stream: Headless Shopify Integration with
                Full-Stack Custom Features
              </h2>
              <p className="text-white-50 md:text-xl">
                Contributed to Vitori Sales-stream by building full-stack
                features from API development to frontend UI using Next.js and
                React. Originally designed as a headless Shopify store, and
                included an embedded Shopify app
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>
                Hola Mexico: Custom Shopify Theme Built for Performance and
                Flexibility
              </h2>
              <p className="text-white-50 md:text-xl">
                Built the entire store solo using a custom Shopify theme based
                on Dawn. Focused on performance, modular Liquid sections, and
                seamless integration of third-party apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
