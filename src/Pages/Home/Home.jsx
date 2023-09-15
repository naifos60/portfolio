import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Describe from '../../components/Describe/Describe';


function Home() {
    return(
        <main className='relative mt-16' >    
            <Hero/>
            <Describe/>
            <Skills/>
        </main>    
    )
}

export default Home