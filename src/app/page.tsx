import { Header } from "./components/header/header";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>Faço projetos front-end através de desafios do site Frontend Mentor</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Linguas</h3>
          <div className="languages-info">
            <span>PT-BR - Falante Nativo</span>
            <span>EN-US - Básico</span>
          </div>
          <h3>Educação</h3>
          <div className="education-info">
            <span>🎓</span>
            <span>Bacharelado em Ciência da Computação - Centro Universitário Farias Brito (em andamento)</span>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>Me Contate</button>
          </div>
        </div>
      </div>

    </main>
  );
}
