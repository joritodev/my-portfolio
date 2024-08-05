import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return (
        <div className="infos">
            <SectionTitle text="Linguas"/>
            <div className="languages-info">
                <span>PT-BR - Falante Nativo</span>
                <span>EN-US - Básico</span>
            </div>
            <SectionTitle text="Educação"/>
            <div className="education-info">
                <span>🎓</span>
                <span>Bacharelado em Ciência da Computação - Centro Universitário Farias Brito (em andamento)</span>
            </div>
        </div>
    )
}