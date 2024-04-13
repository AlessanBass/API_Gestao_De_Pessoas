import Head from "next/head";
import styles from "../styles/h.module.css"

export default function Header() {
    return (
        <div>
            <Head>
                <title>Página Incial</title>
            </Head>

            <header>
                <h1
                  className={`${styles.red}`}
                >Logo da página é tenso</h1>

                <nav>
                    <a href="">Sobre</a>|
                    <a href="">Contato</a>
                </nav>
            </header>
        </div>
    );
}