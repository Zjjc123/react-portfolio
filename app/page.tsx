import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Projects from '../components/Project'

export default function Home() {
  return (
    <div className='bg-[#0c0f13] text-white tracking-wide'>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
