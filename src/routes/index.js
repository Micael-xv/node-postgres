import LojaOnline from "../models/LojaOnline";
import clienteRoutes from "./clienteRoute";
import entregaRoutes from "./entregaRoute";
import fornecedorRoute from "./fornecedorRoute";
import lojaOnlineRoute from "./lojaOnlineRoute";
import pedidoRoute from "./pedidoRoute";

function Routes(app) {
  clienteRoutes(app);
  entregaRoutes(app);
  fornecedorRoute(app);
  lojaOnlineRoute(app);
  pedidoRoute(app);
}
export default Routes;