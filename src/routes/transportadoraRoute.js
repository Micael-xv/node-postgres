import transportadoraController from "../controllers/transportadoraController";

export default (app) => {
  app.get('/transportadora', transportadoraController.get);
  app.get('/transportadora/:id', transportadoraController.get);
  app.post('/transportadora', transportadoraController.create);
  app.patch('/transportadora/:id', transportadoraController.update);
  app.delete('/transportadora/:id', transportadoraController.destroy);
};