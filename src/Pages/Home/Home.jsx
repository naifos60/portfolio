import '../.././index.css';
import Hero from '../../components/Hero/Hero';
import Progress from '../../components/Progress/Progress';
import htmlLogo from '../../assets/images/htmlcss.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import git from '../../assets/images/GitHublogo.png';
import jest from '../../assets/images/jest.webp';
import seo from '../../assets/images/seo.jpg';
import agile from '../../assets/images/agile.jpeg';
import ts from '../../assets/images/typescript.png';



function Home() {
    return(
        <main className='relative mt-16' >    
            <Hero/>
            <div id='competences' className='mx-auto flex flex-col items-center bg-black relative'>
                <h2 className='font-lora font-bold mt-12 md:py-2 md:px-2 mb-12 md:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>A PROPOS</h2>
                <h3 className=' font-serif italic  mt-12 md:py-2 md:px-2 mb-12 md:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Mes compétences à votre service</h3>
                <div className='flex flex-row flex-wrap w-full justify-center gap-6 lg:py-20 h-auto'>
                <Progress percent={'90%'} color={'red'} logo={htmlLogo} skill="HTML&CSS" content="Installer un environnement de développement front-end,
                    Agencer le contenu des pages. 
                    Utiliser des fonctionnalités avancées de HTML et CSS.
                    Intégrer du contenu conformément à une maquette,
                    Implémenter une interface responsive,
                    Intégrer une maquette en mobile-first,
                    Versionner son projet avec Git et Github,
                    Mettre en œuvre des animations CSS"/>
                <Progress percent={'80%'} color={'gold'} logo={js} skill="JAVASCRIPT" content="Variables, Types de valeurs, Opérateurs, Fonctions , Conditions ,
                    Boucle, Méthodes, Le regex, Sélecteurs javascript, Les événements en Javascript, 
                    Styliser le DOM, Faire du javascript asynchrone, Créer et utiliser des promesses, Utiliser des API, 
                    Utiliser le Spread operator, Utiliser le Rest operator, Utiliser les fonctions pures, Utiliser les fonctions d'ordres supérieurs, 
                    Utiliser des fonctions comme expression, Créer utiliser des classes, Créer utiliser des sous-classes, 
                    Utiliser les constructors natif, Créer des méthodes, Faire des chaînes de méthodes."/>
                <Progress percent={'80%'} color={'royalblue'} logo={ts} skill="TYPESCRIPT" content="Manipuler la syntaxe de TypeScript,
                    Créer vos propres types de variables,
                    Utiliser un projet JavaScript dans un projet TypeScript,
                    Les types de base,
                    Les tableaux et les objets,
                    Les fonctions, Unions et types, Tuple et Enum,
                    Les Interfaces, Le DOM, TSConfiguration,
                    Les opérateurs, Overloads, Generics,
                    Les classes de base,  Les champs et le raccourci, Interfaces et classes."/>
                <Progress percent={'85%'} color={'teal'} logo={react} skill="REACT" content="Développer une interface web avec Sass,
                    Mettre en œuvre des animations CSS,
                    Initialiser une application avec Create React App,
                    Configurer la navigation entre les pages de l'application avec React Router,
                    Développer des éléments de l'interface d'un site web grâce à des composants React
                    Afficher les données du back end sur l'interface via des appels API, 
                    Configurer des routes API pour la communication client / serveur, 
                    Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front."/>
                <Progress percent={'90%'} color={'mediumseagreen'} logo={seo} skill="SEO" content="Intégrer le référencement Web dans la stratégie marketing d'une organisation ,
                    Décrire le fonctionnement des moteurs de recherche ,
                    Trouver et analyser les bons mots clés pour votre site ,
                    Optimiser votre site en respectant les bonnes pratiques SEO on-page ,
                    Accélérer votre progression grâce au SEO off-page ,
                    Mesurer l'impact de vos efforts SEO,
                    Diagnostiquer la crawlabilité de votre site ,
                    Corriger des erreurs techniques sur votre site afin d'améliorer sa crawlabilité ,
                    Augmenter la vitesse d'un site ,
                    Optimiser le SEO d'un site construit avec un framework JavaScript ,
                    Optimiser le SEO d'un site multilingue,
                    Comprendre ce qu'est l'inclusion numérique ,
                    Évaluer les obstacles à l'accessibilité sur le Web ,
                    Concevoir des contenus web accessibles."/>
                <Progress percent={'80%'} color={'midnightblue'} logo={agile} skill="AGILE" content="Suivre le déroulement du projet grâce à un outil de gestion de projet,
                    Présenter la solution technique,
                    Découper une fonctionnalités en tâches pour préparer le développement,
                    Mettre en place une méthode de veille technologique,
                    Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels,
                    Constituer une équipe agile avec le modèle de Tuckman ,
                    Intégrer les besoins d'utilisateurs ,
                    Utiliser des outils visuels de gestion de projet agile."/>
                <Progress percent={'60%'} color={'lightcoral'} logo={jest} skill="TEST JEST" content="Développer avec les méthodes BDD et TDD,
                    Définir des specifications, suites, résultats attendus, etc.,
                    Écrire des tests géniaux pour maintenir votre code,
                    Identifier le type de bug ,
                    Déboguer du HTML et CSS ,
                    Déboguer des bugs sur le DOM ,
                    Déboguer des bugs sur l’API ,
                    Déboguer une application. "/>
                <Progress percent={'75%'} color={'darksalmon'} logo={git} skill="GIT&GITHUB" content="Installer et configurer Git et GitHub,
                    Utiliser les commandes de base de Git,
                    Corriger les erreurs courantes sur GitHub,
                    Collaborer efficacement grâce à Git et GitHub ,
                    Personnaliser l'usage de Git et GitHub en fonction de vos besoins."/>    
                </div>
            </div>
        </main>    
    )
}

export default Home