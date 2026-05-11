import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer id={styles.footer}>
                <div id={styles.footer_icons}>
                    <img src="./logo_footer.png" alt="" />
                </div>
                <div id={styles.contatos}>
                    <p>royalgames@gmail.com</p>
                    <p>(11) 99999-9999</p>
                    <p>@RoyalGames</p>
                </div>
        </footer>
    )
}