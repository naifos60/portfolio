
import Typed from "react-typed"

const cv =  ("./assets/document/Sofiane Rhrara.pdf")

function Hero() {
    return(
<div id="acceuil" className=" text-center h-full lg:text-left sm:h-auto md:h-555  md:flex md:items-center bg-cover md:bg-contain bg-no-repeat bg-top  md:bg-right  bg-sof2  lg:bg-sof lg:mt-48">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex xl:items-center">
      <div className="grid h-auto items-center lg:grid-cols-2 md:justify-items-center " >
        <div className="mt-4 lg:mt-0">
          <h1 className="mt-O mb-8 text-6xl font-bold tracking-tight xl:text-7xl text-[hsl(218,81%,95%)]">
            Bonjour, moi c'est Sofiane <br /><span className="text-[hsl(218,81%,75%)] drop-shadow-xl italic font-serif  font-medium">
              <Typed strings={[
                "développeur web frontend Javascript",
                "développeur web frontend React.js"
            ]}
                typeSpeed={50}
                backSpeed={45}
                 /></span>
          </h1>
        </div>
        <div className="mb-12 lg:mb-0 sm:mt-4 mx-auto w-auto">
          <a className="mb-2 lg:-text-center inline-block rounded bg-gradient-to-r from-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[hsl(218,81%,95%)] hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0 cursor-pointer"
            data-te-ripple-init data-te-ripple-color="light" href={cv} role="button">Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
</div>
    )
}

export default Hero