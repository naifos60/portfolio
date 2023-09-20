import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Describe from '../../components/Describe/Describe';
import Project from '../../components/Project/Project';
import Contact from '../../components/Contact/Contact';


function Home() {
    return(
        <main className='relative mt-16' >    
            <Hero/>
            <Describe/>
            <Skills/>
            <Project/>
            <Contact/>
        </main>    
    )
}

export default Home