const projects = [
    {title:"Landing Page", description:"My first project"},
    {title:"Portfolio", description:"Personal website"},
    {title:"JS App", description:"Small JavaScript app"}
]

import ProjectCard from './ProjectCard.jsx'

function Projects(){
    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project,index) => 
                (<ProjectCard project = {project} key={index}/>)
            )}
        </section>
    )
}
export default Projects