import PropTypes  from "prop-types";

function Card({logo, title, content}) {
    return(
    <div className="max-w-lg my-4 px-4 py-4  text-[hsl(218,81%,75%)]   w-full h-full cursor-pointer scale-100 rounded-xl ">
        <img className="w-full h-56 mx-auto rounded-2xl" src={logo} alt={title}/>
        <div className=' py-4 max-h-auto bg-transparent italic'>
        <div className="font-lora font-bold text-xl mb-2 text-center ">{title}</div>
            <p className="text-gray-800 bg-gray-200 text-xl border-2 p-2 border-[hsl(218,81%,75%)] h-full ">
                {content}
            </p>
        </div>
    </div>
    )
}

Card.propsTypes= {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Card