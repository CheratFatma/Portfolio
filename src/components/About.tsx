import Title from "./Title"
import img from '../assets/img.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeuse Frontend",
        description: "Je conçois des interfaces modernes, réactives et accessibles avec Angular, React et des frameworks UI, en accord avec les besoins utilisateurs et les bonnes pratiques.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeuse Backend",
        description: "Je développe des APIs REST et des services backend fiables, en utilisant plusieurs technologies (C#, Java, Python…) et en m’adaptant aux contraintes techniques de chaque projet.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionnée par l'UI/UX",
        description: "Je crée des interfaces intuitives, ergonomiques et responsive, en accord avec les maquettes et les standards UI/UX, pour offrir une expérience fluide et cohérente.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="md:h-screen flex justify-center items-center ">
                <div className="hidden md:block">
                    <img src={img} alt="" className=" w-96 object-cover rounded-xl"
                    />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default About