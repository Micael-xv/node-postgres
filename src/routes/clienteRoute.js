import clienteController from "../controllers/clienteController";

export default (app) => {
  app.get('/cliente', clienteController.get);
  app.get('/cliente/:id', clienteController.get);
  app.post('/cliente', clienteController.create);
  app.patch('/cliente/:id', clienteController.update);
  app.delete('/cliente/:id', clienteController.destroy);
};

