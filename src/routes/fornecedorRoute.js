import fornecedorController from "../controllers/fornecedorController";

export default (app) => {
  app.get('/fornecedor', fornecedorController.get);
  app.get('/fornecedor/:id', fornecedorController.get);
  app.post('/fornecedor', fornecedorController.create);
  app.patch('/fornecedor/:id', fornecedorController.update);
  app.delete('/fornecedor/:id', fornecedorController.destroy);
};