function ProjectCard({project}){
    const{title = "No title", description = "No Desription"}  = project
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default ProjectCard