const projects = [
    {title:"Landing Page", description:"My first project"},
    {img:"/valdevslave-portfolio/img/Screenshot 2026-05-06 094954.png",title:"Portfolio", description:"Personal website"},
    {title:"JS App", description:"Small JavaScript app"}
]

import ProjectCard from './ProjectCard.jsx'

function Projects(){
    return (
        <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-12">

            <h2 className="text-3xl md:text-4xl font-bold text-center">
            Projects
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
            </div>

        </div>
        </section>
    )
}
export default Projects