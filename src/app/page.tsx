import Image from "next/image";

export default function Home() {
  return (
    <main >
            <Image
              src="/JoritoFoto.jpeg"
              alt="Jorito Logo"
              width={290.5}
              height={400}
              priority
            />
    </main>
  );
}
