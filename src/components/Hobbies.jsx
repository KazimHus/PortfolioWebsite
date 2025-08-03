import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import {
  guitar,
  skateboard,
  books,
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
          delay: 0.2, // delay before the whole wave starts
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 80%", // triggers earlier as it scrolls into view
            toggleActions: "play none none none",
          }
        }
      )
    }
  }, [])

  const VideoComponent = ({ src, videoName, className }) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) { // Only on desktop
        if (!isLoaded && !isLoading) {
          setIsLoading(true)
          // Load video on first hover
          if (videoRef.current) {
            videoRef.current.load()
          }
        } else if (videoRef.current && isLoaded) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }
    }

    const handleMouseLeave = () => {
      if (videoRef.current && window.innerWidth >= 768) { // Only on desktop
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsPlaying(false)
      }
    }

    const handleClick = () => {
      if (!isLoaded && !isLoading) {
        setIsLoading(true)
        // Load video on first click
        if (videoRef.current) {
          videoRef.current.load()
        }
      } else if (videoRef.current && isLoaded) {
        if (isPlaying) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
          setIsPlaying(false)
        } else {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }
    }

    const handleLoadedData = () => {
      setIsLoaded(true)
      setIsLoading(false)
      // Auto-play after loading if user is still hovering/clicked
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }

    return (
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="none"
          className={`rounded-xl object-cover w-[180px] md:w-full h-full shadow-lg mx-auto cursor-pointer ${className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onLoadedData={handleLoadedData}
          poster={src.replace(/\.[^/.]+$/, '-thumbnail.jpg')} // Assumes you have thumbnail images
        />
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <section
      id="hobbies"
      className="bg-main text-main px-10 md:px-20 py-16 md:py-20 flex items-center justify-center"
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
              <div className="flex flex-col items-center">
                <img 
                  src={python} 
                  alt="Python" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={cplusplus} 
                  alt="C++" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">C++</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={csharp} 
                  alt="C#" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">C#</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={mysql} 
                  alt="MySQL" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={react} 
                  alt="React" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={tailwindcss} 
                  alt="Tailwind CSS" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={html} 
                  alt="HTML" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={github} 
                  alt="git" 
                  className="w-8 h-8 tech-icon cursor-pointer" 
                />
                <span className="text-xs mt-1 text-black">Git</span>
              </div>
            </div>
            <br />
          </p>
        </div>
        
        {/* Right Side - Image Grid */}
<div className="flex-[1.3] grid grid-cols-3 gap-1 md:gap-4 h-[300px] md:h-[400px] w-[320px] md:w-[200px]">
  <img 
    src={guitar} 
    alt="Guitar" 
    className="w-[150px] h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg" 
  />
  <img 
    src={skateboard} 
    alt="Skateboarding" 
    className="w-[150px] h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg" 
  />
  <img 
    src={books} 
    alt="Books" 
    className="w-[150px] h-[250px] md:h-[400px] object-cover rounded-xl shadow-lg" 
  />
</div>

      </div>
    </section>
  )
}

export default Hobbies