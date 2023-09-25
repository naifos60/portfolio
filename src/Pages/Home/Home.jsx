import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Describe from '../../components/Describe/Describe';
import Project from '../../components/Project/Project';
import Contact from '../../components/Contact/Contact';
import tel from '../../assets/images/logo/tel.svg';
import linkedin from '../../assets/images/logo/linkedin.svg';
import email from '../../assets/images/logo/email.svg';
import logoRs from '../../assets/images/logo/logoRs.webp';
import menu from "../../assets/images/menu.svg";
import cross from "../../assets/images/cross.svg";
import cardBookie from "../../assets/images/project/cardBookie.webp"
import cardOhMyFood from "../../assets/images/project/cardOhMyFood.webp"
import cardSophie from "../../assets/images/project/cardSophie.webp"
import cardKasa from "../../assets/images/project/cardKasa.webp"
import cardArgent from "../../assets/images/project/cardArgent.webp"
import cardNina from "../../assets/images/project/cardNina.webp"
import htmlcss from '../../assets/images/logo/htmlcss.webp'
import react from '../../assets/images/logo/react.webp'
import js from '../../assets/images/logo/js.webp'
import sass from '../../assets/images/logo/sass.webp'
import redux from '../../assets/images/logo/redux.webp'
import seo from '../../assets/images/logo/seo.png'


function Home() {
    return(
        <main className='relative mt-16 w-full h-full' >    
            <Hero/>
            <Describe/>
            <Skills/>
            <Project/>
            <Contact/>
        </main>    
    )
}

export default Home