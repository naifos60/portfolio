import {Link} from 'react-router-dom';

function ProjectCard({img, title, url}) {
    return(
        <Link to={url} className="flex flex-col justify-center items-center w-350 h-350  bg-gradient-to-t from-[hsl(218,81%,75%)] hover:grayscale-0  hover:scale-105 rounded-xl shadow-lg shadow-white relative cursor-pointer">
            <img src={img} alt={title} className="px-4 py-2 -mt-8 mx-auto w-350 h-full object-cover grayscale  hover:grayscale-0"/>
            <h2 className="mb-2   font-serif italic text-3xl top-0 absolute left-50 text-[hsl(218,81%,95%)]">{title}</h2>
        </Link>
    )
}

export default ProjectCard