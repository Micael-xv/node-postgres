import LojaOnlineController from "../controllers/LojaOnlineController";

export default (app) => {
  app.get('/LojaOnline', LojaOnlineController.get);
  app.get('/LojaOnline/:id', LojaOnlineController.get);
  app.post('/LojaOnline', LojaOnlineController.create);
  app.patch('/LojaOnline/:id', LojaOnlineController.update);
  app.delete('/LojaOnline/:id', LojaOnlineController.destroy);
};