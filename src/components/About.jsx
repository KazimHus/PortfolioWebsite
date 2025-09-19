import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  pin,
  guitardrawing
} from '../utils'

const About = () => {
  const containerRef = useRef(null)
  const guitarRef = useRef(null)
  const helloRef = useRef(null)
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const locationRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([guitarRef.current, helloRef.current, nameRef.current, titleRef.current, locationRef.current, buttonsRef.current], {
        opacity: 0,
        y: 100
      })

      // Stagger all elements together
      gsap.to([guitarRef.current, helloRef.current, nameRef.current, titleRef.current, locationRef.current, buttonsRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.2
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="about"
      className="text-main bg-main min-h-screen flex items-center justify-center px-4 md:px-10 lg:-mt-2 md:mt-10 sm:pb-0 pb-20"
    >
      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-14 lg:gap-36 lg:ml-16">

        {/* Guitar Drawing */}
        <div ref={guitarRef} className="relative flex-shrink-0">
          <img 
            src={guitardrawing} 
            alt="Guitar Drawing"
            className="relative w-72 h-96 md:w-[30rem] md:h-[35rem] object-contain -mb-24 sm:mb-0"
          />
        </div>

        {/* Header Info and Buttons */}
        <div className="flex flex-col lg:text-left">
          <div>
            <div 
              ref={helloRef}
              className="text-left px-8 py-2 text-lg md:text-2xl dm-serif-text-regular text-main bg-accent/70 border border-accent/40 rounded-full inline-block mb-4"
            >
              Hello! I am
            </div>
            <h1 
              ref={nameRef}
              className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl dm-serif-text-regular leading-tight"
            >
              Mirza Kazim Husain,
            </h1>
            <h1 
              ref={titleRef}
              className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl dm-serif-text-regular-italic  mt-6 leading-tight"
            >
              Software Engineer
            </h1>
            <div 
              ref={locationRef}
              className="flex items-center justify-center lg:justify-start mt-6 mb-12"
            >
              <img 
                src={pin} 
                alt="Location pin"
                className="w-8 h-8 md:w-10 md:h-10 mr-3"
              />
              <h2 className="text-base md:text-xl texturina-text-bold text-black">
                Based in Seattle
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex justify-center lg:justify-start">
            <div className="flex flex-row gap-4 items-center">
              <a
                href="/assets/pdfs/Mirza_Husain_Resume_M.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bright-orange border-2 text-white font-bold py-3 px-6 rounded-full text-base shadow-md hover:bg-orange-500 transition"
              >
                Resume
              </a>

              <a
                href="#contact"
                className="bg-transparent border-2 border-bright-orange text-bright-orange font-bold py-3 px-6 rounded-full text-base shadow-md hover:bg-bright-orange hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;