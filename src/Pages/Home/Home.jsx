import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Describe from '../../components/Describe/Describe';
import Project from '../../components/Project/Project';
import Form from '../../components/Form/Form';


function Home() {
    return(
        <main className='relative mt-16' >    
            <Hero/>
            <Describe/>
            <Skills/>
            <Project/>
            <Form/>

        </main>    
    )
}

export default Home