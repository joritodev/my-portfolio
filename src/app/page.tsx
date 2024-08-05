import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
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
    </main>
  );
}
