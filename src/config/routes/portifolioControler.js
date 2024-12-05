import { getTodosProjetos } from "../models/portifolioModels.js";

export async function listarProjetos(req, res){
    // Chama a função para bucas os projetos
    const data_project = await getTodosProjetos();
    // Envia uma resposta HTTP com status 200 (OK) e os posts em formato json
    res.status(200).json(data_project);
}
 