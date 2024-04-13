import Head from "next/head";
import styles from "../styles/h.module.css"
import Link from "next/link";

// Definição de interface para as props do componente Header
interface HeaderProps {
    descricaoPagina: string; // Defina o tipo de todas as props conforme necessário
}


export default function Header(props: HeaderProps) {
    
    return (
        <div>
            <Head>
                <title>{props.descricaoPagina}</title>
                <script src="https://kit.fontawesome.com/29712bfbae.js" crossOrigin="anonymous"></script>
            </Head>

            <header
                className={`${styles.header}`}
            >
                <Link
                    href="/"
                >
                    Logo
                </Link>

                <nav

                >
                    <a href="">Sobre</a>
                    <a href="">Contato</a>
                </nav>
            </header>
        </div>
    );
}