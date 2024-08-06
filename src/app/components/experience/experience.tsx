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
            <p>Faço projetos front-end através de desafios do site Frontend Mentor</p>
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