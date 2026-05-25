import { api } from "./api";


type JogoFormulario = {
    Nome: string,
    Descricao: string,
    Preco: string,
    Imagem: File | null,
    classificacaoIds: number[],
    generoIds: number[]
}

interface JogoListagem {
    nome: string,
    descricao: string,
    preco: string,
    generoId: number[],
    classificacaoId: number[],
    plataforma: string,
    imagemUrl: string,
    statusJogo: boolean
}

export async function cadastrarJogo(dados: JogoFormulario) {
    try {
        const formData = new FormData();

        formData.append("Nome", dados.Nome);
        formData.append("Descricao", dados.Descricao);
        formData.append("Preco", dados.Preco);
        if (dados.Imagem) {
            formData.append("Imagem", dados.Imagem);
        }
        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })
        formData.append("classificacaoIds", "1");


        await api.post("Jogos", formData);

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarJogo() {
    try {
        const response = await api.get("Jogo");

        

        const jogosAtivos = response.data.filter(
            (jogo: JogoListagem) => jogo.statusJogo === true
        );

        const jogos = jogosAtivos.map((jogo: JogoListagem) => ({
            ...jogo,
            imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        }));

        console.log(jogos)
        return jogos;

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number) {
    try {
        const response = await api.get("Jogo/" + id);

        const jogo = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return jogo;

    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function excluirJogo(jogoId: number) {
    try {
        await api.delete("Jogo/" + jogoId)
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function editarJogo(jogoId: number, dados: JogoFormulario) {
    try {
        const formData = new FormData();

        formData.append("nome", dados.Nome);
        formData.append("descricao", dados.Descricao);
        formData.append("preco", dados.Preco);
        if (dados.Imagem) {
            formData.append("imagem", dados.Imagem);
        }
        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })
        dados.classificacaoIds.forEach((id) => {
            formData.append("classificacaoIds", id.toString());
        })

        await api.put("Jogo/" + jogoId, formData)

    } catch (error: any) {
        throw new Error(error.response.data);
    }
}
