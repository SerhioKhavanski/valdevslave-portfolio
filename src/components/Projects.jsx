import { useState } from 'react'
import CategoruButton from './CategoryButton.jsx'
import ProjectCard from './ProjectCard.jsx'
const projects = [
    {title:"Landing Page", description:"My first project", category: "React"},
    {img:"/valdevslave-portfolio/img/Screenshot 2026-05-06 094954.png",title:"Portfolio", description:"Personal website", category: "C#"},
    {title:"JS App", description:"Small JavaScript app", category: "Fullstack"}
]
const projectMenu = ["All", "React", "C#", "UI/UX", "Fullstack"]

function Projects(){

    const [activeCategory,setActiveCategory] = useState("All")
    const filteredProjects = projects.filter(project =>{
        if(activeCategory === "All"){
            return true
        }
        if(project.category === activeCategory){
            return true
        }
    })

    return (
        <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-12">

            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
                {projectMenu.map((menuPoint,index) => (
                    <CategoruButton 
                    key={index}
                    category ={menuPoint} 
                    activeCategory = {activeCategory}
                    setActiveCategory = {setActiveCategory}/>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length>0?(
                filteredProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                )) 
            ):(
                <div className="col-span-full flex justify-center items-center py-20">
                    <p className="glass px-8 py-4 rounded-2xl text-sm md:text-base text-black/60 dark:text-white/70 tracking-wide">
                        Таких проектов пока нет
                    </p>
                </div>
            )}  
            </div>
        </div>
        </section>
    )
}
export default Projects