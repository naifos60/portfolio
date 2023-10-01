import { lazy } from 'react';
import '../.././index.css';
import ParticlesBackground from "../../components/Particles/ParticlesBackgound"; 
const Describe = lazy(() => import ('../../components/Describe/Describe'));
const Project = lazy(() => import('../../components/Project/Project'));
const Contact = lazy(() => import('../../components/Contact/Contact'));
const Hero = lazy(() => import('../../components/Hero/Hero'));
const Skills = lazy(() => import('../../components/Skills/Skills'));


function Home() {
    return(
        <main className='relative mt-16 w-full h-full' > 
        <ParticlesBackground/>   
            <Hero/>
            <Describe/>
            <Skills/>
            <Project/>
            <Contact/>
        </main>    
    )
}

export default Home