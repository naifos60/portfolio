import Particles from "react-tsparticles";
import options from '../config/particlesConfig'
import { useCallback } from "react";
import { loadFull } from "tsparticles";



export default function ParticlesComponent(){

    const particlesInit = useCallback(async (engine)=> {
        await loadFull(engine)
    },[])

    const particlesLoaded = useCallback(async (container)=> {
        
    },[])

    return (
        <Particles
        id="particles-component"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        />
    )
}