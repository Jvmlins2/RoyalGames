import Footer from "@/components/footer/footer";
import Header from "@/components/header/header"
import styles from "./jogo.module.css"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatarPreco } from "@/utils/formatacao";
import { listarPorId } from "@/pages/api/jogoService";

interface Genero {
  generoID: number,
  nome: string
}

const DetalheJogo = () => {

  interface Jogo {
    nome: string,
    descricao: string,
    preco: number,
    classificacaoId: number,
    imagemUrl: string,
    generos: string[],
    plataforma: string[],
}

    const [jogo, setJogo] = useState<Jogo>();

    const params = useParams();

    const id = params?.id;

    async function listaJogo() {
        try {
            const response = await listarPorId(Number(id))

            setJogo(response)
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        if (!id) return;

        setTimeout(() => {
            listaJogo();
        }, 1000);
    }, [id])

    return (
        <>
            <Header />
            <article id={styles.container}>
                {jogo ? (<>
                    <div id={styles.conteudo}>
                        <h1>Destalhes do Jogo</h1>
                        <hr></hr>
                        <section className={styles.sobre}>
                            <img src={jogo.imagemUrl} alt="" />
                            <div id={styles.textos}>
                                <h2>{jogo.nome}</h2>
                                <p>{jogo.descricao}</p>
                            </div>
                        </section>
                        <section id={styles.info}>
                            <div id={styles.infoDireita}>
                                <div className={styles.campo}>
                                    <h3>Classificação indicativa:</h3>
                                    <p>{jogo.classificacaoId}</p>
                                </div>
                                <div className={styles.campo}>
                                    <h3>Preço:</h3>
                                    <p>{formatarPreco(jogo.preco)}</p>
                                </div>
                            </div>
                            <div id={styles.infoEsquerda}>

                                <div className={styles.campo}>
                                    <h3>Plataformas:</h3>
                                    <ul>
                                        {jogo.plataforma.map((plataforma) => (
                                            <li key={plataforma}>{plataforma}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.campo}>
                                    <h3>Gêneros:</h3>
                                    <ul>
                                        {jogo.generos.map((genero) => (
                                            <li key={genero}>{genero}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
                ) : (<section className={styles.sobre}>
                    <p>Carregando jogo...</p>
                </section>)}
            </article>
            <Footer />
        </>
    )
}
export default DetalheJogo;