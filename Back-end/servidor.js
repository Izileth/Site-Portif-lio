import express from "express";
import routes from "./src/routes/portifolioRoutes.js";
const app = express();

routes(app)

// Rota para a porta do servidor

app.listen(3000, () => {
    console.log('Server is running on port 3000'); // Corrigido para 3001
});


