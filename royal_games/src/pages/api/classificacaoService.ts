import { api } from "./api";

export async function listarClassificacao(){
    try{
        const response = api.get("ClassificacaoIndicativa");
        return response;
    }catch(error: any){
        throw new Error(error.response.data);
    }
}