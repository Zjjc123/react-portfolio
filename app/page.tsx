import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
import Projects from '../components/Project'

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
