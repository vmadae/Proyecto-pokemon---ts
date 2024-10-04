//Se importa la funcionalidad Router desde el paquete express, permite separar las rutas según funcionalidades o controladores.
import { Router } from "express";
//Se importa controlador getCombinedInfo
import { getCombinedInfo } from "../controllers/contestController";

//Se crea instancia de enrutador
const router = Router();

//Definición de la ruta con método HTTP GET
//Los : indican que son valores dinámicos
//getCombinedInfo controlador que manejará la solicitud cuando se haga el GET
router.get('/combined-info/:contestId/:berryId', getCombinedInfo);

//Se exporta el enrutador configurado, permitiendo que sea importado en otro archivo
export default router;