import entregaController from "../controllers/entregaController";

export default (app) => {
  app.get('/entrega', entregaController.get);
  app.get('/entrega/:id', entregaController.get);
  app.post('/entrega', entregaController.create);
  app.patch('/entrega/:id', entregaController.update);
  app.delete('/entrega/:id', entregaController.destroy);
};