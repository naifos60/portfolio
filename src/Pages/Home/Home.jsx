import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';


function Home() {
    return(
        <main className='relative mt-16' >    
            <Hero/>
            <Skills/>
        </main>    
    )
}

export default Home