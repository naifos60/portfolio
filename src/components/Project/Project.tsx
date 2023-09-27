import ProjectCard from "../ProjectCard/ProjectCard";
const data = [
    {
        "id": "1",
        "title": "Bookie",
        "img": "./assets/images/cardBookie.webp",
        "url": "https://bookie-naifos60.vercel.app/",
        "url2": "https://github.com/naifos60/bookie.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            }
        ],
        "content": "L’entreprise Bookie souhaitait développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site et le responsive avec du code HTML et CSS."
    },
    {
        "id": "2",
        "title": "Oh my food",
        "img": "./assets/images/cardOhMyFood.webp",
        "url": "https://oh-my-food-p4.vercel.app/",
        "url2": "https://github.com/naifos60/OH-MY-FOOD-P4.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            },
            {
                "title": "Sass",
                "url": "./assets/images/sass.webp"
            }
        ],
        "content": "L'entreprise oh my food souhaitait un site mobile first qui répertorie les menus de restaurants gastronomiques. Il fallait le développer pour mobile, tablette et desktop en s’appuyant rigoureusement sur les informations déterminées dans le brief créatif et inclure des animations soignées !"
    },
    {
        "id": "3",
        "title": "Nina Carducci photo",
        "img": "./assets/images/cardNina.webp",
        "url": "https://naifos60.github.io/ninacarducci.github.io-main/",
        "url2": "https://github.com/naifos60/ninacarducci.github.io-main.git",
        "skills":[   
            {
                "title":"html et css",
                "url": "./assets/images/htmlcss.webp"
            },
            {
                "title": "SEO",
                "url": "./assets/images/seo.png"
            }
        ],
        "content": "La photographe Nina Carducci a demandée de faire une optimisation tant sur les performances que sur le SEO. Mettre en place le référencement local. Ajouter les metas pour les réseaux sociaux. Faire les modifications liées à l’accessibilité du site. Produire un rapport d’optimisation présentant toutes mes actions et leur impact."   
    },
    {
        "id": "4",
        "title": "Kasa",
        "img": "./assets/images/cardKasa.webp",
        "url": "https://kasa-p8.vercel.app/",
        "url2": "https://github.com/naifos60/kasa-P8.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            },
            {
                "title": "Sass",
                "url": "./assets/images/sass.webp"
            },
            {
                "title": "Javascript",
                "url": "./assets/images/js.webp"
            },
            {
                "title": "React",
                "url": "./assets/images/react.webp"
            }
        ],
        "content":"Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Nous avons donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end."        
    },
    {
        "id": "5",
        "title": "Sophie Bluel",
        "img": "./assets/images/cardSophie.webp",
        "url2": "https://github.com/naifos60/Portfolio-architecte-sophie-bluel.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            },
            {
                "title": "Javascript",
                "url": "./assets/images/js.webp"
            }
        ],
        "content":"Conception du site portfolio d’une architecte d’intérieur. Création de la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site, la modale permettant d'uploader de nouveaux médias, ainsi que tout le lien avec le backend (appel API, gestion authentification, token, erreur)."
    },
    {
        "id": "6",
        "title": "Bank tree",
        "img": "./assets/images/cardArgent.webp",
        "url2": "https://github.com/naifos60/argent-bank-projet11.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            },
            {
                "title": "Javascript",
                "url": "./assets/images/js.webp"
            },
            {
                "title": "React",
                "url": "./assets/images/react.webp"
            },
            {
                "title": "Redux",
                "url": "./assets/images/redux.webp"
            }
        ],
        "content":"Implémentez le front-end d'une application bancaire avec React. Créer l’application web complète et responsive avec React. Utiliser Redux pour gérer le state de l'ensemble de l'application. Préparer les routes API pour la partie transaction du site, rédaction du document YAML."
    },
    {
        "id": "7",
        "title": "77 Events",
        "img": "./assets/images/card77Events.webp",
        "url":"https://77events-naifos60.vercel.app/",
        "url2": "https://github.com/naifos60/Debuggez-une-application-React.JS.git",
        "skills":[
            {
                "url": "./assets/images/htmlcss.webp",
                "title": "html et css"
            },
            {
                "title": "Javascript",
                "url": "./assets/images/js.webp"
            },
            {
                "title": "React",
                "url": "./assets/images/react.webp"
            },
            {
                "title": "Jest",
                "url": "./assets/images/jest2.webp"
            }
        ],
        "content":"L’agence 77 Events souhaitait publier la nouvelle version de son site vitrine. Il s’agit d’un site one-page. Le design avait été validé, et un premier développeur freelance avait commencé l’intégration. Ce freelance a dû abandonner le projet pour raisons personnelles. Le site était fonctionnel, mais quelques bugs entravaient le bon usage par les visiteurs. 77events a donc fait appel à moi pour finaliser le travail."
    }
]

function Project() {
    return(
        <section id="projets" className="flex flex-col w-full h-full justify-center items-center relative mb-12 bg-form bg-cover">
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 top-0 md:-top-10'>PORTFOLIO</h2>
            <h3 className='  font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Quelques réalisations</h3>
            <div className="flex md:flex-row flex-wrap mx-auto md:mt-12 py-6 px-4  gap-12 justify-center">
                {data.map((el) => (
                    <ProjectCard key={el.id} img={el.img} title={el.title} url={el.url} url2={el.url2} skills={el.skills} content={el.content} />
                ))}
            </div>
        </section>
    )
}

export default Project