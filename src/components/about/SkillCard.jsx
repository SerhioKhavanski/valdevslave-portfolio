import HardSkillTag from "./HardSkillTag"
function SkillCard({skill = {}}){
    const{img = "https://cdn-icons-png.flaticon.com/512/5024/5024509.png",skillName, shortDesc, desc, hardSkillTags=[]} = skill
    return(
        
        <div className="space-y-4">

            <div className="glass p-5 rounded-2xl space-y-4 hover:scale-[1.02] transition">

                <div className="flex items-center gap-4">
                    
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <img className="rounded-lg" src={img} alt={skillName} />
                    </div>

                    <div>
                        <p className="font-medium text-lg">{skillName}</p>
                        <p className="text-xs opacity-60">{desc}</p>
                    </div>

                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                    {hardSkillTags.length>0?hardSkillTags.map(
                        (hardSkillTag,index) =>(
                            <HardSkillTag key={index} hardSkillTag={hardSkillTag} />

                        )
                        ):<p>{shortDesc}</p>}
                </div>


            </div>

        </div>
    )
}

export default SkillCard