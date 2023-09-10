import PropTypes  from "prop-types";
import { useState } from "react"

function Card({logo, title, content, children}) {
    const [open, setOpen] = useState(false);

    function toggleCard(){
            setOpen(!open);
    }

    return(
    <div className="max-w-sm mb-6 rounded-lg overflow-hidden shadow-lg shadow-white bg-transparent text-[hsl(218,81%,95%)] mx-2 w-full h-full cursor-pointer scale-100 hover:scale-105 hover:brightness-125 brightness-100" onClick={toggleCard} >
        <img className="w-full mx-auto h-64 bg-[hsl(218,81%,95%)]"  src={logo} alt={`logo ${title}`}/>
        {open &&     
        <div id="contentCard" className='px-6 py-4 max-h-44 overflow-y-scroll bg-black bg-opacity-75 italic'>
            <div className="font-lora font-bold text-xl mb-2 ">{title}</div>
                <p className="text-[hsl(218,81%,75%)] text-xl ">{content}</p>
        </div>} 
        <div className= 'px-6 pt-4 pb-2 flex gap-12 items-center  bg-black bg-opacity-75'>
            {children}
            <button className="px-8 bg-gradient-to-r from-[hsl(218,81%,75%)] hover:bg-[hsl(218,81%,65%)] text-[hsl(218,81%,75%)] hover:text-[hsl(218,81%,45%)]  rounded-xl flex justify-center" >
                {open ? 'Fermer' : 'Ouvrir'}
            </button>
        </div>
    </div>
    )
}

Card.propsTypes= {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Card