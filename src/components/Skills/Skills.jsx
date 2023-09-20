import Progress from '../../components/Progress/Progress'
import bureau from '../../assets/images/background/5.webp'
import datas from '../../data/skills.json'
import '../../assets/images/logo/react.webp'
import '../../assets/images/logo/js.webp'
import '../../assets/images/logo/agile.webp'
import '../../assets/images/logo/htmlcss.webp'
import '../../assets/images/logo/GitHublogo.webp'
import '../../assets/images/logo/seo.webp'
import '../../assets/images/logo/jest2.webp'
import '../../assets/images/logo/typescript.webp'


function Skills() {
    const data = datas
    return(
        <section id='competences' className='mx-auto   flex flex-col items-center relative lg:h-full lg:mb-24'>
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>A PROPOS</h2>
            <h3 className='font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Mes compétences à votre service</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full'>
                    <img src={bureau} alt="bureau avec ordinateur dessus" className='hidden lg:flex w-auto h-auto lg:h-555 lg:w-2/4 object-contains lg:my-0 lg:flex-start px-8 lg:pl-0 my-8 lg:mx-0 lg:border-r-2 pb-12 lg:pb-0 lg:pr-36 lg:rounded 'style={{borderRadius: "0% 100% 57% 43% / 98% 65% 35% 2%"}}/>
                <div className='flex flex-col w-full items-center justify-center gap-6 lg:pl-24 h-auto mb-4 lg:pt-24 '>
                    {data.map((el) => (
                        <Progress key={el.id} percent={el.percent} color={el.color} logo={el.logo} skill={el.title}>
                         {<ul className='text-center'>
                            {el.skill.map((e, index) => (
                                <li className='my-4 text-sm md:text-base lg:text-lg' key={index}>{e}</li>
                            ))}
                          </ul>}
                        </Progress>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills