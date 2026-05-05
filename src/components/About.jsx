function About(){
    return (
        <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TITLE */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Обо мне
          </h2>
          <p className="opacity-70 max-w-xl mx-auto text-sm md:text-base">
            Разработка интерфейсов с упором на архитектуру и чистый код.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* HARD SKILLS */}
          <div className="glass p-6 rounded-3xl space-y-6">
            <h3 className="text-xl font-semibold">
              Hard Skills
            </h3>

            <div className="space-y-4">

                <div className="glass p-5 rounded-2xl space-y-4 hover:scale-[1.02] transition">

                    <div className="flex items-center gap-4">
                        
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        JS
                        </div>

                        <div>
                        <p className="font-medium text-lg">JavaScript</p>
                        <p className="text-xs opacity-60">Язык программирования</p>
                        </div>

                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-black/50 backdrop-blur-md border border-white/10 hover:scale-105 hover:border-purple-400/30 transition ">ES6+</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-black/50 backdrop-blur-md border border-white/10 hover:scale-105 hover:border-purple-400/30 transition ">Async</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-black/50 backdrop-blur-md border border-white/10 hover:scale-105 hover:border-purple-400/30 transition ">DOM</span>
                    </div>

                    </div>

            </div>
          </div>

          <div className="glass p-6 rounded-3xl space-y-6">
            <h3 className="text-xl font-semibold">
              Soft Skills
            </h3>

            <div className="space-y-4">

            <div className="glass p-5 rounded-2xl space-y-4 hover:scale-[1.02] transition">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    💬
                    </div>

                    <div>
                        <p className="font-medium text-lg">Коммуникация</p>
                        <p className="text-xs opacity-60">Работа с клиентами и командой</p>
                    </div>

                </div>

                <p className="text-sm opacity-80">
                    Умею объяснять сложные вещи простым языком и выстраивать диалог с клиентом.
                </p>

                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    )
}
export default About