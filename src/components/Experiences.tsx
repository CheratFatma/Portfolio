import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/accenture.png";
import meta from "../assets/companies/nexus_france.png";
import amazon from "../assets/companies/flexiwork.png";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];


const experiences = [
    {
        id: 1,
        role: "Angular Developer",
        company: "Accenture (en mission chez Michelin)",
        period: "Avril 2025 - Sept 2025",
        description: [
            "Implémentation d’un Wiki à partir d’un fichier Markdown, avec rendu HTML dynamique, menu ancré interactif et scroll synchronisé via ngx-markdown.",
            "Développement d’une barre de recherche modulaire avec Fuse.js, signaux (@signal,@computed), @if, @for, et composants injectés dynamiquement via ngComponentOutlet.",
            "Création complète de la version responsive (mobile, tablette, full HD) du site d’administration.",
            "Application des standards internes Michelin (atomic design, theming SCSS, accessibilité).",
            "Collaboration avec un tech lead (refacto, bonnes pratiques).",
            "Tous les composants développés ont été intégrés à la librairie interne Falcon et sont réutilisables dans l’ensemble des différentes applications Michelin.",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Fullstack Developer (C# / TypeScript)",
        company: "Nexus France",
        period: "Avril 2024 - Août 2024",
        description: [
            "Intervention sur Emed, une plateforme médicale de gestion de dossiers patients, ordonnances, rendez-vous et traçabilité des soins.",
            "Analyse fonctionnelle et technique des besoins, rédaction de spécifications à partir des documents internes",
            "Réalisation de tests unitaires pour les circuits admission patient, transferts, changements d’UF/UM, et activation/désactivation de droits",
            "Développement de modèles métiers en C# et services REST, utilisés dans des vues front TypeScript",
            "Conception de vues dynamiques en TypeScript avec appels asynchrones aux services backend",
            "Refonte complète du module de changement de mot de passe, pour le rendre conforme aux exigences de sécurité gouvernementales liées au secteur de la santé",
        ],
        image: null,
    },
    {
        id: 3,
        role: "React Frontend Developer",
        company: "Flexiwork",
        period: "Avril 2021 - Juin 2021",
        description: [
            "Développement de composants front-end en ReactJS avec Redux et Redux-Form",
            "Implémentation d’interfaces responsives avec Material UI selon les maquettes fournies",
            "Participation à l’architecture front du site, avec prise en charge complète de la partie ReactJS",
            "Intégration dans un cycle de développement projet avec gestion des versions, tests et déploiements",
        ],
        image: amazon,
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
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
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
                                    <h1 className="text-xl text-accent font-bold">
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