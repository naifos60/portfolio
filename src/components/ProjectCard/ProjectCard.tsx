import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next"

type ProjectCardProps = {
    img: string;
    title: string;
    skills: {url: string,title: string}[];
    url: string | undefined;
    url2: string;
    content: string;
  }
  
function ProjectCard({img, title, skills, url, url2, content}: ProjectCardProps) {
    const { t } = useTranslation()
    return(
    <div className="flex  flex-col justify-center items-center bg-gradient-to-t from-[hsl(218,81%,75%)] rounded-xl gap-4">
        <div className='cursor-pointer group h-96 w-96 [perspective:1000px]'>
            <div className="relative h-full w-full rounded-xl shadow-xl duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-raw justify-center [backface-visibility:hidden]">
                    <img src={img} alt={'logo' + title} className=" -mt-8 mx-auto w-full h-full object-cover"/>
                    <h2 className="mb-2 font-serif italic text-3xl top-0 absolute  text-[hsl(218,81%,95%)]">{title}</h2>
                </div>
                <div className="absolute flex flex-col justify-center inset-0 h-full w-full rounded-xl bg-gradient-to-t from-[hsl(218,81%,75%)]/80 px-12 text-center text-[hsl(218,81%,95%)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-raw justify-center items-center my-4 w-full h-16 gap-4 absolute -bottom-6 left-0 ">
                        {skills.map((el) => (
                            <div key={el.title} className='bg-gradient-to-t from-[hsl(218,81%,80%)] rounded-full mb-4 p-2 hover:scale-150 hover:brightness-150 hover:shadow-lg hover:shadow-black'>
                                <img  src={el.url} alt={"logo " + el.title} className='w-8 h-8 hover:scale-150'/> 
                            </div>
                            ))}
                    </div>
                    <div>
                        <article className='text-sm mb-12'>
                            <p>{t(content)}</p><br/>
                            {url !== undefined ?
                            <div>
                                <Link to={url} className="mb-2 lg:-text-center inline-block rounded bg-gradient-to-r from-[hsl(218,81%,95%)] px-12 py-2 pb-3.5 text-sm font-base leading-normal hover:text-rose-600 text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,65%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  cursor-pointer">{t('project.visit')}</Link>
                                <Link to={url2} className="mb-2 lg:-text-center inline-block rounded bg-gradient-to-r from-[hsl(218,81%,95%)] px-12 py-2 pb-3.5 text-sm font-base leading-normal hover:text-rose-600 text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,65%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  cursor-pointer">GitHub</Link>
                            </div> : 
                                <Link to={url2} className="mb-2 lg:-text-center inline-block rounded bg-gradient-to-r from-[hsl(218,81%,95%)] px-12 py-2 pb-3.5 text-sm font-base leading-normal hover:text-rose-600 text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[hsl(218,81%,65%)] hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  cursor-pointer">GitHub</Link>}
                        </article>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard