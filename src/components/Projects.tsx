import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img7 from '../assets/projects/7.png';
import img8 from '../assets/projects/8.png';
import img9 from '../assets/projects/9.png';



import preview4 from '../assets/projects/preview4.png';
import preview7 from '../assets/projects/preview7.png';


import { Video } from "lucide-react";
import { FaGithub } from "react-icons/fa";



const projects = [
    {
        id: 1,
        title: 'Tetris Game',
        description: 'Jeu de Tetris développé en Java en suivant l’architecture MVC (Modèle - Vue - Contrôleur). Le projet implémente la gestion des pièces (formes L, T, rectangle), leurs rotations, les collisions et le calcul du score. Il intègre également une interface graphique interactive permettant de manipuler les pièces en temps réel sur une grille de jeu.',
        technologies: ['Java'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/Tetris',
        image: img1,
    },
    {
        id: 2,
        title: 'Smartphone Catalog',
        description:'Application web de gestion et de consultation de téléphones permettant aux utilisateurs de parcourir un catalogue, rechercher des appareils et trier les résultats selon différents critères. Le projet intègre un système d’authentification, la possibilité d’ajouter, modifier ou supprimer des téléphones, ainsi qu’une interface développée avec VueJS.',
        technologies: ['PHP', 'VueJS'],
        demoLink: 'https://drive.google.com/file/d/1aIFhrVwpJE3OmAfwUh0f86uinqBoTs-y/view?usp=sharing',
        repoLink: 'https://github.com/CheratFatma/Phones',
        image: img2,
    },
    {
        id: 3,
        title: 'Todo List',
        description:'Application de gestion de tâches développée avec Vue.js permettant de créer, organiser et suivre des listes de todos. Elle intègre un système d’authentification via API, la gestion complète des tâches (création, modification, suppression, complétion) ainsi que des fonctionnalités de filtrage et d’affichage du nombre de tâches restantes.',
        technologies: ['VueJS','JavaScript','HTML', 'CSS', ],
        demoLink: null,
        repoLink: '#',
        image: img3,
    },
    {
        id: 4,
        title: 'Educational Web App for HTML/CSS/JS Assignment Evaluation',
        description:'Développement d’une application web d’évaluation automatisée de projets HTML/CSS/JavaScript. Le système repose sur un robot en Python utilisant Selenium pour analyser les travaux (screenshots, validation W3C, extraction de données) et une application web en Symfony permettant de stocker, afficher et gérer les résultats via une base de données.',
        technologies: ['Symfony','Python','Selenium','JavaScript'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/EvalWeb.git',
        imageLink: preview4,
        image: img4,
    },
    {
        id: 5,
        title: 'Kata : Gilded Rose',
        description:'Implémentation du kata Gilded Rose en Java visant à améliorer et refactoriser un code existant. Le projet met en pratique les principes de clean code et de refactoring sur un code legacy. Ajout de nouvelles règles métier tout en garantissant la stabilité et le comportement initial de l’application. Travail sur la lisibilité, la maintenabilité et l’organisation du code selon les bonnes pratiques de développement.',
        technologies: ['Java', 'JavaScript','HTML', 'CSS', 'gradle'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/GildedRose_Kata.git',
        image: img5,
    },
    {
        id: 6,
        title: 'Kata : Theatrical Players',
        description:'Réalisation du kata Theatrical Players en Java avec transformation de données et génération de rapports. Le projet met l’accent sur le refactoring et l’amélioration de la lisibilité du code existant. Utilisation de JaCoCo pour mesurer la couverture de tests et de PITest pour le mutation testing. Application des bonnes pratiques de conception afin d’améliorer la maintenabilité et la qualité du code.',
        technologies: ['Java','JaCoCo','PITest', 'gradle'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/TheatricalPlayers_Kata.git',
        image: img5,
    },
    {
        id: 7,
        title: 'Donation Platform',
        description: 'Développement d’une plateforme web de dons permettant de publier, rechercher et gérer des annonces. Le projet intègre un système complet avec authentification, messagerie entre utilisateurs et gestion des favoris. Il repose sur une architecture MVC avec Spring Boot, Thymeleaf et une base de données H2. Des fonctionnalités avancées comme les notifications, l’historique de recherche et la gestion des commandes (lots) ont également été implémentées.',
        technologies: ['SpringBOOT','Java','HTML','CSS'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/DonationPlatform.git',
        imageLink: preview7,
        image: img7,
    },
    {
        id: 8,
        title: 'Shape Game',
        description: 'Application interactive développée en Java permettant de créer et manipuler des formes géométriques (cercles, rectangles). Le projet suit l’architecture MVC (Modèle – Vue – Contrôleur) afin de structurer proprement la logique et l’interface. Il met en œuvre plusieurs design patterns tels que Observer, State et Command pour gérer efficacement les interactions. L’application propose une interface graphique intuitive avec mise à jour en temps réel des actions utilisateur.',
        technologies: ['Java', 'Design Patterns'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/ShapeGame.git',
        image: img8,
    },
    {
        id: 9,
        title: 'Personal Portfolio',
        description: 'Déveoppement d’un site portfolio personnel mettant en valeur mes projets, compétences et expériences. Il est réalisé avec React et Vite, il utilise Tailwind CSS et DaisyUI pour un design moderne, responsive et cohérent. L’application repose sur des composants réutilisables, une navigation fluide et l’intégration d’icônes via lucide-react. Elle permet de consulter facilement et rapidement mes réalisations avec aperçus, liens GitHub et démonstrations interactives.',
        technologies: ['Vite','React','daisyUI','Tailwind CSS'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/Portfolio.git',
        image: img9,
    },
    /*
    {
        id: 10,
        title: 'Personal Library Manager',
        description: '',
        technologies: ['Java','Kotlin'],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/?.git',
        imageLink: preview4,
        image: img4,
    },
    {
        id: 11,
        title: 'Order Management Mobile App',
        description: '',
        technologies: [''],
        demoLink: null,
        repoLink: 'https://github.com/CheratFatma/?.git',
        image: img5,
    },
    */
    
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-30 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl aspect-video object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/*
                        <div className="flex">
                            {project.demoLink && project.demoLink !== '#' && (
                                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a>
                            )}

                            <a 
                                className={`btn btn-neutral ${project.demoLink && project.demoLink !== '#' ? 'w-1/3 ml-2' : 'w-full'}`}
                                href={project.repoLink}>
                                <FaGithub className="w-4" />
                            </a>
                        </div>
                        */}

<div className="flex">
    {/* DEMO */}
    {project.demoLink && (
        <a className="btn btn-accent w-2/3" href={project.demoLink}>
            Demo
            <Video className="w-4" />
        </a>
    )}

    {/* IMAGE (seulement si pas de demo) */}
    {!project.demoLink && project.imageLink && (
        <a
            className="btn btn-accent w-2/3"
            href={project.imageLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            Preview
        </a>
    )}

    {/* GITHUB */}
    <a 
        className={`btn btn-neutral ${
            project.demoLink || project.imageLink ? 'w-1/3 ml-2' : 'w-full'
        }`}
        href={project.repoLink}
    >
        <FaGithub className="w-4" />
    </a>
</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects