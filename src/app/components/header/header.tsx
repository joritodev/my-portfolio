import Image from "next/image";
import "./header.scss"
export function Header() {
    return (

            <div className="header">
                <div>
                    <h1>Oii, eu sou João Victor 👋</h1>
                    <h2>Desenvolvedor Front-End</h2>
                </div>
                <Image
                    src="/Jorito.png"
                    alt="Jorito Foto"
                    width={220}
                    height={220}
                    priority
                />
            </div>
    )
}