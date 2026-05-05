function Header(){
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass flex items-center justify-between px-6 py-3 rounded-2xl shadow-lg">

          <div className="text-xl font-semibold tracking-wide">
            VlaDEV<span className="text-purple-500">Slave</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Projects
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              About
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Contact
            </a>
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