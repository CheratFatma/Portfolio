import Title from "./Title"

import imgREACT from "../assets/techno/react.png";
import imgAngular from "../assets/techno/angular.svg";
import imgCSharp from "../assets/techno/csharp.svg";
import imgTYPE from "../assets/techno/typescript.svg";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgMaterialUI from "../assets/techno/materialui.svg";
import imgRedux from "../assets/techno/redux.svg";
import imgDocker from "../assets/techno/docker.svg";
import imgGit from "../assets/techno/git.svg";
import imgAzureDevops from "../assets/techno/azuredevops.svg";
import imgVSCode from "../assets/techno/vscode.svg";
import imgFigma from "../assets/techno/figma.svg";
import imgCypress from "../assets/techno/cypress.svg";






import accenture from "../assets/companies/accenture.png";
import flexiwork from "../assets/companies/flexiwork.png";



const skills = [
    { id: 1, name: "Angular", image: imgAngular },
    { id: 2, name: "React", image: imgREACT },
    { id: 3, name: "C#", image: imgCSharp },
    { id: 4, name: "TypeScript", image: imgTYPE },
    { id: 5, name: "HTML", image: imgHTML },
    { id: 6, name: "CSS", image: imgCSS },
    { id: 7, name: "JavaScript", image: imgJS },
    { id: 8, name: "MaterialUI", image: imgMaterialUI },
    { id: 9, name: "Redux", image: imgRedux },
    { id: 10, name: "Cypress", image: imgCypress },
    { id: 11, name: "Docker", image: imgDocker },
    { id: 12, name: "Git", image: imgGit },
    { id: 13, name: "Azure Devops", image: imgAzureDevops },
    { id: 14, name: "Figma", image: imgFigma },
    { id: 15, name: "VS Code", image: imgVSCode },







    

];


const experiences = [
    {
        id: 1,
        role: "Angular Developer",
        company: "Accenture (en mission chez Michelin)",
        period: "Avril 2025 - Sept 2025",
        description: [
            "Développement de composants front-end modulaires avec Angular (Signals, @if, @for, ngComponentOutlet).",
            "Implémentation d’un Wiki dynamique à partir de Markdown avec navigation interactive (ngx-markdown).",
            "Conception d’une barre de recherche performante avec Fuse.js (filtrage, catégories, historique).",
            "Mise en place du responsive de l’application et intégration des composants dans une librairie partagée.",
            "Mise en place de tests end-to-end avec Cypress pour valider les parcours utilisateurs."

        ],
        image: accenture,
    },
    {
        id: 2,
        role: "Fullstack Developer (C# / TypeScript)",
        company: "Nexus France",
        period: "Avril 2024 - Août 2024",
        description: [
            "Développement de services REST et modèles métiers en C# pour une plateforme médicale.",
            "Conception de vues dynamiques en TypeScript avec appels aux services backend.",
            "Réalisation de tests unitaires sur les processus métiers (admission, transferts, droits)",
            "Refonte du module de sécurité (gestion des mots de passe conforme aux normes santé)."
        ],
        image: null,
    },
    {
        id: 3,
        role: "React Frontend Developer",
        company: "Flexiwork",
        period: "Avril 2021 - Juin 2021",
        description: [
            "Développement de composants front-end en ReactJS avec Redux et Redux-Form.",
            "Implémentation d’interfaces responsives avec Material UI selon les maquettes fournies.",
            "Participation à l’architecture front du site, avec prise en charge complète de la partie ReactJS.",
            "Intégration dans un cycle de développement projet avec gestion des versions, tests et déploiements.",
        ],
        image: flexiwork,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-accent bg-base-100">
                                <img src={skill.image} alt={skill.name}
                                    className="h-16 w-16 object-contain"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
                

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <div className="h-10 w-10 flex items-center justify-center">
                                    {expericence.image && (
                                        <img
                                            src={expericence.image}
                                            alt={expericence.company}
                                            className="object-cover h-10 w-10"
                                        />
                                    )}
                                </div>
                                
                                <div className="ml-4">
                                    <h1 className="text-xl text-base-content font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences