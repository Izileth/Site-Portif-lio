import express from 'express';
import { listarProjetos } from './portifolioControler';

const routes = (app) => {
  app.use(express.json());
  app.get("/portifolio", listarProjetos);

  // Rotas para o Portifólio
  app.get('/portifolio/backport', (req, res) => {
    console.log("Rota '/portifolio/backport' acessada");
    res.status(200).json(data_project);
  });

  // Rotas para outras seções
  app.get('/portifolio/skills', (req, res) => {
    res.status(200).send('Welcome to Abilits');
  });

  app.get('/portifolio/contact', (req, res) => {
    res.status(200).send('Welcome to contacto');
  });

  app.post('/portifolio/login', (req, res) => {
    // Implementar lógica de login com JWT aqui
    // ...
  });

  // Middleware para tratamento de erros (exemplo)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};

export default routes;