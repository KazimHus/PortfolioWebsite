import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Experience } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const WorkExperience = () => {
  useGSAP(() => {
  Experience.forEach((_, index) => {
    gsap.fromTo(
      `#job-${index}`,
      { opacity: 0.6, scale: 0.95 },
      {
        opacity: 1,
        scale: 1.1,
        duration: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `#job-${index}`,
          start: "top 50%", 
          end: "bottom 50%",  
          toggleActions: "play reverse play reverse",
        }
      }
    )
  })
  }, [])

  return (
    <section id="workexperience" className="text-black bg-main px-14 lg:px-5 pt-36 pb-20">
     <div className="text-center mb-24 sm:mb-36">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl gugi-regular text-main">Work Experience</h1>
      <div className="w-16 sm:w-24 h-1 bg-bright-orange mx-auto mt-4 mb-6 rounded-full" />
    </div>
      <div className="flex flex-col items-center gap-16">
        {Experience.map((job, index) => (
          <div key={job.id} id={`job-${index}`} className="transition duration-500 w-full max-w-2xl text-left">
            <p className="text-base text-bright-orange font-semibold mb-2 gugi-regular">{job.date[0]}</p>
            <h2 className="text-2xl gugi-regular ">{job.title[0]}</h2>
            <h3 className="text-2xl mb-4 gugi-regular">{job.company[0]}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.stack?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-base techno-text text-main bg-accent/70 border border-accent/40 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-2 text-base texturina-text-bold">
              {job.description.map((point, i) => (
                <p key={i}>{point}</p>
              ))}
            </div>
            {job.personal && (
              <div className="mt-4">
                <ul className="list-disc list-inside space-y-2 text-sm texturina-text">
                  {job.personal.map((point, i) => (
                    <li key={i} className="-indent-5 pl-5">{point}</li>
                  ))}
                </ul>
              </div>
            )}
            {index < Experience.length - 1 && (
              <div className="w-1 h-8 bg-bright-orange rounded-full mx-auto my-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
