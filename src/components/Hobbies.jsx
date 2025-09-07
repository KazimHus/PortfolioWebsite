import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  guitar,
  drawing,
  python,
  cplusplus,
  csharp,
  mysql,
  react,
  tailwindcss,
  html,
  github
} from "../utils"

const Hobbies = () => {
  const techStackRef = useRef(null)

  useEffect(() => {
    const icons = techStackRef.current?.querySelectorAll('.tech-icon')

    if (icons?.length) {
      gsap.fromTo(
        icons,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      )
    }
  }, [])

  return (
    <section
      id="hobbies"
      className="bg-main text-main px-10 md:px-20 py-10 md:py-20 xl:py-28 flex items-center justify-center -mt-2 md:-mt-5 sm:-mt-0"
    >
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Left Side - Text */}
        <div className="flex-[2] flex flex-col items-start justify-center z-20 w-full md:w-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl dm-serif-text-regular font-bold text-main mb-2 sm:mb-6 pl-6">About Me</h2>
          <p className="text-base md:text-xl gugi-regular text-left max-w-4xl text-black rounded-xl p-6 space-y-6 w-full">
            I'm a curious and hands-on learner who enjoys exploring new skills and ideas. 
            That mindset drives both my projects and personal interests.
            <br /><br />

            {/* ✅ Current Projects with BIG green dots */}
            Current projects I’m working on:
            <ul className="space-y-1 mt-0">
              <li className="relative pl-8 before:content-['•'] 
               before:absolute before:left-0 
               before:top-1/2 before:-translate-y-1/2 
               before:text-green-600 before:text-4xl md:before:text-6xl">
                Gpu sharing across computers
              </li>
              <li className="relative pl-8 before:content-['•'] 
               before:absolute before:left-0 
               before:top-1/2 before:-translate-y-1/2 
               before:text-green-600 before:text-4xl md:before:text-6xl">
                LLM training for anomalies
              </li>
              <li className="relative pl-8 before:content-['•'] 
               before:absolute before:left-0 
               before:top-1/2 before:-translate-y-1/2 
               before:text-green-600 before:text-4xl md:before:text-6xl">
                Increase productivity app
              </li>
            </ul>
            <br />

            Outside of tech, I play guitar, draw, read and much more. 
            This mix of creativity and persistence shapes how I approach both work and life. 
            <br /><br />
            
            My current day to day tech stack is:
            <div ref={techStackRef} className="flex flex-wrap gap-6 mt-4">
              {[ 
                { src: python, name: "Python" },
                { src: cplusplus, name: "C++" },
                { src: csharp, name: "C#" },
                { src: mysql, name: "MySQL" },
                { src: react, name: "React" },
                { src: tailwindcss, name: "Tailwind" },
                { src: html, name: "HTML" },
                { src: github, name: "Git" }
              ].map(({ src, name }) => (
                <div key={name} className="flex flex-col items-center">
                  <img 
                    src={src} 
                    alt={name} 
                    className="w-8 h-8 tech-icon cursor-pointer" 
                  />
                  <span className="text-xs mt-1 text-black">{name}</span>
                </div>
              ))}
            </div>
            <br />
          </p>
        </div>

        {/* Right Side - Image Grid */}
        {/* Right Side - Image Grid */}
      <div className="flex-[1] flex justify-center md:mt-24 w-full">
          <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-[320px] sm:max-w-[400px] mx-auto">
            {[guitar, drawing].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Hobby"
                className="w-[140px] sm:w-[180px] h-[270px] sm:h-[400px] object-cover rounded-xl shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
