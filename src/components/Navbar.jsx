import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const navLists = [
  { name: 'Main', link: 'about' },
  { name: 'About', link: 'hobbies' },
  { name: 'Work Experience', link: 'workexperience' },
  { name: 'Personal Projects', link: 'projects' },
  { name: 'Education', link: 'education' },
  { name: 'Contact', link: 'contact' }
]

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const mobileMenuRef = useRef()

  useEffect(() => {
    navLists.forEach(({ link }) => {
      ScrollTrigger.create({
        trigger: `#${link}`,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => {
          if (self.isActive) setActiveLink(link)
        }
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [isMobileOpen])

  const handleNavClick = (e, link) => {
  e.preventDefault()
  setIsMobileOpen(false)
  
  const target = document.getElementById(link)
  if (target) {
    let offset = 100 // default offset from top
    
    // Custom offsets for specific sections
    if (link === 'workexperience') {
      offset = 50 // scroll higher up for these sections
    }

    if (link === 'hobbies') {
      offset = 150 // scroll higher up for these sections
    }

    if (link === 'contact') {
      offset = 0 // scroll higher up for these sections
    }

    if (link === 'education') {
      offset = 20 // scroll higher up for these sections
    }

    if (link === 'projects') {
      offset = 50 // scroll higher up for these sections
    }
    
    const targetPosition = target.offsetTop - offset
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

const renderLinks = () =>
  navLists.map(({ name, link }) => (
    <a
      key={link}
      href={`#${link}`}
      onClick={(e) => handleNavClick(e, link)}
      className={`px-5 py-2 texturina-text-bold text-lg cursor-pointer transition-all duration-200 ${
        activeLink === link ? 'text-brightorange glow' : 'hover:text-black'
      }`}
    >
      {name}
    </a>
  ))

  return (
    <header className="fixed top-0 bg-main-navbar left-0 right-0 z-50 py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center justify-between">
        {/* Desktop Nav */}
        <div className="flex-1 justify-center hidden sm:flex">{renderLinks()}</div>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button
            className="text-black"
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with GSAP animation */}
      {isMobileOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 right-0 bg-main-navbar flex-col items-center sm:hidden overflow-hidden"
          style={{ display: 'flex' }}
        >
          {renderLinks()}
        </div>
      )}
    </header>
  )
}

export default Navbar
