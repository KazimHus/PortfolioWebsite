import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  esp,
  fries,
  hackathonpic,
  home,
  personal,
  unitygame,
  youtubepic,
  dickscall,
  itchio,
  youtube,
  githuborange,
  picture
} from "../utils/index.js"
import { projects } from "../constants/index.js"

gsap.registerPlugin(ScrollTrigger)

const visuals = [
  <img id="visual-0" src={unitygame} className="visual w-full h-[200px] sm:w-[80%] sm:h-[90%] object-cover rounded-xl sm:ml-10" />,
  <div id="visual-1" className="visual grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 w-[380px] h-[400px] sm:w-[550px] sm:h-[80%] sm:mr-10">
    <img src={fries} alt="Fries App" className="rounded-md object-cover w-full h-full" />
    <img src={home} alt="Home Screen" className="rounded-md object-cover w-full h-full hidden sm:block" />
    <img src={personal} alt="Personal UI" className="rounded-md object-cover w-full h-full" />
  </div>,
  <img id="visual-2" src={youtubepic} alt="YouTube Project" className="visual w-full h-[200px] sm:w-[80%] sm:h-[90%] object-cover rounded-xl sm:ml-10" />,
  <img id="visual-3" src={esp} alt="ESP Project" className="visual w-full h-[200px] sm:w-[70%] sm:h-[90%] object-cover rounded-xl sm:mr-10" />,
  <img id="visual-4" src={hackathonpic} alt="Hackathon Event" className="visual w-full h-[200px] sm:w-[80%] sm:h-[100%] object-cover rounded-xl sm:ml-2" />,
]

const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const modalRef = useRef(null)
  const imageRef = useRef(null)

  // 🔁 GSAP animation logic: run ONCE
