function Modal({open, onClose, children}) {
    return (
        <div onClick={onClose} 
        className={`fixed top-1/4 md:inset-0 flex justify-center items-center z-30 
        transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div onClick={e => e.stopPropagation()} 
            className={`max-h-96 md:max-h-full  overflow-scroll scroll-smooth bg-white rounded-xl shadow p-6 transition-all mx-4
            ${open ? "scale-100" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} 
                className="absolute rounded-xl top-2 right-2 px-2 py-1 rouded-lg text-[hsl(218,81%,75%)] 
                  hover:text-[hsl(218,81%,45%)]">X</button>
                {children}
            </div>
        </div>
    )
}

export default Modal