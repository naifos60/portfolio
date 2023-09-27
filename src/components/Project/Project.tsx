import ProjectCard from "../ProjectCard/ProjectCard";
import datas from '../../data/project.json'


function Project() {
    const data = datas
    return(
        <section id="projets" className="flex flex-col w-full h-full justify-center items-center relative mb-12 bg-form bg-cover">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 top-0 md:-top-10'>PORTFOLIO</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Quelques réalisations</h3>
            <div className="flex md:flex-row flex-wrap mx-auto md:mt-12 py-6 px-4  gap-12 justify-center">
                {data.map((el) => (
                    <ProjectCard key={el.id} img={el.img} title={el.title} url={el.url} url2={el.url2} skills={el.skills} content={el.content} />
                ))}
            </div>
        </section>
    )
}

export default Project