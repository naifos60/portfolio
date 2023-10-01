import '../.././index.css';
import ParticlesBackground from "../../components/Particles/ParticlesBackgound"
import {useTranslation} from "react-i18next"

function Error() {
    const { t } = useTranslation()
    return(
    <main className='relative mt-16 ' >
        <ParticlesBackground/>
        <div className = 'pb-20 pt-36 text-center md:mb-56  md:h-full w-screen'>
            <h2 className = 'text-9xl mt-16 mb-0 h-160 w-auto text-[hsl(218,81%,95%)]'>404</h2>
            <p className = 'text-2xl fw-500 lh-51.34 mb-16 mt-8 text-[hsl(218,81%,95%)]'>{t('error.content')}</p>
            <a href='/' className= 'text-l text-[hsl(218,81%,95%)] underline px-4 py-2 rounded-xl bg-gradient-to-r from-[hsl(218,81%,75%)] cursor-pointer hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]'>{t('error.link')}</a>
        </div>
    </main>
    )
}

export default Error