useEffect(() => {
  const visualsEls = document.querySelectorAll(".visual")
  visualsEls.forEach((el) => {
    const handleMouseEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    const handleMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }
    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
    el._gsapHandlers = { handleMouseEnter, handleMouseLeave }
  })

  const iconElements = document.querySelectorAll(".project-icon")
  iconElements.forEach((el) => {
    const tooltip = el.querySelector(".custom-tooltip")
    const handleMouseEnter = () => {
      gsap.to(el.querySelector("img"), {
        scale: 1.15,
        duration: 0.2,
        ease: "power2.out",
      })
      if (tooltip) {
        gsap.fromTo(
          tooltip,
          { opacity: 0, y: 5, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
        )
      }
    }

    const handleMouseLeave = () => {
      gsap.to(el.querySelector("img"), {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      if (tooltip) {
        gsap.to(tooltip, {
          opacity: 0,
          y: 5,
          scale: 0.9,
          duration: 0.15,
          ease: "power2.in",
        })
      }
    }

    el.addEventListener("mouseenter", handleMouseEnter)
    el.addEventListener("mouseleave", handleMouseLeave)
    el._gsapHandlers = { handleMouseEnter, handleMouseLeave }
  })

  const triggers = []
  const cards = document.querySelectorAll(".project-card")
  cards.forEach((card, index) => {
    const fromX = index % 2 === 0 ? -100 : 100
    const animation = gsap.fromTo(
      card,
      { x: fromX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.1 + index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
    triggers.push(animation.scrollTrigger)
  })

  return () => {
    visualsEls.forEach((el) => {
      if (el._gsapHandlers) {
        el.removeEventListener("mouseenter", el._gsapHandlers.handleMouseEnter)
        el.removeEventListener("mouseleave", el._gsapHandlers.handleMouseLeave)
      }
    })
    iconElements.forEach((el) => {
      if (el._gsapHandlers) {
        el.removeEventListener("mouseenter", el._gsapHandlers.handleMouseEnter)
        el.removeEventListener("mouseleave", el._gsapHandlers.handleMouseLeave)
      }
    })
    triggers.forEach((trigger) => trigger?.kill())
  }
}, []) // runs only once

// 🔁 Modal-only logic: watch `showModal` changes
useEffect(() => {
  if (showModal && modalRef.current) {
    gsap.fromTo(
      modalRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
  }

  if (showModal) {
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }
}, [showModal])

  return (
    <section id="projects" className="bg-main text-black px-4 sm:px-8 lg:px-36 py-10 pt-28 sm:pt-32">
      <div className="text-center mb-1 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl gugi-regular text-main">Personal Projects</h1>
        <div className="w-16 sm:w-24 h-1 bg-bright-orange mx-auto mt-4 mb-6 rounded-full" />
        <a
          href="https://github.com/KazimHus?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="texturina-text-bold text-base sm:text-lg text-bright-orange hover:underline transition"
        >
          View other projects on my GitHub ↗
        </a>
      </div>

      <div className="flex flex-col space-y-8 sm:space-y-20 pt-12">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0
          return (
            <div
              key={idx}
              className="project-card bg-[#faf8ef] rounded-2xl shadow-lg p-4 sm:p-8"
            >
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-center gap-6 sm:gap-8 lg:gap-12`}
              >
                <div className="w-full lg:w-[45%] h-full rounded-xl flex items-center justify-center">
                  {visuals[idx]}
                </div>

                <div className="w-full lg:w-[50%] space-y-3 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl gugi-regular font-bold">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 text-sm sm:text-base techno-text text-main bg-accent/70 rounded-full border border-accent/40">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      {project.title === "Jones Idea Challenge – Mobile App UI" && (
                        <div className="project-icon relative">
                          <button
                            onClick={() => setShowModal(true)}
                            className="block transition"
                          >
                            <img src={picture} alt="View Full Image" className="w-6 h-6 sm:w-7 sm:h-7" />
                          </button>
                          <div className="custom-tooltip absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
                            <div className="bg-bright-orange text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg relative">
                              Full Image
                            </div>
                          </div>
                        </div>
                      )}

                      {project.githuburl && (
                        <div className="project-icon relative">
                          <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className="block">
                            <img src={githuborange} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
                          </a>
                          <div className="custom-tooltip absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
                            <div className="bg-bright-orange text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg relative">
                              GitHub
                            </div>
                          </div>
                        </div>
                      )}

                      {project.youtubelink && (
                        <div className="project-icon relative">
                          <a href={project.youtubelink} target="_blank" rel="noopener noreferrer" className="block">
                            <img src={youtube} alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7" />
                          </a>
                          <div className="custom-tooltip absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
                            <div className="bg-bright-orange text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg relative">
                              YouTube
                            </div>
                          </div>
                        </div>
                      )}

                      {project.githublink && (
                        <div className="project-icon relative">
                          <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="block">
                            <img src={githuborange} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
                          </a>
                          <div className="custom-tooltip absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
                            <div className="bg-bright-orange text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg relative">
                              GitHub
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-bright-orange"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.gameurl && (
                        <div className="project-icon relative">
                          <a href={project.gameurl} target="_blank" rel="noopener noreferrer" className="block">
                            <img src={itchio} alt="itch.io" className="w-6 h-6 sm:w-7 sm:h-7" />
                          </a>
                          <div className="custom-tooltip absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none z-10">
                            <div className="bg-bright-orange text-white text-xs px-3 py-2 rounded whitespace-nowrap shadow-lg relative">
                              Live link
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                  <div className="space-y-2 text-sm sm:text-base texturina-text-bold">
                    {project.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  {project.personal && (
                    <ul className="list-disc list-inside texturina-text text-sm sm:text-base space-y-1">
                      {project.personal.map((line, j) => (
                        <li key={j} className="-indent-5 pl-5">{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl p-4 shadow-lg max-w-5xl w-full"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-2xl sm:text-4xl font-bold text-gray-500 hover:text-black transition"
            >
              &times;
            </button>
            <img
              src={dickscall}
              alt="Jones Challenge Fullscreen UI"
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[900px] h-auto object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects