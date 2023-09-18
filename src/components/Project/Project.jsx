import ProjectCard from "../ProjectCard/ProjectCard"
import cardBookie from "../../assets/images/project/cardBookie.png"
import cardOhMyFood from "../../assets/images/project/cardOhMyFood.png"
import cardSophie from "../../assets/images/project/cardSophie.png"
import cardKasa from "../../assets/images/project/cardKasa.png"
import cardArgent from "../../assets/images/project/cardArgent.png"
import cardNina from "../../assets/images/project/cardNina.png"



function Project() {
    return(
        <section id="projets" className="flex flex-col w-full h-full justify-center items-center relative mb-12 bg-form bg-cover">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 top-0 md:-top-10'>PORTFOLIO</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Quelques réalisations</h3>
            <div className="flex md:flex-row flex-wrap mx-auto md:mt-12 py-6 px-4  gap-12 justify-center">
                <ProjectCard img={cardBookie} title="Bookie" url={'https://naifos60.github.io/bookie/index.html'}/>
                <ProjectCard img={cardOhMyFood} title="Oh My Food" url={'https://naifos60.github.io/OH-MY-FOOD-P4/'}/>
                <ProjectCard img={cardSophie} title="Sophie Bluel"/>   
                <ProjectCard img={cardArgent} title="Bank-tree"/>
                <ProjectCard img={cardKasa} title="Kasa"/> 
                <ProjectCard img={cardNina} title="Nina Carducci photo" url={'https://naifos60.github.io/ninacarducci.github.io-main/'}/>            
            </div>
        </section>
    )
}

export default Project