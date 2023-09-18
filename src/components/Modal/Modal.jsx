function Modal({open, onClose, children}) {
    return (
        <div onClick={onClose} 
        className={`fixed max-h-500 lg:max-h-full top-44 md:top-24 inset-0 overflow-hidden flex justify-center items-center z-30 
        transition-colors ${open ? "visible bg-black/20" : "invisible"}`} >
            <div onClick={e => e.stopPropagation()} 
            className={` bg-gradient-to-b from-[hsl(218,81%,75%)] border border-white rounded-xl inset-0 shadow p-6 transition-all mx-4
            ${open ? "scale-100" : "scale-125 opacity-0"} overflow-scroll scroll-smooth `}style={{height:`65vh`}}>
                <button onClick={onClose} 
                className="absolute  rounded-xl  top-4 right-3  rouded-lg text-white 
                  hover:text-[hsl(218,81%,25%)]">X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal