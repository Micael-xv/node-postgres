import LojaOnline from "../models/LojaOnline";
import clienteRoutes from "./clienteRoute";
import entregaRoutes from "./entregaRoute";
import fornecedorRoute from "./fornecedorRoute";
import lojaOnlineRoute from "./lojaOnlineRoute";
import pedidoRoute from "./pedidoRoute";
import produtoRoute from "./produtoRoute";
import transportadoraRoute from "./transportadoraRoute";

function Routes(app) {
  clienteRoutes(app);
  entregaRoutes(app);
  fornecedorRoute(app);
  lojaOnlineRoute(app);
  pedidoRoute(app);
  produtoRoute(app);
  transportadoraRoute(app);
}
export default Routes;