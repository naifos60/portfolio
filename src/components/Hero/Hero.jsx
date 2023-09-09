import sof from "../../assets/images/sof.jpg"
import cv from "../../assets/document/CV-Sof.pdf"



function Hero() {
    return(
<div id="cv" className="px-6 py-12 text-center md:px-12 lg:text-left ">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center  lg:grid-cols-2 md:justify-items-center xl:justify-items-end">
        <div className="mt-12 lg:mt-0">
          <h1 className="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
            Bienvenue, moi c'est Sofiane <br /><span className="text-[hsl(218,81%,75%)] drop-shadow-xl italic font-serif  font-medium">développeur frontend React</span>
          </h1>
        </div>
        <div className="mb-12 lg:mb-0 sm:mt-4 mx-auto md:mx-0 w-auto " >
          <img src={sof}
            className="w-56 h-56  rounded-full shadow-[0_10px_25px_15px] shadow-[hsl(218,81%,75%)]/60 opacity-80" alt="Portrait de Sofiane" />
        </div>
        <a className="mb-2 inline-block rounded bg-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href={cv} role="button">Télécharger mon CV</a>
      </div>
    </div>
</div>
    )
}

export default Hero