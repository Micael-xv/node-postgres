import produtoController from "../controllers/produtoController";

export default (app) => {
  app.get('/produto', produtoController.get);
  app.get('/produto/:id', produtoController.get);
  app.post('/produto', produtoController.create);
  app.patch('/produto/:id', produtoController.update);
  app.delete('/produto/:id', produtoController.destroy);
};