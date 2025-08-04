import {
  pin,
  profileimg2,  
} from '../utils'

const About = () => {
  
  return (
    <section
      id="about"
      className="text-main bg-main min-h-screen flex items-center justify-center px-4 md:px-10 -mt-40 sm:-mt-32 xl:-mt-10"
    >
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center gap-14 lg:gap-36 lg:ml-16">

        {/* Profile Image with Decorative Square */}
        <div className="relative flex-shrink-0">
          {/* Decorative square behind - positioned for left bottom corner */}
          <div 
            className="absolute w-48 h-48 md:w-64 md:h-80 rounded-2xl bottom-3 right-4 z-0"
            style={{ backgroundColor: '#d17402' }}
          ></div>
          {/* Profile image */}
          <img 
            src={profileimg2} 
            alt="Mirza Kazim Husain"
            className="relative w-48 h-48 md:w-64 md:h-80 object-cover rounded-2xl z-10 shadow-lg"
          />
        </div>

        {/* Header Info and Buttons */}
        <div className="flex flex-col lg:text-left">
          <div>
            <div className="text-left px-8 py-2 text-lg md:text-2xl techno-text text-main bg-accent/70 border border-accent/40 rounded-full inline-block mb-4">
              Hello! I am
            </div>
            <h1 className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl gugi-regular leading-tight">
              Mirza Kazim Husain,
            </h1>
            <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl gugi-regular mt-6 leading-tight">
              Software Engineer
            </h1>
            <div className="flex items-center justify-center lg:justify-start mt-6 mb-12">
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
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-row gap-4 items-center">
              <a
                href="/assets/pdfs/Mirza_Resume.pdf"
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