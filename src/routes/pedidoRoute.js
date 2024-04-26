import pedidoController from "../controllers/pedidoController";

export default (app) => {
  app.get('/pedido', pedidoController.get);
  app.get('/pedido/:id', pedidoController.get);
  app.post('/pedido', pedidoController.create);
  app.patch('/pedido/:id', pedidoController.update);
  app.delete('/pedido/:id', pedidoController.destroy);
};