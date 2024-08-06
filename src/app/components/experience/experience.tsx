import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"
import { TSIcon } from "../icons/typescript-icon"
import { ReactIcon } from "../icons/react-icon"
import { JSIcon } from "../icons/javascript-icon"
import { SassIcon } from "../icons/sass-icon"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experiência" />
            <p>Estudo Front-end por fora da facudlade pois desde que comecei com projetos básicos somente com HTML e CSS, tenho amado me profissionalizar e me capacitar cada vez mais nessa área incrível! Atualmente meus projetos são feitos com base em desafios do Frontend Mentor e por desafios de vagas de emprego que procuro no Youtube.</p>
            <div className="experience-time">
                <div className="experience-language">
                    <a>
                        <ReactIcon />
                    </a>
                    <div className="experience-unit">
                        <div className="experience-measure measure-1"><span>3 meses</span></div>
                    </div>
                </div>
                <div className="experience-language">
                    <a>
                        <JSIcon />
                    </a>
                    <div className="experience-unit">
                        <div className="experience-measure measure-3"><span>9 meses</span></div>
                    </div>
                </div>
                <div className="experience-language">
                    <a>
                        <TSIcon />
                    </a>
                    <div className="experience-unit">
                        <div className="experience-measure measure-1"><span>3 meses</span></div>
                    </div>
                </div>
                <div className="experience-language">
                    <a>
                        <SassIcon />
                    </a>
                    <div className="experience-unit">
                        <div className="experience-measure measure-3"><span>9 meses</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}