import Progress from '../../components/Progress/Progress';
import htmlLogo from '../../assets/images/logo/htmlcss.png';
import js from '../../assets/images/logo/js.png';
import react from '../../assets/images/logo/react.png';
import git from '../../assets/images/logo/GitHublogo.png';
import jest from '../../assets/images/logo/jest2.png';
import seo from '../../assets/images/logo/seo.png';
import agile from '../../assets/images/logo/agile.png';
import ts from '../../assets/images/logo/typescript.png';
import bureau from '../../assets/images/background/5.png';


function Skills() {
    return(
        <section id='competences' className='mx-auto  lg:mt-0 flex flex-col items-center relative lg:h-full'>
            <h2 className='font-lora font-bold mt-10 md:py-2 md:px-2 mb-12 lg:mb-0 text-6xl md:text-9xl text-gray-400 text-center absolute  opacity-20 md:-top-10'>A PROPOS</h2>
            <h3 className='font-serif italic  mt-12 md:py-2 md:px-2 mb-12 lg:mb-0 text-3xl md:text-6xl text-white text-center z-10'>Mes compétences à votre service</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full py-12'>
                    <img src={bureau} alt="bureau avec ordinateur dessus" className='hidden lg:flex w-auto h-auto lg:h-555 lg:w-2/4 object-contains lg:my-0 lg:flex-start px-8 lg:pl-0 my-8 lg:mx-0 lg:border-r-2 pb-12 lg:pb-0 lg:pr-36 lg:rounded 'style={{borderRadius: "0% 100% 57% 43% / 98% 65% 35% 2%"}}/>
                <div className='flex flex-col w-full items-center justify-center gap-6 lg:pl-24 h-auto mb-4 md:pt-24 '>
                <Progress percent={'80%'} color={'#C7335C'} logo={js} skill="JAVASCRIPT">
                    {<ul className='text-center'>
                        <li>Variables, Types de valeurs, Opérateurs, Fonctions , Conditions , Boucle, Méthodes, Le regex, Sélecteurs javascript, Les événements en Javascript</li><br/>
                        <li>Styliser le DOM, Faire du javascript asynchrone, Créer et utiliser des promesses, Utiliser des API</li><br/>
                        <li>Utiliser le Spread operator, Utiliser le Rest operator, Utiliser les fonctions pures, Utiliser les fonctions d'ordres supérieurs</li><br/>
                        <li>Utiliser des fonctions comme expression, Créer utiliser des classes, Créer utiliser des sous-classes</li><br/>
                        <li>Utiliser les constructors natif, Créer des méthodes, Faire des chaînes de méthodes.</li>
                    </ul>}
                </Progress>
                <Progress percent={'90%'} color={'#5E308B'} logo={htmlLogo} skill="HTML&CSS">
                    {<ul className='text-center'>
                        <li>Installer un environnement de développement front-end</li><br/>
                        <li>Agencer le contenu des pages</li><br/>
                        <li>Utiliser des fonctionnalités avancées de HTML et CSS</li><br/>
                        <li>Intégrer du contenu conformément à une maquette</li><br/>
                        <li>Implémenter une interface responsive</li><br/>
                        <li>Intégrer une maquette en mobile-first</li><br/>
                        <li>Versionner son projet avec Git et Github</li><br/>
                        <li>Mettre en œuvre des animations CSS</li><br/>
                        <li>Maîtrise de tailwind</li><br/>
                        <li>Maîtrise de Sass</li><br/>
                        <li>Maîtrise des modules CSS3</li>
                    </ul>}</Progress>
                <Progress percent={'80%'} color={'royalblue'} logo={ts} skill="TYPESCRIPT">
                {<ul className='text-center'>
                        <li>Manipuler la syntaxe de TypeScript</li><br/>
                        <li>Créer vos propres types de variables</li><br/>
                        <li>Utiliser un projet JavaScript dans un projet TypeScript</li><br/>
                        <li>Les types de base</li><br/>
                        <li>Les tableaux et les objets</li><br/>
                        <li>Les fonctions, Unions et types, Tuple et Enum</li><br/>
                        <li>Les Interfaces, Le DOM, TSConfiguration</li><br/>
                        <li>Les opérateurs, Overloads, Generics</li><br/>
                        <li>Les classes de base,  Les champs et le raccourci, Interfaces et classes</li>
                    </ul>}</Progress>
                <Progress percent={'85%'} color={'#4DA59C'} logo={react} skill="REACT">
                    {<ul className='text-center'>
                        <li>Développer une interface web avec Sass</li><br/>
                        <li>Mettre en œuvre des animations CSS</li><br/>
                        <li>Initialiser une application avec Create React App</li><br/>
                        <li>Configurer la navigation entre les pages de l'application avec React Router</li><br/>
                        <li>Développer des éléments de l'interface d'un site web grâce à des composants React</li><br/>
                        <li>Afficher les données du back end sur l'interface via des appels API,</li><br/>
                        <li>Configurer des routes API pour la communication client / serveur</li><br/>
                        <li>Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front</li>
                    </ul>}
                </Progress>
                <Progress percent={'90%'} color={'#42914D'} logo={seo} skill="SEO">
                    {<ul className='text-center'>
                        <li>Intégrer le référencement Web dans la stratégie marketing d'une organisation</li><br/>
                        <li>Décrire le fonctionnement des moteurs de recherche</li><br/>
                        <li>Trouver et analyser les bons mots clés pour votre site</li><br/>
                        <li>Optimiser votre site en respectant les bonnes pratiques SEO on-page</li><br/>
                        <li>Accélérer votre progression grâce au SEO off-page</li><br/>
                        <li>Mesurer l'impact de vos efforts SEO</li><br/>
                        <li>Diagnostiquer la crawlabilité de votre site</li><br/>
                        <li>Corriger des erreurs techniques sur votre site afin d'améliorer sa crawlabilité</li><br/>
                        <li>Augmenter la vitesse d'un site</li><br/>
                        <li>Optimiser le SEO d'un site construit avec un framework JavaScript</li><br/>
                        <li>Optimiser le SEO d'un site multilingue</li><br/>
                        <li>Comprendre ce qu'est l'inclusion numérique</li><br/>
                        <li>Évaluer les obstacles à l'accessibilité sur le Web</li><br/>
                        <li>Concevoir des contenus web accessibles</li>
                    </ul>}
                </Progress>
                <Progress percent={'80%'} color={'#98C454'} logo={agile} skill="AGILE">
                    {<ul className='text-center'>
                        <li>Suivre le déroulement du projet grâce à un outil de gestion de projet</li><br/>
                        <li>Présenter la solution technique</li><br/>
                        <li>Découper une fonctionnalités en tâches pour préparer le développement</li><br/>
                        <li>Mettre en place une méthode de veille technologique</li><br/>
                        <li>Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels</li><br/>
                        <li>Constituer une équipe agile avec le modèle de Tuckman</li><br/>
                        <li>Intégrer les besoins d'utilisateurs</li><br/>
                        <li>Utiliser des outils visuels de gestion de projet agile</li>
                    </ul>}
                </Progress>
                <Progress percent={'60%'} color={'#F09C38'} logo={jest} skill="JEST">
                {<ul className='text-center'>
                        <li>Développer avec les méthodes BDD et TDD</li><br/>
                        <li>Définir des specifications, suites, résultats attendus, etc...</li><br/>
                        <li>Écrire des tests géniaux pour maintenir votre code</li><br/>
                        <li>Identifier le type de bug</li><br/>
                        <li>Déboguer du HTML et CSS </li><br/>
                        <li>Déboguer des bugs sur le DOM</li><br/>
                        <li>Déboguer des bugs sur l’API</li><br/>
                        <li>Déboguer une application</li>
                    </ul>}
                </Progress>
                <Progress percent={'75%'} color={'gold'} logo={git} skill="GIT&GITHUB">
                {<ul className='text-center'>
                        <li>Installer et configurer Git et GitHub</li><br/>
                        <li>Utiliser les commandes de base de Git</li><br/>
                        <li>Corriger les erreurs courantes sur GitHub</li><br/>
                        <li>Collaborer efficacement grâce à Git et GitHub</li><br/>
                        <li>Personnaliser l'usage de Git et GitHub en fonction de vos besoins</li>
                    </ul>}
                </Progress>   
                </div>
            </div>
        </section>
    )
}

export default Skills