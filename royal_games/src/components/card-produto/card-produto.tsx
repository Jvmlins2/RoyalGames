import Link from "next/link";
import styles from "./card-produto.module.css";
import { formatarPreco } from "@/utils/formatacao";

type Jogo ={
    jogoID: number,
    nome: string,
    descricao: string,
    preco: number,
    img: string,
    estaLogado: boolean,
    onDelete: (jogoId: number) => void
}

const CardJogo = ({jogoID, nome, descricao, preco, img, estaLogado, onDelete} : Jogo) =>{
    
    return(
        <article id={styles.card}>
            <Link href={"/jogo/" + jogoID}>
                <img src={img} alt="" />
            </Link>
            <h3>{nome}</h3>
            <h3>{descricao}</h3>
            <h4>{formatarPreco(preco)}</h4>
            <Link href={"/jogo/" + jogoID}>
                <button className={styles.botao_editar}>Detalhes</button>
            </Link>
            {estaLogado &&(<>
                <button onClick={() => onDelete(jogoID)} id={styles.botao_excluir}>
                    Excluir
                </button>
                <Link href={"/jogo/" + jogoID} id={styles.botao_editar}>
                    Editar
                </Link>
                </>
            )}
        </article>
    )
}

export default CardJogo;