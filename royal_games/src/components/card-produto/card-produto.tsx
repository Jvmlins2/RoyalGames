import Link from "next/link";
import styles from "./card-produto.module.css";
import { formatarPreco } from "@/utils/formatacao";

type Jogo ={
    jogoID: number,
    nome: string,
    descricao: string,
    preco: number,
    img: string,
}

const CardJogo = ({jogoID, nome, descricao, preco, img} : Jogo) =>{
    
    return(
        <article id={styles.card}>
            <Link href={"/detalhe-jogo/" + jogoID}>
                <img src={img} alt="" />
            </Link>
            <h3>{descricao}</h3>
            <h3>{nome}</h3>
            <h4>{preco}</h4>
            <Link href={"/detalhe-jogo/" + jogoID}>
                <button className={styles.botao_editar}>Detalhes</button>
            </Link>     
        </article>
    )
}

export default CardJogo;