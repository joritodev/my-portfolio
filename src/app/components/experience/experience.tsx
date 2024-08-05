import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"
export function Experience() {
    return (
            <div className="experience">
                <SectionTitle text="Experience"/>
                <p>Faço projetos front-end através de desafios do site Frontend Mentor</p>
                <div className="experience-time"></div>
            </div>
    )
}