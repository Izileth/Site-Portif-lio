import conectarAoBanco from "express";

const conexao = await conectarAoBanco(process.env.CHAVES_DE_ACESSO_NUVEM)

//Buscar informações no servidor
export async function getTodosProjetos(params) {
    const db = conexao.db("portifolio-iziteh");
    const colecao = db.collection("projetos");
    return colecao.find().toArray();
}