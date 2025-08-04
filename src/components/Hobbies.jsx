import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import {
  guitar,
  skateboard,
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
      className="bg-main text-main px-10 md:px-20 py-16 xl:py-24 flex items-center justify-center -mt-10 sm:-mt-5 xl:mt-0"
    >
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Left Side - Text */}
        <div className="flex-[1.7] flex flex-col items-start justify-center z-20 w-full md:w-auto">
          <h2 className="text-4xl md:text-6xl gugi-regular font-bold text-black mb-6 pl-6">About Me</h2>
          <p className="text-base md:text-xl gugi-regular text-left max-w-4xl text-black rounded-xl p-6 space-y-6 w-full">
            I'm a curious and hands-on learner who enjoys exploring new skills and ideas. 
            That mindset drives both my projects and personal interests.
            <br /><br />
            Outside of tech, I play guitar, draw, read, skateboard, hike, and go to the gym. 
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
        <div className="flex-[1.3] grid grid-cols-3 gap-1 md:gap-4 h-[300px] md:h-[400px] w-[320px] md:w-[200px]">
          {[skateboard, guitar, drawing].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Hobby"
              className="w-[150px] h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
