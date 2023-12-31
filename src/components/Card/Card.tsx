type cardProps = {
    logo: string | undefined;
    title: string;
    content: string;
}

function Card({logo, title, content}: cardProps) {
    return(
    <div className="max-w-lg flex flex-col justify-center  px-4 text-white w-full h-max cursor-pointer overflow-hidden scale-100 rounded-xl">
        <div className='cursor-pointer group h-full w-full overflow-scroll scroll-smooth scrollbar-hide [perspective:1000px]'>
            <div className="w-auto justify-center rounded-xl shadow-xl duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="h-96 inset-0 flex flex-col justify-center items-center ">
                    <h3 className="font-lora font-bold text-xl mb-2 text-center ">{title}</h3>
                    <img className="w-96 h-80 mx-auto pt-16 rounded-2xl" src={logo} alt={title}/>
                </div>          
                <div className= "bg-gray-200 text-xs text-gray-800 border-2 p-8 border-[hsl(218,81%,75%)] h-full md:text-justify [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    {content}
                </div>
            </div>
         </div>
    </div>
    )
}

export default Card