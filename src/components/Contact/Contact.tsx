const tel = ('./assets/images/tel.svg') as string;
const linkedin = ('./assets/images/linkedin.svg') as string;
const email = ('./assets/images/email.svg') as string;

function Contact() {
    return (
        <div>
          <section id="contact" className="text-gray-700 body-font relative  mx-auto  lg:mt-0 flex flex-col items-center  lg:h-full mb-12">  
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>CONTACT</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2  lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>N'hésitez pas à me contacter</h3>
            <div className="flex justify-center w-full h-auto items-center p-2 mx-auto relative my-6">
                <div className="flex flex-col gap-6 justify-center items-center w-full">
                  <div className='flex flex-row items-center text-white justify-center'>
                    <img className='h-12 w-12 bg-white aboslute top-0 left-0' src={tel} alt="logo telephone"/>
                    <a className="flex mx-auto mb-2 lg:-text-center  rounded bg-gradient-to-r from-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[hsl(218,81%,95%)] hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  md:mb-0 cursor-pointer"  href='tel:+33671451172'>
                      CLIQUEZ POUR APPELER
                    </a>
                  </div>
                  <div className='flex flex-row items-center text-white'>
                    <img className='h-12 w-12 bg-white aboslute top-0 left-0 ' src={email} alt="logo email"/>
                    <a className="flex mx-auto mb-2 lg:-text-center  rounded bg-gradient-to-r from-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[hsl(218,81%,95%)] hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  md:mb-0 cursor-pointer" href="mailto:masenkodrummer@hotmail.com">
                      envoyer un email
                    </a>
                  </div>
                  <div className='flex flex-row items-center text-white'>
                    <img className='h-12 w-12 bg-white aboslute top-0 left-0' src={linkedin} alt="logo linkedin"/>
                    <a className="flex mx-auto mb-2 lg:-text-center  rounded bg-gradient-to-r from-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[hsl(218,81%,95%)] hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  md:mb-0 cursor-pointer" href="https://www.linkedin.com/in/sofiane-rhrara-369906250">
                      Par linkedin
                    </a>
                  </div>
                </div>
            </div>
          </section>
        </div>
      );
};

export default Contact;