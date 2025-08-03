import About from './components/About'
import Experience from './components/WorkExperience'
import Navbar from './components/Navbar'
import Education from './components/Education'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

const App = ( ) => {
  return (
    <main className = "bg-black">
      <Navbar />
      <About />
      <Hobbies />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
export default App
