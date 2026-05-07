function Contacts(){
    return (
        <section id="Contact" className="px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* TITLE */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Связаться со мной
          </h2>
          <p className="opacity-70 text-sm md:text-base">
            Есть идея или проект? Напиши — обсудим.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT (INFO) */}
          <div className="space-y-6">

            <div className="glass p-6 rounded-3xl space-y-4">
              <h3 className="text-xl font-semibold">Контакты</h3>

              <p className="text-sm opacity-70">
                Открыт для фриланса и сотрудничества. Отвечаю быстро.
              </p>

              <div className="space-y-2 text-sm">
                <p>📧 email@example.com</p>
                <p>📱 +375 (29) 000-00-00</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a href="#" className="glass px-4 py-2 rounded-xl hover:scale-105 transition">
                VK
              </a>
              <a href="#" className="glass px-4 py-2 rounded-xl hover:scale-105 transition">
                Instagram
              </a>
              <a href="#" className="glass px-4 py-2 rounded-xl hover:scale-105 transition">
                Telegram
              </a>
            </div>

          </div>

          {/* RIGHT (FORM) */}
          <form className="glass p-6 rounded-3xl space-y-5">

            <div className="grid gap-4">
              
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition text-sm"
              />

              <textarea
                placeholder="Ваше сообщение"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition text-sm resize-none"
              />

            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-500/80 hover:bg-purple-500 transition text-white text-sm"
            >
              Отправить сообщение
            </button>

          </form>

        </div>
      </div>
    </section>
    )
}
export default Contacts