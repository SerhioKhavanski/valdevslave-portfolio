function CategoruButton ({category,activeCategory,setActiveCategory}){

    return(
        <button onClick={()=>setActiveCategory(category)} type='button' className={activeCategory === category?("px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:scale-105"):("px-5 py-2 rounded-full glass text-sm font-medium hover:border-purple-400/30 hover:scale-105 transition")}>
            {category}
        </button>
    )
}
export default CategoruButton