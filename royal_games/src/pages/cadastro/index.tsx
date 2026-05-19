import styles from "./cadastro.module.css"
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useState, useEffect } from "react";
import ListaJogo from "@/components/lista-jogo/lista-jogo";
import { cadastrarJogo } from "../api/jogoService";
import { listarGenero } from "../api/generoService";
import { notificacao, erro } from "@/utils/toast";

interface Genero {
    generoID: number,
    nome: string
    }

interface Classificacao {
    classificacaoId: number,
    nome: string
    }
    
const Cadastro = () => {

    const Jogo = () => {

  const [generos, setGeneros] = useState<Genero[]>([]);
  const [classificacao, setClassificacao] = useState<Classificacao[]>([]);
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [plataforma, setPlataforma] = useState<string>("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [generosSelecionados, setgenerosSelecionados] = useState<number[]>([]);
  const [classificacaoSelecionada, setclassificacaoSelecionada] = useState<number[]>([]);

  async function listarGeneroEmJogo() {
    const lista = await listarGenero();
    setGeneros(lista.data);
    console.log(lista.data);
  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{

      const dados = {
        nome,
        descricao,
        preco,
        imagem,
        plataforma,
        generoID: generosSelecionados
      }

      await Cadastrar

      notificacao("Jogo cadastrado!");

    }catch(error: any){
      erro(error.message);
    }

  }


  useEffect(() => {
    listarGeneroEmJogo();
  }, [])

    return (
        <>
            <Header />
            <main id={styles.main}>
                {/* SECAO CADASTRO */}
                <section id={styles.cadastro} className="layout_guide">
                    <h1 id={styles.titulo_cadastro}>Cadastrar novo jogo</h1>
                    <form id={styles.form} action="">
                        <div id={styles.cadastro_esquerda}>
                            <div id={styles.nome} className={styles.div_form}>
                                <label htmlFor="">Nome</label>
                                <input type="text"
                value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div id={styles.esquerda_meio}>
                                <div id={styles.valor} className={styles.div_form}>
                                    <label htmlFor="">Valor</label>
                                    <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                                </div>
                                <div id={styles.genero} className={styles.div_form}>
                                    <label htmlFor="">Genero</label>
                                    <select 
                                    value={generosSelecionados.map(String)}
                                    onChange={(e) => setgenerosSelecionados(
                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                    )}>
                                    {generos.map((item) => (
                                    <option value={item.generoID} key={item.generoID}>{item.nome}</option>
                                    )
                                    )}
                                    </select>
                                </div>
                                <div id={styles.class_indic} className={styles.div_form}>
                                    <label htmlFor="">Classificação</label>
                                    <select 
                                    value={generosSelecionados.map(String)}
                                    onChange={(e) => setgenerosSelecionados(
                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                    )}>
                                    {generos.map((item) => (
                                    <option value={item.generoID} key={item.generoID}>{item.nome}</option>
                                    )
                                    )}
                                    </select>
                                </div>
                            </div>
                            <div id={styles.esquerda_baixo}>
                                <div id={styles.plataforma} className={styles.div_form}>
                                    <label htmlFor="">Plataforma</label>
                                    <input type="text"
                value={plataforma} onChange={(e) => setPlataforma(e.target.value)} />
                                </div>
                                <div id={styles.imagem} className={styles.div_form}>
                                    <label htmlFor="">Imagem</label>
                                    <input type="file" onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                    setImagem(e.target.files[0]);
                                   }
                                 }}
                                />
                                </div>
                            </div>
                        </div>
                        <div id={styles.cadastro_direita} className={styles.div_form}>
                            <label htmlFor="">Descrição</label>
                            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                        </div>
                    </form>
                    <button id={styles.btn_cadastro}>Cadastrar</button>
                </section>

                {/* SECAO LISTA JOGOS */}

                <h2 id={styles.titulo_lista}>Lista de jogos</h2>
                <ListaJogo/>
            </main>

            <Footer />
        </>
    )
}
}
export default Cadastro;