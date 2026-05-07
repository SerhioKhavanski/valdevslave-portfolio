import { useState } from "react"
import SkillCard from "./SkillCard.jsx"
import CategoruButton from "../CategoryButton.jsx"

const hardSkills = [
    {
      id:"1",
      img:"/valdevslave-portfolio/img/5968292.png",
      skillName:"JavaScript",
      desc:"Язык программирования",
      hardSkillTags:["ES6+","Async","DOM"],
      category:"Programming"
    },
    {
      id:"2",
      img:"/valdevslave-portfolio/img/6132221.png",
      skillName:"C#",
      desc:"Язык программирования",
      hardSkillTags:["ES6+","Async","DOM"],
      category:"Programming"
    },
    {
      id:"3",
      img:"/valdevslave-portfolio/img/graphic-design.png",
      skillName:"Графический дизайн",
      desc:"Графика любого уровня",
      hardSkillTags:["Figma","Ilustrator","Photoshop"],
      category:"Design"
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
const hardSkillMenu = ["All", "Programming", "Design", "Пить водку и не пьянеть"]


function About(){
    const[activeHardSkills,setActiveHardSkills] = useState("All")

    const filteredHardSkills = hardSkills.filter(hardSkill =>{
        if(activeHardSkills === "All"){
          return true
        }

        if(hardSkill.category === activeHardSkills){
          return true
        }
      }
    )

    return (
      <section id="About" className="px-6 py-24">
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
              <div className="flex flex-wrap justify-center gap-3">
                {hardSkillMenu.map((menuPoint,index)=>(
                  <CategoruButton
                    key={index}
                    category={menuPoint} 
                    activeCategory = {activeHardSkills}
                    setActiveCategory={setActiveHardSkills}/>
                ))}
            </div>

            {filteredHardSkills.length>0?(
              filteredHardSkills.map((skill,index) => (
                <SkillCard skill={skill} key = {index}/>
              ))
            ):(
                  <div className="col-span-full flex justify-center items-center py-20">
                    <p className="glass px-8 py-4 rounded-2xl text-sm md:text-base text-black/60 dark:text-white/70 tracking-wide">
                        Таких навыков покачто нет
                    </p>
                </div>
            )}
            

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