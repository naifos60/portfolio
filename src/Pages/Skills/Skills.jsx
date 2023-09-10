import Progress from '../../components/Progress/Progress';
import Card from '../../components/Card/Card';
import htmlLogo from '../../assets/images/htmlcss.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.jpeg';
import git from '../../assets/images/GitHublogo.png';
import jest from '../../assets/images/jest.webp';
import seo from '../../assets/images/seo.jpg';
import agile from '../../assets/images/agile.jpeg';
import ts from '../../assets/images/typescript.png';
import {useState} from 'react'

function Skills() {
    const [open, setOpen] = useState(false);

    function toggleCard(){
            setOpen(!open);
    }
    return(
        <main className='relative mt-16 bg-space bg-no-repeat bg-cover bg-center' > 
        <div id='competences' className='mx-auto flex flex-col items-center '>
                <h2 className='italic font-serif mt-12 md:py-2 md:px-2 mb-12 md:mb-0 text-4xl md:text-6xl text-[hsl(218,81%,95%)] text-center rounded bg-gradient-to-r from-[hsl(218,81%,75%)]'>Mes compétences</h2>
                <div className='flex flex-row flex-wrap w-full justify-center gap-6 lg:py-20 '>
                    <Card logo={htmlLogo} title="HTML5 & CSS3" content="Installer un environnement de développement front-end,
                    Agencer le contenu des pages. 
                    Utiliser des fonctionnalités avancées de HTML et CSS.
                    Intégrer du contenu conformément à une maquette,
                    Implémenter une interface responsive,
                    Intégrer une maquette en mobile-first,
                    Versionner son projet avec Git et Github,
                    Mettre en œuvre des animations CSS" opened={toggleCard}>{<Progress percent={'80%'}/>}
                    </Card>
                    <Card logo={js} title="Javascript" content="Variables, Types de valeurs, Opérateurs, Fonctions , Conditions ,
                    Boucle, Méthodes, Le regex, Sélecteurs javascript, Les événements en Javascript, 
                    Styliser le DOM, Faire du javascript asynchrone, Créer et utiliser des promesses, Utiliser des API, 
                    Utiliser le Spread operator, Utiliser le Rest operator, Utiliser les fonctions pures, Utiliser les fonctions d'ordres supérieurs, 
                    Utiliser des fonctions comme expression, Créer utiliser des classes, Créer utiliser des sous-classes, 
                    Utiliser les constructors natif, Créer des méthodes, Faire des chaînes de méthodes.">
                        {<Progress  percent={'75%'}/>}
                    </Card>
                    <Card logo={ts} title="Typescript" content="Manipuler la syntaxe de TypeScript,
                    Créer vos propres types de variables,
                    Utiliser un projet JavaScript dans un projet TypeScript,
                    Les types de base,
                    Les tableaux et les objets,
                    Les fonctions, Unions et types, Tuple et Enum,
                    Les Interfaces, Le DOM, TSConfiguration,
                    Les opérateurs, Overloads, Generics,
                    Les classes de base,  Les champs et le raccourci, Interfaces et classes.">
                        {<Progress  percent={'75%'}/>}
                    </Card>
                    <Card logo={react} title="React" content="Développer une interface web avec Sass,
                    Mettre en œuvre des animations CSS,
                    Initialiser une application avec Create React App,
                    Configurer la navigation entre les pages de l'application avec React Router,
                    Développer des éléments de l'interface d'un site web grâce à des composants React
                    Afficher les données du back end sur l'interface via des appels API, 
                    Configurer des routes API pour la communication client / serveur, 
                    Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front.">
                        {<Progress  percent={'80%'}/>}
                    </Card>
                    <Card logo={agile} title="Gestion de projets & méthodologie Agile" content="Suivre le déroulement du projet grâce à un outil de gestion de projet,
                    Présenter la solution technique,
                    Découper une fonctionnalités en tâches pour préparer le développement,
                    Mettre en place une méthode de veille technologique,
                    Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels,
                    Constituer une équipe agile avec le modèle de Tuckman ,
                    Intégrer les besoins d'utilisateurs ,
                    Utiliser des outils visuels de gestion de projet agile.">
                        {<Progress  percent={'80%'}/>}
                    </Card>
                    <Card logo={seo} title="Référencement SEO" content="Intégrer le référencement Web dans la stratégie marketing d'une organisation ,
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
                    Concevoir des contenus web accessibles.">
                        {<Progress  percent={'90%'}/>}
                    </Card>
                    <Card logo={git} title="Git&GitHub" content="Installer et configurer Git et GitHub,
                    Utiliser les commandes de base de Git,
                    Corriger les erreurs courantes sur GitHub,
                    Collaborer efficacement grâce à Git et GitHub ,
                    Personnaliser l'usage de Git et GitHub en fonction de vos besoins.">
                        {<Progress  percent={'75%'}/>}
                    </Card>
                    <Card logo={jest} title="Jest" content="Développer avec les méthodes BDD et TDD,
                    Définir des specifications, suites, résultats attendus, etc.,
                    Écrire des tests géniaux pour maintenir votre code,
                    Identifier le type de bug ,
                    Déboguer du HTML et CSS ,
                    Déboguer des bugs sur le DOM ,
                    Déboguer des bugs sur l’API ,
                    Déboguer une application. ">
                        {<Progress  percent={'60%'}/>}
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Skills