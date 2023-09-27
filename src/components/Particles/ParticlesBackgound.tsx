import Particles from "react-tsparticles";
import options from '../config/particlesConfig'
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const opt: any = options

export default function ParticlesComponent() : React.JSX.Element{

    const particlesInit = useCallback(async (engine: Engine)=> {
        await loadFull(engine)
    },[])

    const particlesLoaded = useCallback(async (container: any)=> {
        
    },[])

    return (
        <Particles
        id="particles-component"
        init={particlesInit}
        loaded={particlesLoaded}
        options={opt}
        />
    )
}