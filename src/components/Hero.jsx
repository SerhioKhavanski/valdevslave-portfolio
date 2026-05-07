function Hero(){
    return (

        <section id="Home" className="pt-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Создаю современные <br />
            <span className="text-purple-500">веб-приложения</span>
          </h1>

          <p className="text-sm md:text-base opacity-80 max-w-md">
            Фокус на архитектуре, производительности и чистом коде. 
            Минимум лишнего — максимум результата.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-purple-500/80 hover:bg-purple-500 transition text-white text-sm">
              Связаться
            </button>

            <button className="px-6 py-3 rounded-xl glass hover:bg-white/10 transition text-sm">
              Проекты
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-end">

          {/* SOCIALS */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <a href="#" className="glass p-3 rounded-xl hover:scale-110 transition">
              VK
            </a>
            <a href="#" className="glass p-3 rounded-xl hover:scale-110 transition">
              IG
            </a>
            <a href="#" className="glass p-3 rounded-xl hover:scale-110 transition">
              TG
            </a>
          </div>


          <div className="hero-img glass w-[300px] h-[350px] md:w-[400px] md:h-[450px] rounded-3xl flex items-center justify-center text-sm opacity-60">
          </div>

        </div>
      </div>
    </section>
    )
}
export default Hero