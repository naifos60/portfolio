const logoRs = ("./assets/images/logoRs.webp") as string;

function Describe() {
    return(
        <div id="description" className="w-full max-h-auto  mb-8 lg:my-28 h-auto mx-auto px-10 py-10  lg:p-20 lg:mt-0 flex flex-col items-center bg-describe bg-cover  relative  overflow-hidden rounded-lg">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-5xl  lg:text-9xl text-gray-400 text-center absolute  opacity-20 lg:top-12'>QUI SUIS-JE ?</h2>
                <h3 className=' font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Présentation</h3>
                <div className='flex flex-col  items-center justify-center gap-6 lg:mx-30  h-contain my-12 lg:my-4    rounded-xl '>
                    <article className=" flex flex-col  xl:flex-row font-serif italic px-6 py-12  bg-gradient-to-l from-[hsl(218,81%,75%)] bg-opacity-70 justify-between items-center w-auto max-h-350 md:max-h-screen xl:max-h-full overflow-scroll scroll-smooth scrollbar-hide">
                        <img src={logoRs} alt="logo dev" className='rounded-full w-56 h-56 mx-auto'/>
                        <div className="md:flex flex-col justify-center text-xl  text-white ml-12 py-8"> 
                        <p>
                            Après une carrière de 12 ans au sein des commandos de la force aérienne,
                            je me suis naturellement orienté vers un métier de la sécurité en signant comme convoyeur de fonds pour brink’s sécurité Luxembourg !
                        </p><br/> 
                        <p>
                            Passionné par la tech et le développement en particulier, j’ai passé une certification professionnelle Développeur intégrateur web, enregistrée au Répertoire national des certifications professionnelles (RNCP), de niveau 5 sur les cadres français et européens des certifications (European Qualifications Framework).
                            Malgré un temp plein dans la sécurité, j’ai obtenu mon diplôme en moins de 8mois, au lieux des 18 initialement prévu par le centre de formations (OpenClassrooms). Ce qui, je l'espère, montrera ma motivation et ma capacité d'apprentissage indépendamment de la technologie à apprendre et à mettre en pratique.
                            La discipline, la rigueur, le perfectionnisme, l’esprit d’équipe, et tant d’autres valeurs appris et appliqué tout au long de mes années passées au seins des commandos ont fait de moi quelqu’un de déterminé soucieux du travail bien fait.
                        </p><br/> 
                        <p>
                            Les différents projets sur lesquels j'ai pu travailler m'ont permis d'acquérir un grand nombre de connaissances, ainsi qu'une maîtrise de différents langages, framework, bibliothèques ou outils de développement.
                            Parmis lesquels HTML5, CSS3, Javascript et Typescript mais aussi React, Node, Tailwind, Sass, Jest et plusieurs autres compétences comme le référencement, la gestion de projets Agile, la méthode SCRUM et les tableaux kanban...
                        </p><br/> 
                        <p>
                            Vous trouverez plus de détails sur quelqu'une de ses compétences <a href='#competences' className='font-bold text-xl text-gray-800 cursor-pointer underline hover:text-red-600 hover:scale-120'>ICI</a> ainsi que certains projets également <a href='#projets' className='font-bold text-xl text-gray-800 cursor-pointer underline hover:text-red-600'>ICI</a> . 
                            Tant de compétence qui Je l'espère me permettrons de trouver une société qui me donnera une chance et me permettra d'augmenter mes compétences tout en partageant mes connaissances au sein d'une équipe dans un cadre professionnel.
                        </p>
                        </div>
                    </article>
                </div>
        </div>
    )
}

export default Describe