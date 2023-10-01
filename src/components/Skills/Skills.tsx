import Progress from '../Progress/Progress'
import {useTranslation} from "react-i18next"
const bureau = ('./assets/images/background/5.webp')

function Skills() {
    const { t } = useTranslation()
    const dataSkills = t('dataSkills', { returnObjects: true });
    const dat: any = dataSkills
    return(
        <section id='competences' className='mx-auto   flex flex-col items-center relative w-full h-full lg:mb-24'>
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>{t('skills.title1')}</h2>
            <h3 className='font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>{t('skills.title2')}</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full lg:pt-12'>
                    <img src={bureau} alt="bureau avec ordinateur dessus" className='hidden lg:flex w-auto h-auto lg:h-555 lg:w-2/4 object-contains lg:my-0 lg:flex-start px-8 lg:pl-0 my-8 lg:mx-0 lg:border-r-2 pb-12 lg:pb-0 lg:pr-36 lg:rounded '/>
                <div className='flex flex-col w-full items-center justify-center gap-6 lg:pl-24 h-auto mb-4 lg:pt-4 '>
                    {dat.map((el: any) => (
                        <Progress key={el.id} percent={el.percent} color={el.color} logo={el.logo} logo2={el.logo2} skill={el.title}>
                         {<ul className='text-left'>
                            {dat.map((e: any, index: any) => (
                                <li className='my-4 text-xs list-decimal' key={index}>{t(e.skill)}</li>
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