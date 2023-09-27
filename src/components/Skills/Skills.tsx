import Progress from '../Progress/Progress'
const bureau = ('./assets/images/background/5.webp')
const data = [
    {
        "id": "1",
        "title": "REACT.JS",
        "logo" : "./assets/images/react.webp",
        "percent": "85%",
        "color": "#C7335C",
        "skill": [
            "Initialiser une application avec Create React App",
            "Configurer la navigation entre les pages de votre application avec React Router",
            "Mettre en place, configurer et utiliser les nombreuses librairies que propose React.js",
            "Utiliser le contexte, les hook, les props de React.js",
            "Développer des éléments de l'interface de votre site web grâce à des composants React",
            "Afficher les données du back end sur l'interface via des appels API",
            "Configurer des routes API pour la communication client / serveur",
            "Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front"
        ]
    },
    {
        "id": "2",
        "title": "JAVASCRIPT",
        "logo" : "./assets/images/js.webp",
        "percent": "80%",
        "color": "#5E308B",
        "skill": [
            "Variables, Types de valeurs, Opérateurs, Fonctions , Conditions , Boucle, Méthodes, Le regex, Sélecteurs javascript, Les événements en Javascript",
            "Styliser le DOM, Faire du javascript asynchrone, Créer et utiliser des promesses, Utiliser des API",
            "Utiliser le Spread operator, Utiliser le Rest operator, Utiliser les fonctions pures, Utiliser les fonctions d'ordres supérieurs",
            "Utiliser des fonctions comme expression, Créer utiliser des classes, Créer utiliser des sous-classes",
            "Utiliser les constructors natif, Créer des méthodes, Faire des chaînes de méthodes."
        ]   
    },
    {
        "id": "3",
        "title": "TYPESCRIPT",
        "logo" : "./assets/images/typescript.webp",
        "percent": "80%",
        "color": "royalblue",
        "skill": [
            "Manipuler la syntaxe de TypeScript",
            "Créer mes propres types de variables",
            "Utiliser un projet JavaScript dans un projet TypeScript",
            "Les types de base",
            "Les tableaux et les objets",
            "Les fonctions, Unions et types, Tuple et Enum",
            "Les Interfaces, Le DOM, TSConfiguration",
            "Les opérateurs, Overloads, Generics",
            "Les classes de base,  Les champs et le raccourci, Interfaces et classes"
        ]   
    },
    {
        "id": "4",
        "title": "HTML&CSS",
        "logo" : "./assets/images/htmlcss.webp",
        "percent": "90%",
        "color": "#4DA59C",
        "skill": [
            "Installer un environnement de développement front-end",
            "Agencer le contenu des pages",
            "Utiliser des fonctionnalités avancées de HTML et CSS",
            "Intégrer du contenu conformément à une maquette",
            "Implémenter une interface responsive",
            "Intégrer une maquette en mobile-first",
            "Mettre en œuvre des animations CSS",
            "Maîtrise de tailwind",
            "Maîtrise de Sass",
            "Maîtrise des modules CSS3"
        ]  
    },
    {
        "id": "5",
        "title": "SEO",
        "logo" : "./assets/images/seo.webp",
        "percent": "90%",
        "color": "#42914D",
        "skill": [
            "Intégrer le référencement Web dans la stratégie marketing d'une organisation",
            "Trouver et analyser les bons mots clés pour votre site",
            "Optimiser votre site en respectant les bonnes pratiques SEO on-page",
            "Vous permettre de mesurer l'impact de vos efforts SEO",
            "Diagnostiquer la capacité de votre site à être parcourues par le robot.(crawlabilité du site)",
            "Corriger des erreurs techniques sur votre site afin d'améliorer sa crawlabilité",
            "Augmenter la vitesse de votre site",
            "Optimiser le SEO d'un site construit avec un framework JavaScript",
            "Optimiser le SEO d'un site multilingue",
            "Évaluer les obstacles à l'accessibilité sur le Web de votre site",
            "Concevoir des contenus web accessibles pour votre site"
        ]
    },
    {
        "id": "6",
        "title": "AGILE",
        "logo" : "./assets/images/agile.webp",
        "percent": "80%",
        "color": "#98C454",
        "skill": [
            "Suivre le déroulement du projet grâce à un outil de gestion de projet",
            "Présenter la solution technique",
            "Découper une fonctionnalités en tâches pour préparer le développement",
            "Mettre en place une méthode de veille technologique",
            "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
            "Bonne communication et facilité de colaboration",
            "Ésprit d'équipe et de partage",
            "Excelente adaptabilité",
            "Focus sur les valeurs client",
            "Collecte des besoins clientèles",
            "Rédaction des userstories",
            "À l'aise avec cérémonies SCRUM (sprint meeting planning, daily Scrum, sprint review, sprint retrospective...)"
        ]
    },
    {
        "id": "7",
        "title": "JEST",
        "logo" : "./assets/images/jest2.webp",
        "percent": "60%",
        "color": "#F09C38",
        "skill": [
            "Développer avec les méthodes BDD et TDD",
            "Définir des specifications, suites, résultats attendus, etc...",
            "Élaborer des tests unitaires",
            "Identifier les différents problèmes",
            "Déboguer du HTML et CSS",
            "Déboguer des bugs sur le DOM",
            "Déboguer des bugs sur l’API"
        ]
    },
    {
        "id": "8",
        "title": "GIT&GITHUB",
        "logo" : "./assets/images/GitHublogo.webp",
        "percent": "75%",
        "color": "gold",
        "skill": [
            "Installer et configurer Git et GitHub",
            "Utiliser les commandes de base de Git",
            "Corriger les erreurs courantes sur GitHub",
            "Collaborer efficacement grâce à Git et GitHub",
            "Versionner un projet avec Git et Github",
            "Personnaliser l'usage de Git et GitHub en fonction de mes besoins"
        ]
    }
]

function Skills() {
    return(
        <section id='competences' className='mx-auto   flex flex-col items-center relative lg:h-full lg:mb-24'>
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>A PROPOS</h2>
            <h3 className='font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Mes compétences à votre service</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full'>
                    <img src={bureau} alt="bureau avec ordinateur dessus" className='hidden lg:flex w-auto h-auto lg:h-555 lg:w-2/4 object-contains lg:my-0 lg:flex-start px-8 lg:pl-0 my-8 lg:mx-0 lg:border-r-2 pb-12 lg:pb-0 lg:pr-36 lg:rounded 'style={{borderRadius: "0% 100% 57% 43% / 98% 65% 35% 2%"}}/>
                <div className='flex flex-col w-full items-center justify-center gap-6 lg:pl-24 h-auto mb-4 lg:pt-24 '>
                    {data.map((el) => (
                        <Progress key={el.id} percent={el.percent} color={el.color} logo={el.logo} skill={el.title}>
                         {<ul className='text-left'>
                            {el.skill.map((e, index) => (
                                <li className='my-4 text-xs list-decimal' key={index}>{e}</li>
                            ))}
                          </ul>}
                        </Progress>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills