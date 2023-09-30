import {useTranslation} from "react-i18next"
const logoRs = ("./assets/images/logoRs.webp") as string;

function Describe() {
    const { t } = useTranslation();
    return(
        <div id="description" className="w-full max-h-auto  mb-8 lg:my-28 h-auto mx-auto px-10 py-10  lg:p-20 lg:mt-0 flex flex-col items-center bg-describe bg-cover  relative  overflow-hidden rounded-lg">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-5xl  lg:text-9xl text-gray-400 text-center absolute  opacity-20 lg:top-12'>{t('describe.title1')}</h2>
                <h3 className=' font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>{t('describe.title2')}</h3>
                <div className='flex flex-col  items-center justify-center gap-6 lg:mx-30  h-contain my-12 lg:my-4    rounded-xl '>
                    <article className=" flex flex-col  xl:flex-row font-serif italic px-6 py-12  bg-gradient-to-l from-[hsl(218,81%,75%)] bg-opacity-70 justify-between items-center w-auto max-h-350 md:max-h-screen xl:max-h-full overflow-scroll scroll-smooth scrollbar-hide">
                        <img src={logoRs} alt="logo dev" className='rounded-full w-56 h-56 mx-auto'/>
                        <div className="md:flex flex-col justify-center text-xl  text-white ml-12 py-8"> 
                        <p>
                            {t('describe.p1')}
                        </p><br/> 
                        <p>
                            {t('describe.p2')}
                        </p><br/> 
                        <p>
                            {t('describe.p3')}
                        </p><br/> 
                        <p>
                            {t('describe.p4')}<a href='#competences' className='font-bold text-xl text-gray-800 cursor-pointer underline hover:text-red-600 hover:scale-120'>{t('describe.p5')}</a>{t('describe.p6')} <a href='#projets' className='font-bold text-xl text-gray-800 cursor-pointer underline hover:text-red-600'>{t('describe.p5')}</a> .  
                            {t('describe.p7')}
                        </p>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Describe