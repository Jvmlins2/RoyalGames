import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header id={styles.header}>
                <div id={styles.logo}>
                    <img src="./logo.png" alt="" />
                </div>
                <div id={styles.contatos}>
                    <Link href="../home#catalogo">Catálogo</Link>
                    <Link href="../login"> Login</Link>
                </div>
        </header>
    )
}