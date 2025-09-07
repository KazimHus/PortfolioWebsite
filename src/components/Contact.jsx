import { github, gmail, instagram, linkedin, phone } from '../utils'

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-main bg-main py-2 min-h-screen flex flex-col items-center justify-center sm:-mt-0 -mt-2 " >
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left side - Title */}
        <div className="flex-1 flex items-center justify-center md:px-0 px-5">
          <h1 className="text-3xl lg:text-5xl text-center font-bold dm-serif-text-regular-italic">
            Look forward to hearing from you.
          </h1>
        </div>

        {/* Right side - Contact links */}
        <div className="flex-1 texturina-text-bold text-lg md:text-2xl">
          <div className="flex items-center justify-center gap-5">
            <img src={gmail} alt="Email" className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] object-contain" />
            <a href="mailto:hmirzakazim@gmail.com" className="text-bright-orange hover:underline" >
              hmirzakazim@gmail.com
            </a>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="flex items-center justify-center gap-5">
            <img src={phone} alt="Phone" className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] object-contain" />
            <a href="tel:+12065354056" className="text-bright-orange hover:underline">
              (206) 535-4056
            </a>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="flex items-center justify-center gap-5">
            <img src={linkedin} alt="LinkedIn" className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] object-contain" />
            <a href="https://www.linkedin.com/in/mirza-kazim-husain-" target="_blank" rel="noopener noreferrer" className="text-bright-orange hover:underline">
              linkedin.com/in/mirza-kazim-husain
            </a>
          </div>

          <hr className="my-6 border-gray-400" />

          <div className="flex items-center justify-center gap-5">
            <img src={github} alt="GitHub" className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] object-contain" />
            <a href="https://github.com/KazimHus" target="_blank" rel="noopener noreferrer" className="text-bright-orange hover:underline">
              github.com/KazimHus
            </a>
          </div>

          <hr className="my-6 border-gray-400" />
        </div>
      </div>
    </section>
  )
}

export default Contact