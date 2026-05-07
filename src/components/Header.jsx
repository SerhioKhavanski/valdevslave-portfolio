const mainMenu = ["Home", "About", "Projects", "Contact"]
import { useState,useEffect } from "react"

function Header(){

  useEffect(()=>{
    const abput = document.getElementById('Projects')
    const sections = mainMenu.map(section => document.getElementById(section))
    window.addEventListener("scroll",()=>{
      sections.forEach(section => {
        if(section.getBoundingClientRect().top<=300){
          setActiveSection(section.id)
        }
      })
      console.log(abput.getBoundingClientRect().top);
    })
    
  },[])
  const[activeSection,setActiveSection]=useState("Home")

    return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass flex items-center justify-between px-3 py-3 rounded-2xl shadow-lg">

          <div className="text-xl font-semibold tracking-wide">
            VlaDEV<span className="text-purple-500">Slave</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            
            {mainMenu.map(menuPoint =>(
              <a onClick={()=>setActiveSection(menuPoint)} href={"#"+menuPoint} className={menuPoint===activeSection?"text-purple-400 relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-400 after:rounded-full":"hover:text-purple-400 transition"}>
                {menuPoint}
              </a>
            ))}
          </nav>

          <button className="px-4 py-2 rounded-xl bg-purple-500/80 hover:bg-purple-500 transition text-white text-sm">
            Let’s talk
          </button>

        </div>
      </div>
    </header>
    )
}
export default Header