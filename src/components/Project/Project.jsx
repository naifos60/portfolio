import ProjectCard from "../ProjectCard/ProjectCard"
import cardBookie from "../../assets/images/project/cardBookie.webp"
import cardOhMyFood from "../../assets/images/project/cardOhMyFood.webp"
import cardSophie from "../../assets/images/project/cardSophie.webp"
import cardKasa from "../../assets/images/project/cardKasa.webp"
import cardArgent from "../../assets/images/project/cardArgent.webp"
import cardNina from "../../assets/images/project/cardNina.webp"



function Project() {
    return(
        <section id="projets" className="flex flex-col w-full h-full justify-center items-center relative mb-12 bg-form bg-cover">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 top-0 md:-top-10'>PORTFOLIO</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Quelques réalisations</h3>
            <div className="flex md:flex-row flex-wrap mx-auto md:mt-12 py-6 px-4  gap-12 justify-center">
                <ProjectCard img={cardBookie} title="Bookie" url={'https://bookie-naifos60.vercel.app'}/>
                <ProjectCard img={cardOhMyFood} title="Oh My Food" url={'https://oh-my-food-p4.vercel.app/'}/>
                <ProjectCard img={cardNina} title="Nina Carducci photo" url={'https://naifos60.github.io/ninacarducci.github.io-main/'}/>
                <ProjectCard img={cardKasa} title="Kasa" url={'https://kasa-p8.vercel.app/'}/> 
                <ProjectCard img={cardSophie} title="Sophie Bluel" url={'https://github.com/naifos60/Portfolio-architecte-sophie-bluel.git'}/>   
                <ProjectCard img={cardArgent} title="Bank-tree" url={'https://github.com/naifos60/argent-bank-projet11.git'}/>
            </div>
        </section>
    )
}

export default Project