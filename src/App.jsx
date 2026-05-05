import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contacts from "./components/Contacts.jsx"
import Footer from "./components/footer.jsx"
function App(){
  return(
    <>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}
export default App