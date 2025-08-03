import { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { university as universityData } from '../constants'
import { celebration } from '../utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const data = universityData[0]

const Education = () => {
  const [showCourses, setShowCourses] = useState(false)

  const gifRef = useRef(null)
  const courseworkRef = useRef(null)

  const toggleCourses = () => {
    setShowCourses(prev => !prev)
  }

  useEffect(() => {
    // Celebration gif fade-in
    if (gifRef.current) {
      gsap.fromTo(
        gifRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gifRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }

    // Coursework section fade-in
    if (courseworkRef.current) {
      gsap.fromTo(
        courseworkRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: courseworkRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
  }, [])

  const courses = Object.entries(data)
    .filter(([key]) => key.startsWith('c') && key !== 'clubs' && key !== 'competitions')
    .map(([key, value]) => ({
      title: value[0],
      stack: value.slice(1)
    }))

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center text-black bg-main py-10 px-6 pt-36"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl pirata-one-regular">{data.name[0]}</h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <p className="text-lg md:text-xl font-semibold text-bright-orange texturina-text-bold">
            {data.date[0]}
          </p>
          <img
            ref={gifRef}
            src={celebration}
            alt="Celebration"
            className="w-8 h-8 md:w-10 md:h-10 opacity-0"
          />
        </div>
      </div>

      {/* Education Details */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-8 text-center">
        <div className="space-y-3 -mt-4">
          <p className="md:text-2xl text-xl font-semibold texturina-text-bold">{data.major[0]}</p>
          <p className="md:text-2xl text-xl font-semibold texturina-text-bold">{data.minor[0]}</p>
          <p className="md:text-lg text-base texturina-text-bold">{data.scholarship[0]}</p>
        </div>

        <div className="space-y-4 mt-2">
          <p className="md:text-lg text-base texturina-text">Awards: {data.awards[0]}</p>
          <p className="md:text-lg text-base texturina-text">Clubs: {data.clubs[0]}</p>
          <p className="md:text-lg text-base texturina-text">Competitions: {data.competitions[0]}</p>
        </div>

        

        {/* Collapsible Courses Section */}
        <div
          ref={courseworkRef}
          className="w-full border-t border-gray-400 pt-2 opacity-0"
        >
          <h2 className="text-lg font-semibold mb-4">Relevant Coursework</h2>

          <button
            onClick={toggleCourses}
            className="w-full flex items-center justify-center bg-accent/20 px-4 py-2 rounded-md hover:bg-accent/30 transition"
          >
            {showCourses ? (
              <FaChevronUp className="text-bright-orange transition-transform" />
            ) : (
              <FaChevronDown className="text-bright-orange transition-transform" />
            )}
          </button>

          {showCourses && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full pt-10">
              {courses.map(({ title, stack }, i) => (
                <div key={i} className="space-y-2 text-left">
                  <ul className="list-disc list-inside">
                    <li className="texturina-text text-base">{title}</li>
                  </ul>

                  {stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-sm texturina-text-bold text-main bg-accent/70 border border-accent/40 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Education
