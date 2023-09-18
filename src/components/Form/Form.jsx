function Form() {
    return (
        <div>
          <section id="contact" className="text-gray-700 body-font relative  mx-auto  lg:mt-0 flex flex-col items-center  lg:h-full">  
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>CONTACT</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2  lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>N'hésitez pas à me contacter</h3>   
            <form className="container px-5 py-12 lg:py-24 mx-auto" action="mailto:masenkodrummer@hotmail.com">
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-[hsl(218,81%,95%)]">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-[hsl(218,81%,95%)]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full mx-auto">
                    <button className="flex mx-auto mb-2 lg:-text-center  rounded bg-gradient-to-r from-[hsl(218,81%,75%)] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[hsl(218,81%,95%)] hover:text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,95%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  md:mb-0 cursor-pointer" type="submit">
                      envoyer un email
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      );
};

export default Form;