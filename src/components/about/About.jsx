import SkillCard from "./SkillCard.jsx"

const hardSkills = [
    {
        id:"1",
        img:"/valdevslave-portfolio/img/5968292.png",
        skillName:"JavaScript",
        desc:"Язык программирования",
        hardSkillTags:["ES6+","Async","DOM"]
    },
    {
      id:"2",
        img:"/valdevslave-portfolio/img/6132221.png",
        skillName:"C#",
        desc:"Язык программирования",
        hardSkillTags:["ES6+","Async","DOM"]
    }
]
const softSkills = [
    {
        id:"1",
        img:"/valdevslave-portfolio/img/images.jfif",
        skillName:"Коммуникация",
        shortDesc:"Работа с клиентами и командой",
        desc:"Умею объяснять сложные вещи простым языком и выстраивать диалог с клиентом."
    }
]

function About(){
    return (
        <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Обо мне
          </h2>
          <p className="opacity-70 max-w-xl mx-auto text-sm md:text-base">
            Разработка интерфейсов с упором на архитектуру и чистый код.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass p-6 rounded-3xl space-y-6">
            <h3 className="text-xl font-semibold">
              Hard Skills
            </h3>
            
            {hardSkills.map((skill,index) => (
              <SkillCard skill={skill} key = {index}/>
            ))}

          </div>

          <div className="glass p-6 rounded-3xl space-y-6">
            <h3 className="text-xl font-semibold">
              Soft Skills
            </h3>
            {softSkills.map((skill,index)=>(
              <SkillCard skill={skill} key={index}/>
            ))}
          </div>

        </div>
      </div>
    </section>
    )
}
export default About