function Footer(){
    return (
            <footer className="px-6 pb-10">
      <div className="max-w-7xl mx-auto">

        <div className="glass rounded-3xl px-6 py-8 space-y-8">

          {/* TOP */}
          <div className="grid md:grid-cols-3 gap-8 items-center">

            {/* LOGO / ABOUT */}
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                Dev<span className="text-purple-500">Space</span>
              </p>
              <p className="text-sm opacity-60">
                Создание современных веб-приложений с упором на архитектуру и UX.
              </p>
            </div>

            {/* NAV */}
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition">Home</a>
              <a href="#" className="hover:text-purple-400 transition">Projects</a>
              <a href="#" className="hover:text-purple-400 transition">About</a>
              <a href="#" className="hover:text-purple-400 transition">Contact</a>
            </div>

            {/* SOCIALS */}
            <div className="flex md:justify-end gap-4">
              <a href="#" className="glass px-3 py-2 rounded-xl hover:scale-105 transition">VK</a>
              <a href="#" className="glass px-3 py-2 rounded-xl hover:scale-105 transition">IG</a>
              <a href="#" className="glass px-3 py-2 rounded-xl hover:scale-105 transition">TG</a>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-2">
            <p>© {new Date().getFullYear()} DevSpace. All rights reserved.</p>
            <p>Built with React & Tailwind</p>
          </div>

        </div>

      </div>
    </footer>
    )
}
export default Footer