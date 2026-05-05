function ProjectCard({project}){
    const{title = "No title", description = "No Desription"}  = project
    return (
    <div className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition group">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-70">{description}</p>

        {/* BUTTON */}
        <button className="mt-2 text-sm text-purple-400 hover:text-purple-300 transition">
          Смотреть →
        </button>
      </div>

    </div>
    )
}
export default ProjectCard