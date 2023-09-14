import PropTypes  from "prop-types";

function Card({title, content}) {
    return(
    <div className="max-w-xl mb-4 overflow-hidden  text-[hsl(218,81%,75%)]  w-full h-full cursor-pointer scale-100" >   
        <div id="contentCard" className='px-6 py-4 max-h-auto overflow-y-scroll bg-transparent italic'>
            <div className="font-lora font-bold text-xl mb-2 text-center">{title}</div>
                <p className="text-gray-800 text-xl border-2 p-2 border-[hsl(218,81%,75%)] ">{content}</p>
        </div> 
    </div>
    )
}

Card.propsTypes= {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Card